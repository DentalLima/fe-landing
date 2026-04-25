import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const VALID_TAGS = [
  "siteSettings",
  "hero",
  "trustItem",
  "service",
  "promotion",
  "about",
  "doctor",
  "galleryImage",
  "testimonial",
  "faq",
  "schedule",
];

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret token" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const documentType: string = body?._type || "";

    if (documentType && VALID_TAGS.includes(documentType)) {
      revalidateTag(documentType);
      console.log(`✅ Revalidated tag: ${documentType}`);
    } else {
      VALID_TAGS.forEach((tag) => revalidateTag(tag));
      console.log("✅ Revalidated all tags");
    }

    // Revalidar rutas principales también
    revalidatePath("/");
    revalidatePath("/servicios/[slug]", "page");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tag: documentType || "all",
    });
  } catch (error) {
    console.error("❌ Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: String(error) },
      { status: 500 }
    );
  }
}