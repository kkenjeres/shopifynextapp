// pages/api/products.js

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        "https://{newBalance}.myshopify.com/admin/api/2021-07/products.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const { products } = await response.json();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    // Обработка других методов, если необходимо
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
