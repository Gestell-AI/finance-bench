import "colors";
import { Gestell } from "@gestell/sdk";

const gestell = new Gestell();

export async function setup() {
  const collections = await gestell.collection.list({
    search: "Finance Bench Collection",
  });

  if (collections.result.length > 0) {
    console.log(
      "Checking the status of the collection: Finance Bench Collection".green
        .bold,
    );
    const { id: collectionId } = collections.result[0];
    const { stats } = await gestell.collection.get(collectionId);
    if (stats) {
      console.log("Total Documents".blue.bold, stats.docs);
      console.log("Total Nodes".blue.bold, stats.nodes);
      console.log(
        "Total Documents Processed".blue.bold,
        stats.status.documents,
      );
      console.log(
        "Total Document Nodes Processed".blue.bold,
        stats.status.nodes,
      );
      console.log(
        "Total Document Vectors Processed".blue.bold,
        stats.status.vectors,
      );
      console.log(
        "Total Document Edges Processed".blue.bold,
        stats.status.edges,
      );

      if (
        stats.status.documents === stats.docs &&
        stats.status.nodes === stats.docs &&
        stats.status.vectors === stats.docs &&
        stats.status.edges === stats.docs
      ) {
        console.log(
          "The Collection: Finance Bench Collection is ready for evaluation"
            .green.bold,
        );
      } else {
        console.log(
          "The Collection: Finance Bench Collection is still processing".yellow
            .bold,
        );
      }
    }
  } else {
    console.log(
      "The Collection: Finance Bench Collection does not exist".red.bold,
    );
  }
}

setup();
