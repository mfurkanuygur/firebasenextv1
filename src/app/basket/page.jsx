import RenderBasketProduct from "@/components/renderProduct/RenderBasketProduct";
import { getUserBasketData } from "@/lib/request"
import { cookies } from 'next/headers';

const Basket = async () => {
  const cookieStore = cookies();
  const userToken = cookieStore.get('userToken')?.value;
  const basketData = await getUserBasketData(userToken)
  console.log(basketData)
  return (
    <div >
      {
        basketData && (
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 md:px-6 lg:grid-cols-5 p-3 lg:px-12">
            {basketData?.map(product => (
              <RenderBasketProduct key={product.id} product={product} productID={product.id} />
            ))}
          </div>
        )|| <p>görmek için giriş yap</p>
      }
      {/* {basketData?.map(product => (
        <RenderBasketProduct key={product.id} product={product} productID={product.id} />
      ))} */}
    </div>
  )
}

export default Basket