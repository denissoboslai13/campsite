import { writeFile } from "fs/promises";
import path from "path";

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

if (!PLACE_ID || !API_KEY) {
  console.error(
    "Missing GOOGLE_PLACE_ID or GOOGLE_PLACES_API_KEY env variables.",
  );
  process.exit(1);
}

async function fetchReviewData() {
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": "rating,userRatingCount",
    },
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Places API request failed: ${response.status} ${errText}`);
  }

  const data = await response.json();

  const result = {
    ratingValue: data.rating ?? null,
    reviewCount: data.userRatingCount ?? null,
    fetchedAt: new Date().toISOString(),
  };

  const outPath = path.resolve("src/data/reviews.json");
  await writeFile(outPath, JSON.stringify(result, null, 2));

  console.log("Fetched review data:", result);
}

fetchReviewData().catch((err) => {
  console.error("Failed to fetch review data:", err);
  process.exit(1);
});
