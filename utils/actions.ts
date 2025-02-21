import  db  from '@/utils/db'


 export const FetchFeaturedProducts = async () => {
    const products = await db.product.findMany({
      where:{
        featured:true
      },
    
    })
    return products
    
}

export const FetchAllProducts = async() => {

  return db.product.findMany({
    orderBy:{
      createdAt:'desc'
    }
  })
}

