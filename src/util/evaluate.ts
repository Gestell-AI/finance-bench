import fetch from "node-fetch";

export interface EvaluateRequest {
  experiment_id: string;
  financebench_id: string;
  question_id: number;
  prompt: string;
  response: string;
  answer: string;
}

export default async function submitEvaluation({
  experiment_id,
  financebench_id,
  question_id,
  prompt,
  response,
  answer,
}: EvaluateRequest) {
  const res = await fetch("https://api.patronus.ai/v1/evaluate", {
    method: "POST",
    headers: {
      "X-API-KEY": process.env.PATRONUS_API_KEY || "",
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      evaluators: [
        {
          evaluator: "judge-small-2024-08-08",
          criteria: "patronus:fuzzy-match",
        },
      ],
      experiment_id,
      evaluated_model_input: prompt,
      evaluated_model_output: response,
      evaluated_model_gold_answer: answer,
      tags: {
        dataset_type: "financebench",
        financebench_id,
        question: String(question_id),
      },
    }),
  });

  return await res.json();
}
