export async function getMostLoanedItems() {
  const url = "http://localhost:5273/api/reports/most-loaned-items?limit=10";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP-fel: ${response.status}`);
  }

  return await response.json();
}