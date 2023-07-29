import LayOutPage from "@/components/Layout/LayOut"
import Banner from "@/components/ui/Banner"



export default function HomePage() {
  return (
    <>
   <div>
    <Banner></Banner>
   </div>
    </>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <LayOutPage>
     {page}
    </LayOutPage>
  )
}