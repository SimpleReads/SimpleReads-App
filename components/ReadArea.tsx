import ScrollBox from "./ScrollBox"

export default function ReadArea({headings, text, scroll, timer, searchWord, lastHeader}) {
    return (
        <div className = "row-auto col-span-4">
          <div className="pt-8 pb-0 md:pt-6 md:pb-0">
            <div className="max-w-full mx-auto text-center pb-0 md:pb-0">
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Box */}
                    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                    <h4 className="h4 mb-2" id='Heading'>{lastHeader}</h4>
                    <ScrollBox headings={headings} text={text} scroll={scroll} timer={timer} searchWord={searchWord}/>
                    <div className = "w-full pt-4 px-3 mb-7  flex justify-center items-center space-x-4">
                        <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-1/4 sm:mb-0 tracking-wider py-2" 
                        onClick={() => scroll(true)}>Scroll Up</button>
                        <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-1/4 sm:mb-0 tracking-wider py-2" 
                        onClick={() => scroll(false)}>Scroll Down</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
          </div>
        </div>    
    )
}