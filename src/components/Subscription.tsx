

const Subscription = () => {
  return (
    <section
        id='contact-us'
        className='
        flex 
        flex-col 
        xl:flex-row 
        lg:flex-row 
        justify-between 
        gap-8 
        w-full 
        mt-40'
    >

        <h1 className='
        text-3xl 
        text-center
        sm:py-3 
        lg:text-5xl 
        leading-relaxed 
        font-semibold
        font-serif'
        >
        Subscribe now & <span className='text-orange-600'>get 20% off</span>
        </h1>

        <div 
            className='
            flex 
            flex-row 
            justify-between 
            xl:w-[50%] 
            p-2 
            border-2 
            border-slate-500 
            rounded-full 
            mx-5
            max-sm:h-15
            h-17'
        >
            <input 
                type='text' 
                placeholder='subscribe@sm-store.com' 
                className='
                p-1.5 
                input 
                w-full 
                rounded-full 
                xl:lg:p-4 
                outline-none 
                focus:outline-none' 
            />
                <button 
                    className="
                    w-40
                    bg-orange-600
                    text-white
                    font-semibold
                    rounded-full"
                >
                Subscribe
                </button>

        </div>

    </section>
  );
};

export default Subscription;