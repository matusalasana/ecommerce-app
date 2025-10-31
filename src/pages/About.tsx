import Footer from "../components/Footer"
import Subscription from "../components/Subscription"
import Title from "../components/Title"
import aboutImg from '../assets/about_img.png'

function About() {
  return (
    <div className="pt-30">

      <div className="px-15">

        <Title text1="ABOUT" text2="US" />

        <div className="flex flex-row max-sm:flex-col gap-15 mb-30 mt-10">
          <img src={aboutImg} alt="about image" className="overflow-hidden" />
          <div>
            <p className="text-xs sm:text-sm mb-10 leading-relaxed">SMstore was born out of a passion for innovation and a desire to revolutionize the way people shop online. 
              Our journey began with a simple idea: 
              to provide a platform where customers can easily discover, 
              explore, and purchase a wide range of products from the comfort of their homes.
            </p>
            <p className="text-xs sm:text-sm mb-10 leading-relaxed">
              Since our inception, we've worked tirelessly to curate 
              a diverse selection of high-quality products that cater to every taste and preference. 
              From fashion and beauty to electronics and home essentials, 
              we offer an extensive collection sourced from trusted brands and suppliers.
            </p>
            <p className="font-semibold">Our Mission</p>
            <p className="text-xs sm:text-sm mb-10 leading-relaxed">
              Our mission at SMstore is to empower customers with choice, 
              convenience, and confidence. We're dedicated to providing 
              a seamless shopping experience that exceeds expectations, 
              from browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>

        <Title text1="WHY" text2="CHOOSE US" />
        <div className="flex max-sm:flex-col flex-row justify-center gap-15 items-center mt-10">
          <div>
            <p className="font-semibold">Quality Assurance:</p>
            <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div>
            <p className="font-semibold">Convenience:</p>
            <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div>
            <p className="font-semibold">Exceptional Customer Service:</p>
            <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>

      </div>

      <Subscription/>
      <Footer/>

    </div>
  )
}

export default About