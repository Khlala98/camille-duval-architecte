import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  projectType: z.string().min(1),
  surfaceArea: z.string().optional().default(""),
  budgetRange: z.string().min(1),
  city: z.string().optional().default(""),
  desiredTimeline: z.string().optional().default(""),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  message: z.string().optional().default(""),
});

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    const { success } = rateLimit(ip);
    if (!success) {
      return NextResponse.json(
        { success: false, error: "Trop de requêtes. Veuillez patienter une minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Connect Resend for email notifications
    console.log("📬 New contact request:", {
      name: data.fullName,
      email: data.email,
      projectType: data.projectType,
      budget: data.budgetRange,
    });

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
