import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src/data");

async function main() {
  let prisma: PrismaClient;
  try {
    prisma = new PrismaClient();
    await prisma.$connect();
  } catch {
    console.log("⚠ No database found — skipping data generation (using existing JSON files)");
    process.exit(0);
  }

  fs.mkdirSync(DATA_DIR, { recursive: true });

  const projects = await prisma.project.findMany({ orderBy: { order: "asc" } });
  const services = await prisma.service.findMany({
    orderBy: { order: "asc" },
    include: { faqs: { orderBy: { order: "asc" } } },
  });
  const testimonials = await prisma.testimonial.findMany({ orderBy: { rating: "desc" } });
  const processSteps = await prisma.processStep.findMany({ orderBy: { order: "asc" } });

  const write = (name: string, data: unknown) => {
    fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(data, null, 2));
    console.log(`✓ Generated ${name}.json`);
  };

  write("projects", projects);
  write("services", services);
  write("testimonials", testimonials);
  write("process-steps", processSteps);

  await prisma.$disconnect();
  console.log("✅ Data generation complete");
}

main().catch((e) => {
  console.error("⚠ Data generation failed:", e.message);
  process.exit(0); // Don't fail the build
});
