import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    const message =
      body.message || "";

    const context =
      body.context || "";

    const apiKey =
      process.env.GEMINI_API_KEY;

    console.log(
      "GEMINI KEY EXISTS:",
      !!apiKey
    );

    const geminiResponse =
      await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `
${context}

User:
${message}

You are an elite AI career strategist.
`,
                  },
                ],
              },
            ],
          }),
        }
      );

    const data =
      await geminiResponse.json();

    console.log(
      "FULL GEMINI RESPONSE:"
    );

    console.log(
      JSON.stringify(
        data,
        null,
        2
      )
    );

    const text =
      data?.candidates?.[0]
        ?.content?.parts?.[0]
        ?.text;

    return NextResponse.json({
  response:
    text ||
    JSON.stringify(data),
});
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      response:
        "SERVER_ERROR",
    });
  }
}