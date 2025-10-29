import { BiCopyright } from "react-icons/bi"
import smLogo from "../assets/sm logo.svg"
import storeLogo from '../assets/store logo white.svg'

function Footer() {
  return (
    <div id="contact" className="flex flex-col mt-30 text-gray-400 text-md max-sm:text-sm bg-black py-10 px-5">
      <div className="flex max-sm:flex-col flex-row justify-between">
        <div>
          <div>
            <img src={smLogo} alt="footer logo" className="w-[90px] mb-px" />
            <img src={storeLogo} alt="footer logo" className="mb-3 w-[85px]" />
          </div>
          <p className="sm:text-sm text-xs w-90 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className="flex flex-col">
          <p className="text-sl font-semibold mb-1 mt-5">COMPANY</p>
          <p className="cursor-pointer hover:text-white">Home</p>
          <p className="cursor-pointer hover:text-white">About Us</p>
          <p className="cursor-pointer hover:text-white">Delivery</p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-semibold mb-1 mt-5">GET IN TOUCH</p>
          <p>+251-945807386</p>
          <p className="cursor-pointer hover:text-white">matusalasana@gmail.com</p>
          <p className="cursor-pointer hover:text-white">@sana1514</p>
        </div>
    </div>

      <div className="flex justify-between pb-2 mt-20">
        <div className="flex gap-1 items-center">
          <BiCopyright />
          <p>Copyright. All rights reserved.</p>
        </div>
        <div>
          <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
        </div>
      </div>

    </div>
  )
}

export default Footer