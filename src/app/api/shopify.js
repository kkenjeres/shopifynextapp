// pages/api/shopify.js
"use client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://9e6431-66.myshopify.com/api/2021-10/graphql.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token":
              "be3f0ea2d9d81ca732a3658ccba6729b",
          },
          body: JSON.stringify(req.body),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
