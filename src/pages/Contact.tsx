import Footer from "../components/Footer"
import Subscription from "../components/Subscription"
import Title from "../components/Title"
import contactImg from '../assets/contact_img.png'


function Contact() {
  return (
    <div className="pt-30">
      <Title text1="CONTACT" text2="US" />
      <div className="flex justify-evenly items-center max-sm:flex-col">
        <img src={contactImg} alt="contact us" className="px-10 mb-15 max-sm:w-full w-[600px] mt-10" />
        <div 
          className="">
          <div className="mb-10">
            <p className="text-xl font-semibold mb-2">Our Store</p>
            <p>King George VI St, Addis Ababa, Ethiopia</p>
            <p>Tel: +251-945807386</p>
            <p>Email: matusalasana@gmail.com</p>
          </div>
          <div>
            <p className="text-xl font-semibold mb-2">Careers of <span className="text-orange-600">SMstore</span></p>
            <p>Learn more about our teams and job openings.</p>
            <button className="border-2 mt-5 hover:text-white border-orange-600 rounded-md px-3 py-2 hover:bg-orange-600">Explore Jobs</button>
          </div>
        </div>
      </div>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default Contact