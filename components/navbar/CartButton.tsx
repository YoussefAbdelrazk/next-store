import Link from "next/link"
import { Button } from "../ui/button"
import { LuShoppingCart  } from 'react-icons/lu'
export default async function CartButton() {

  const numItemsInCart = 9
  return (
    <Button variant='outline' size='icon' asChild className="relative flex items-center justify-center">
        <Link href='/cart'>
          <LuShoppingCart /> 
          <span className=" absolute -top-3 -right-3 bg-primary h-6 w-6 flex items-center justify-center text-white rounded-full text-lg">{numItemsInCart}</span>
        </Link>
    </Button>
  )
}