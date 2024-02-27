import { gql, useQuery } from "@apollo/client";
import client from "../lib/apollo-client";

const GET_PRODUCTS = gql`
  {
    products(first: 10) {
      edges {
        node {
          id
          title
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
`;

export default function Products() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div>
      {data.products.edges.map(({ node }) => (
        <div key={node.id}>
          <h2 className="text-[0px]">{node.title}</h2>
          <img src={node.images.edges[0]?.node.originalSrc} alt="" />
          <p>
            Price: {node.priceRange.minVariantPrice.amount}{" "}
            {node.priceRange.minVariantPrice.currencyCode}
          </p>
        </div>
      ))}
    </div>
  );
}
