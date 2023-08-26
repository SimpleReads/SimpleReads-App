import { NextApiRequest, NextApiResponse } from "next";
import Client from "@/lib/client"; // Make sure MongoDB options inside this function are correctly set
import { ApiRes } from "@/types/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiRes<string>>
) {
  const client = await Client();

  const id = (req.query.id as string)?.trim();

  if (!id) {
    await client.close();
    res.status(400).json({
      error: "ID_NOT_PROVIDED",
      status: 400,
      ok: false,
    });
    return;
  }

  function isValidObjectId(id: string) {
    return /^[a-f\d]{24}$/i.test(id);
  }

  if (!isValidObjectId(id)) {
    await client.close();
    res.status(400).json({
      error: "INVALID_ID",
      status: 400,
      ok: false,
    });
    return;
  }

  let propertyData;

  try {
    // Fetch the property information using the id.
    const orgId = "64e691f37967666faa2d4b83";
    // Assuming that you will write your logic to get property data here
    propertyData = await getPropertyData(id, orgId); // Replace this with your actual function to get property data
  } catch (error) {
    console.error("Could not fetch property", error);
    await client.close();
    res.status(500).json({
      error: "RETRIEVE_PROPERTY_ERROR",
      status: 500,
      ok: false,
    });
    return;
  }

  await client.close();

  if (!propertyData) {
    res.status(404).json({
      error: "PROPERTY_NOT_FOUND",
      status: 404,
      ok: false,
    });
    return;
  }

  return res.status(200).json({
    data: JSON.stringify(propertyData),
    status: 200,
    ok: true,
  });
}
