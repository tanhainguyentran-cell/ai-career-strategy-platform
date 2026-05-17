import { NextResponse } from "next/server";
import mammoth from "mammoth";
// @ts-ignore
import pdfParse from "pdf-parse";

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

    if (file.type === "application/pdf") {
      const parsed = await pdfParse(buffer);

      text = parsed.text;
    } else if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const parsed =
        await mammoth.extractRawText({
          buffer,
        });

      text = parsed.value;
    } else {
      text = buffer.toString("utf-8");
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