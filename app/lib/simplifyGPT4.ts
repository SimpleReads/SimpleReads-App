export default async function simplifyPDF(
  sections: string[]
): Promise<string[]> {
  let simplified_sections: string[] = [];
  for (let i = 0; i < sections.length; i++) {
    let data = JSON.stringify({ text: sections[i] });
    let newtext = await simplifySegment(data);
    simplified_sections.push(newtext);
  }
  return simplified_sections;
}

const simplifySegment = async (data: string) => {
  try {
    const response = await fetch("/api/simplifyGPT4", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: data,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error from server:", errorData);
    } else {
      const result = await response.json();
      return result.message;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
