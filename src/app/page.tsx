import Basket from "./components/Basket";
import ProductList from "./components/ProductList";
import { BasketProvider } from "./context/BasketContext";

export default function Home() {
  return (
    <BasketProvider>
      <main>
        <ProductList />
        <Basket />
      </main>
    </BasketProvider>
  );
}
