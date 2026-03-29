import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

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
    const body = await request.json();
    const data = contactSchema.parse(body);

    const contactRequest = await prisma.contactRequest.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        projectType: data.projectType,
        surfaceArea: data.surfaceArea,
        budgetRange: data.budgetRange,
        city: data.city,
        message: data.message,
        desiredTimeline: data.desiredTimeline,
      },
    });

    return NextResponse.json(
      { success: true, id: contactRequest.id },
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
