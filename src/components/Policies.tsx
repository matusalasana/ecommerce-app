
import exchangeIcon from '../assets/exchange_icon.png'
import returnIcon from '../assets/quality_icon.png'
import customerSupportIcon from '../assets/support_img.png'

function Policies() {
  return (
    <div className='flex flex-row max-sm:flex-col justify-evenly items-center gap-10 mt-30 max-sm:px-10 md:px-15 lg:px-20 xl:px-30'>
        <div className='flex flex-col justify-center items-center'>
            <img src={exchangeIcon} alt="policy" className='w-12' />
            <p className="text-xl font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400 text-center">We offer hassle free exchane policy</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={returnIcon} alt="policy" className='w-12' />
            <p className="text-xl font-semibold">7 Days Return Policy</p>
            <p className="text-gray-400 text-center">We provide 7 days free return policy</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={customerSupportIcon} alt="policy" className='w-12' />
            <p className="text-xl font-semibold">Best Customer Support</p>
            <p className="text-gray-400 text-center">We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default Policies