import { FetchFeaturedProducts } from "@/utils/actions"
import EmptyList from "../global/EmptyList"
import SectionTitle from "../global/SectionTitle"
import ProductsGrid from "../products/ProductsGrid"



export default async function FeaturedProducts() {
  const products = await FetchFeaturedProducts()

  if(products.length === 0 ) return <EmptyList/>
  return (
    <section className="mt-24">
      <SectionTitle text='featured products'/>
      <ProductsGrid products={products}/>

    </section>
  )
}