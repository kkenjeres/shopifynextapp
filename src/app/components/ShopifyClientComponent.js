"use client";
fetch("https://newbalanceshoe.myshopify.com/api/2021-10/graphql.json", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // Include other necessary headers such as authentication tokens
  },
  body: JSON.stringify({
    query: `
      {
        products(first: 10) {
          edges {
            node {
              id
              title
              descriptionHtml
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
