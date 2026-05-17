import { NextResponse } from "next/server";
import mammoth from "mammoth";
import { Buffer } from "buffer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({
        error: "No file uploaded.",
      });
    }

    const buffer = Buffer.from(
      await file.arrayBuffer()
    );

    let text = "";

    if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result =
        await mammoth.extractRawText({
          buffer,
        });

      text = result.value;
    }

    return NextResponse.json({
      filename: file.name,
      text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "File parsing failed.",
      },
      {
        status: 500,
      }
    );
  }
}