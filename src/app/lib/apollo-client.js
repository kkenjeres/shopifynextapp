import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://newbalanceshoe.myshopify.com/api/2021-10/graphql.json", // Замените на ваш Shopify GraphQL URI
  headers: {
    "X-Shopify-Storefront-Access-Token": "cc3563d3080755b8d4329544413e80e8", // Замените на ваш токен доступа
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
