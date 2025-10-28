import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import BestSellers from '../components/BestSellers'
import Policies from "../components/Policies"
import Subscription from "../components/Subscription"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSellers />
      <Policies />
      <Subscription />
      <Footer />
    </div>
  )
}

export default Home