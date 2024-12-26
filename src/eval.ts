import "colors";
import { Gestell } from "@gestell/sdk";
import dataset from "util/finance-bench.json";
import { removeCodeBlocks } from "util/clean";
import submitEvaluation from "util/evaluate";
import { write } from "fs-jetpack";
import { join } from "node:path";

const gestell = new Gestell({
  url: "http://localhost:4200",
});

const PATRONUS_EVAL = process.env.PATRONUS_EVAL === "true" ? true : false;
const PATRONUS_EXPERIMENT_ID = process.env.PATRONUS_EXPERIMENT_ID || "";

export async function evaluate() {
  console.log("Running evaluation for the Finance Bench Collection".green.bold);
  console.log("Evaluation submission is set to".green.bold, PATRONUS_EVAL);

  if (PATRONUS_EVAL && !PATRONUS_EXPERIMENT_ID) {
    console.log(
      "Evaluation submission is set to true, but no experiment ID was provided"
        .red.bold,
    );
    process.exit();
  }
  if (PATRONUS_EVAL && !process.env.PATRONUS_API_KEY) {
    console.log(
      "Evaluation submission is set to true, but no Patronus API Key was provided"
        .red.bold,
    );
    process.exit();
  }

  const collections = await gestell.collection.list({
    search: "Finance Bench Collection",
  });

  if (collections.result.length > 0) {
    const { id: collectionId } = collections.result[0];
    for (const [index, item] of dataset.entries()) {
      const question = index + 1;

      console.log("Question #".green, question, "of".green, dataset.length);
      const prompt = `In the document ${item.doc_name.replaceAll("_", " ").replace(".pdf", "")}, ${item.question}`;
      console.log("Prompt:".green, prompt);
      console.log("Generating Response".green.bold);
      console.log("-------------".green.bold);

      const streamer = await gestell.query.prompt({
        collectionId,
        prompt,
        method: "normal",
        vectorDepth: 15,
        maxQueries: 1, // Looking only at 1 document per query
        cot: true,
        chat: false,
      });

      const stream = streamer.getReader();
      let response = "";
      while (true) {
        const { done, value } = await stream.read();
        if (done) break;
        process.stdout.write(value);
        response += value;
      }

      console.log("\n-------------".green.bold);
      console.log("Correct Answer is:".green, item.answer);

      if (PATRONUS_EVAL) {
        await submitEvaluation({
          experiment_id: PATRONUS_EXPERIMENT_ID,
          financebench_id: item.financebench_id,
          question_id: question,
          prompt,
          response: removeCodeBlocks(response),
          answer: item.answer,
        });
        console.log("Evaluation Submitted".green.bold);
      }

      const questionJsonPath = join(
        process.cwd(),
        "responses",
        `question-${question}.json`,
      );
      const questionJson = {
        prompt,
        response,
        answer: item.answer,
        question,
      };
      write(questionJsonPath, JSON.stringify(questionJson, null, 2));

      const questionMarkdownPath = join(
        process.cwd(),
        "responses",
        `question-${question}.md`,
      );
      const questionMarkdown = `# Question ${question}\n\n## Prompt\n\n${prompt}\n\n## Response\n\n${response}\n\n## Correct Answer\n\n${item.answer}`;
      write(questionMarkdownPath, questionMarkdown);
      console.log("Stored response in responses folder".blue.bold);
      console.log("-------------".green.bold);
    }
  } else {
    console.log(
      "The Collection: Finance Bench Collection does not exist".red.bold,
    );
  }
}

evaluate();
