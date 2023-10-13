// app/api/postFlask/route.ts
import { NextRequest } from "next/server";

async function streamToArrayBuffer(
  stream: ReadableStream<Uint8Array>
): Promise<ArrayBuffer> {
  const chunks = [];
  const reader = stream.getReader();

  let chunk;
  while (true) {
    chunk = await reader.read();
    if (chunk.done) {
      break;
    }
    chunks.push(chunk.value);
  }

  return new Uint8Array(chunks.flat()).buffer;
}

export async function POST(request: NextRequest) {
  const path = request.headers.get("x-flask-path") || "";
  try {
    // Convert the ArrayBuffer to a Blob for the FormData object
    const arrayBuffer = await streamToArrayBuffer(request.body);
    const blob = new Blob([new Uint8Array(arrayBuffer)], {
      type: "application/pdf",
    });

    // Create a FormData object and append the blob as a file
    const formData = new FormData();
    formData.append("File", blob, "uploaded.pdf"); // "File" field name to match the Flask endpoint

    const flaskResponse = await fetch(`http://54.212.16.183:5000/${path}`, {
      method: "POST",
      body: formData, // No need to explicitly set headers, fetch will handle it
    });

    if (!flaskResponse.ok) {
      const errorData = await flaskResponse.json();
      console.log(errorData);
      return new Response(JSON.stringify(errorData), {
        status: flaskResponse.status,
      });
    }

    const data = await flaskResponse.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while connecting to the Flask server.",
      }),
      { status: 500 }
    );
  }
}
