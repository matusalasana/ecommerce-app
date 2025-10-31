import { useContext, useRef, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import ProductItem from "../components/ProductItem"
import Title from "../components/Title"
import Footer from "../components/Footer"
import { CgClose } from "react-icons/cg"
import { BsFilter } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"

interface Props{
    status:string;
    onClickClose: ()=>void;
}

function Collection({status, onClickClose}:Props) {

  const items = useContext(ShopContext)
  const [visibility, setVisibility] = useState('hidden')
  const SearchText = useRef<HTMLInputElement>(null)
  const [text,setText] = useState('')

  return (
    <div>

      

      <div className="px-3 pt-30 flex flex-col items-center justify-center">


      <div className={`${status} relative bg-gray-200 w-[80vw] h-[150px] flex flex-col justify-center items-center`}>
              <CgClose 
                onClick={()=>{
                  onClickClose();
                  if (SearchText.current) SearchText.current.value = '';
                  setText('')
                }} 
                fontSize={25} 
                color="red" 
                className = "hover:border-2 cursor-pointer rounded-md absolute top-0 right-0"/>
              <div 
                  className="
                  flex
                  justify-between
                  items-center
                  px-2
                  py-1
                  rounded-full 
                  border-2
                  border-gray-600
                  w-[300px]"
              >
                  <input onChange={(e)=>setText(e.currentTarget.value)} ref={SearchText} type="text" id="search" placeholder="search here" className="outline-none focus:outline-none w-full" />
                  <BiSearch fontSize={25} />
              </div>
          </div>

        <Title text1="ALL" text2="COLLECTIONS" />
        <div>
          <BsFilter onClick={()=> setVisibility('block')} fontSize={30} className="border rounded border-gray-500 m-3 cursor-pointer"/>
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
          {items?.products.filter(p=>p.name.toLowerCase().includes(text.toLowerCase())).map((item) => (
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