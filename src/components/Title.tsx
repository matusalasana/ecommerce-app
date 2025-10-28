
interface Props{
    text1:string;
    text2:string;
}

function Title({text1,text2}:Props) {
  return (
    <div className="flex gap-2 justify-center items-center mb-3 text-3xl sm:py-3 lg:text-5xl leading-relaxed font-semibold">
        {text1} <span className="text-orange-600">{text2}</span>
        <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
    </div>
  )
}

export default Title