import { createAgentUIStreamResponse, type UIMessage } from "ai";
import { tutorAgent } from "@/lib/ai/tutor-agent";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  // Verify user is authenticated and has Ultra plan
  const { has, userId } = await auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

//   if (!has?.({ plan: "ultra" })) {
//     return new Response("Ultra membership required", { status: 403 });
//   }

  const body = await request.json();
  console.log("chat body:", body);

  if (!body || !Array.isArray(body.messages)) {
    return Response.json(
      { error: "Expected body: { messages: UIMessage[] }" },
      { status: 400 },
    );
  }

  const { messages }: { messages: UIMessage[] } = body;

  return createAgentUIStreamResponse({
    agent: tutorAgent,
    uiMessages: messages,
  });
}