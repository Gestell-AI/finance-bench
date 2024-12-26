import "colors";
import { Gestell } from "@gestell/sdk";
import { join } from "node:path";
import { list, read } from "fs-jetpack";

const gestell = new Gestell();

export async function setup() {
  const collections = await gestell.collection.list({
    search: "Finance Bench Collection",
  });

  if (collections.result.length > 0) {
    console.log(
      "The Collection: Finance Bench Collection already exists".blue.bold,
    );
    process.exit(0);
  }

  console.log("Creating new Organization Patronus Finance Bench".green.bold);
  const { id: organizationId } = await gestell.organization.create({
    name: "Finance Bench Organization",
    description: "Organization for the Patronus Finance Bench Evaluation",
  });

  const { id: collectionId } = await gestell.collection.create({
    organizationId,
    name: "Finance Bench Collection",
    description:
      "Collection of all Finance Bench related content for the Patronus Finance Bench Evaluation",
    instructions:
      read(join(process.cwd(), "instructions", "MASTER.md"), "utf8") || "",
    promptInstructions:
      read(join(process.cwd(), "instructions", "PROMPT.md"), "utf8") || "",
    tags: ["finance-bench"],
    type: "canon",
  });

  console.log("Organization and Collection created".green.bold);
  console.log("OrganizationId:".blue.bold, organizationId);
  console.log("CollectionId:".blue.bold, collectionId);

  console.log("Uploading all PDFS for Finance Bench".green.bold);
  const pdfPath = join(process.cwd(), "pdfs");
  const pdfs = list(pdfPath);

  if (pdfs && pdfs.length > 0) {
    for (const [index, pdf] of pdfs.entries()) {
      const buffer = read(join(pdfPath, pdf), "buffer");
      if (buffer) {
        const { id: documentId } = await gestell.document.upload({
          collectionId,
          type: "application/pdf",
          name: pdf,
          file: buffer,
        });
        console.log(
          `Uploaded PDF ${pdf} with documentId ${documentId}`.green.bold,
        );
        console.log(`Progress [${index + 1}/${pdfs.length}]`.blue.bold);
      } else {
        console.log(`Failed to read PDF ${pdf}`.red.bold);
      }
    }
  } else {
    console.log("No PDFS found in the pdfs folder".red.bold);
  }

  console.log("Uploaded all PDFS for Finance Bench".green.bold);
}

setup();
