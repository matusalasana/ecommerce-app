import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import ProductItem from "../components/ProductItem"
import Title from "../components/Title"
import Footer from "../components/Footer"
import { CgClose } from "react-icons/cg"
import { BsFilter } from "react-icons/bs"


function Collection() {

  const items = useContext(ShopContext)
  const [visibility, setVisibility] = useState('hidden')

  return (
    <div>

      <div className="px-3 pt-30 flex flex-col items-center justify-center">

        <Title text1="ALL" text2="COLLECTIONS" />
        <div>
          <BsFilter onClick={()=> setVisibility('block')} fontSize={30} className="border-1 rounded border-gray-500 m-3 cursor-pointer"/>
        </div>

        <div className={`${visibility} border-2 border-gray-600 rounded-md mb-10 p-2 relative max-sm:w-[350px] w-[450px]`}>
          <p 
            className="
            font-semibold 
            text-center"
          >
            FILTERS
          </p>
          <CgClose color="red" fontSize={25} onClick={()=>setVisibility('hidden')} className="absolute top-1 right-1 cursor-pointer"/>
          
          <div 
            className="
            flex 
            flex-row
            w-full
            justify-evenly
            items-center">
            <div 
              className="
              flex 
              flex-col 
              gap-5 
              max-sm:text-xs 
              text-sm 
              max-sm:w-[110px] 
              w-[130px] 
              p-2"
            >
              <p className="font-semibold">CATEGORIES</p>
              <div className="flex flex-row gap-2">
                <input id="men" type="checkbox" className="cursor-pointer"/>
                <label htmlFor="men" className="hover:font-semibold hover:cursor-pointer" >Men</label>
              </div>
              <div className="flex flex-row gap-2">
                <input id="women" type="checkbox" className="cursor-pointer"/>
                <label htmlFor="women" className="hover:font-semibold hover:cursor-pointer" >Women</label>
              </div>
              <div className="flex flex-row gap-2">
                <input id="kids" type="checkbox" className="cursor-pointer"/>
                <label htmlFor="kids" className="hover:font-semibold hover:cursor-pointer" >Kids</label>
              </div>
            </div>

            <div className=" flex flex-col gap-5 max-sm:text-xs text-sm max-sm:w-[110px] w-[130px] p-2">
              <p className="font-semibold">TYPE</p>
              <div className="flex flex-row gap-2">
                <input id="topwear" type="checkbox" className="cursor-pointer"/>
                <label htmlFor="topwear" className="hover:font-semibold hover:cursor-pointer" >Topwear</label>
              </div>
              <div className="flex flex-row gap-2">
                <input id="bottomwear" type="checkbox" className="cursor-pointer"/>
                <label htmlFor="bottomwear" className="hover:font-semibold hover:cursor-pointer" >Bottomwear</label>
              </div>
              <div className="flex flex-row gap-2">
                <input id="winterwear" type="checkbox" className="cursor-pointer"/>
                <label htmlFor="winterwear" className="hover:font-semibold hover:cursor-pointer" >Winterwear</label>
              </div>
            </div>
          </div>

        </div>


        {/* For large screens */}

        <div 
          className="
          grid 
          base:grid-cols-2 
          max-sm:grid-cols-2 
          md:grid-cols-4 
          lg:grid-cols-5 
          xl:grid-cols-5 
          gap-5"
        >
          {items?.products.map((item) => (
            <div className="">
              <ProductItem name={item.name} price={item.price} productId={item._id} imgURL={item.image} />
            </div>
          ))}
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Collection