import { BiCopyright } from "react-icons/bi"
import footerLogo from "../assets/logo.svg"

function Footer() {
  return (
    <div id="contact" className="flex flex-col mt-30 text-gray-400 text-md max-sm:text-sm bg-black py-10 px-5">
      <div className="flex max-sm:flex-col flex-row justify-between">
        <div>
          <img src={footerLogo} alt="footer logo" className="mb-5 w-[100px]" />
          <p className="sm:text-sm text-xs w-90 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className="flex flex-col">
          <p className="text-sl font-semibold mb-3">COMPANY</p>
          <p>Home</p>
          <p>About Us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-semibold mb-3">GET IN TOUCH</p>
          <p>+251-945807386</p>
          <p>matusalasana@gmail.com</p>
          <p>@sana1514</p>
        </div>
    </div>

      <div className="flex justify-between pb-2 mt-20">
        <div className="flex gap-1 items-center">
          <BiCopyright />
          <p>Copyright. All rights reserved.</p>
        </div>
        <div>
          <p>Terms & Conditions</p>
        </div>
      </div>

    </div>
  )
}

export default Footer