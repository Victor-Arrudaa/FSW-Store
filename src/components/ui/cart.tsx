import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      <Badge
        className="txt-base w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} /> Catálogo
      </Badge>

      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
