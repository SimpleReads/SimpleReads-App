import { NextRequest } from "next/server";

async function streamToBlob(stream: ReadableStream<Uint8Array>): Promise<Blob> {
  const data = await new Response(stream).arrayBuffer();
  return new Blob([data], { type: "application/pdf" });
}

export async function POST(request: NextRequest) {
  try {
    console.log("route.ts");
    // Create a FormData object and append the stream as a file
    const formData = new FormData();
    const blob = await streamToBlob(request.body);
    formData.append("File", blob, "uploaded.pdf");

    // Fetch with the FormData object as body
    const flaskResponse = await fetch(`http://54.212.16.183:5000/parsePDF`, {
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
