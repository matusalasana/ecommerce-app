
import newArrivals from '../assets/New-Arrival-High-Quality-Male-Jacket.jpeg';

function Hero() {
  return (
    <div>
        <div 
            className="
                flex 
                flex-col 
                sm:flex-row 
                items-center 
                justify-evenly 
                border 
                m-10
                border-gray-400"
        >

            {/* Hero left side */}

            <div 
                className="
                    flex 
                    items-center 
                    justify-center 
                    py-10 
                    sm:py-0 
                    w-full 
                    sm:w-1/2"
            >
                <div className="text-[#414141]">
                    <div className="flex flex-row items-center gap-2">
                        <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
                        <p className="font-medium text-gray-500 text-sm md:txt-base">OUR BESTSELLERS</p>
                    </div>
                    <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-semibold">
                        Latest <span className="text-orange-600">Arrivals</span>
                    </h1>
                    <div className="flex flex-row items-center gap-2">
                        <p className="font-medium text-gray-500 text-sm md:txt-base">SHOP NOW</p>
                        <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
                    </div>
                </div>
            </div>

            {/* Hero right side */}
            <img 
                src={newArrivals}
                alt="latest arrivals" 
                className="w-[500px] max-sm:w-[90%]" />
        </div>
    </div>
  )
}

export default Hero