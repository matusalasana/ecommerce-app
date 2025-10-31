import Footer from "../components/Footer"
import Title from "../components/Title"


function LogIn() {
  return (
    <div className="pt-30">
      <Title text1="Log In" text2="" />
      <div className="flex flex-col gap-5 justify-center items-center">
        <input type="email" placeholder="Email" className="border px-3 py-2 w-xs rounded-md"/>
        <input type="password" placeholder="Password" className="border px-3 py-2 w-xs rounded-md"/>
        <div className="flex flex-row justify-between text-xs w-xs">
          <a href="/">Forgot your password?</a>
          <a href="/">Create account</a>
        </div>
        <button className="bg-orange-600 cursor-pointer text-white w-30 rounded-md py-2 hover:bg-orange-700">Sign In</button>
      </div>
      <Footer />
    </div>
  )
}

export default LogIn