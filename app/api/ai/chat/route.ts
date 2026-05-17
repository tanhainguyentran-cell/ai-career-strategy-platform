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
        "http://localhost:11434/api/generate",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            model:
              "llama3.1:8b",

            prompt: `
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

            stream: false,
          }),
        }
      );

    const data =
      await response.json();

    console.log(data);

    console.log(data);

return NextResponse.json({
  response:
    data.response ||
    JSON.stringify(data),
});
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      response:
        "Ollama AI request failed.",
    });
  }
}