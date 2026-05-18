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

    const response =
      await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
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
You are an elite AI career strategist.

Context:
${context}

User:
${message}

Provide:
- strategic advice
- hiring guidance
- execution plans
- career positioning
- AI-native thinking
                    `,
                  },
                ],
              },
            ],
          }),
        }
      );

    const data =
      await response.json();

    const text =
      data?.candidates?.[0]?.content
        ?.parts?.[0]?.text ||
      "No AI response generated.";

    return NextResponse.json({
      response: text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      response:
        "Gemini AI request failed.",
    });
  }
}