import { NextRequest } from "next/server";
import config from "@/app/config/config";

export async function POST(request: NextRequest) {
  // Logging the endpoint you're hitting can be useful for debugging.
  // Consider a more structured logger for production use.
  console.log(`Forwarding request to: ${config.flaskServer}/stop`);

  try {
    const flaskResponse = await fetch(`${config.flaskServer}/stop`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await flaskResponse.json();

    if (!flaskResponse.ok) {
      // Forward the error message from Flask, if any.
      return new Response(JSON.stringify(data), {
        status: flaskResponse.status,
      });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    // Log the error for debugging purposes.
    console.error("Error forwarding request to Flask:", error);

    return new Response(
      JSON.stringify({
        message: `An error occurred while connecting to the Flask server: ${error.message}`,
      }),
      { status: 500 }
    );
  }
}
