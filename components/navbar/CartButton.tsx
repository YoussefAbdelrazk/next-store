import { fetchCartItems } from "@/utils/actions";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "../ui/button";
export default async function CartButton() {
  const numItemsInCart = await fetchCartItems();
  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="relative flex items-center justify-center"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className=" absolute -top-3 -right-3 bg-primary h-6 w-6 flex items-center justify-center text-white rounded-full text-lg">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
