import { NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/admin-auth";

export async function GET(request: Request) {
  if (!verifyAdmin(request)) {
    return NextResponse.json(
      { success: false, error: "Non autorisé" },
      { status: 401 }
    );
  }

  return NextResponse.json({ success: true, message: "Admin API OK" });
}
