import ScrollBox from "./ScrollBox"

/**
 * Read Area Component
 * @param {array} headings - Array of section headings.
 * @param {string} text - Text content to display.
 * @param {function} scroll - Function to handle scrolling.
 * @param {number} timer - Timer for scrolling.
 * @param {function} searchWord - Function to search for a word.
 * @param {string} lastHeader - Last section header.
 */
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
                                    <h4 className="h4 mb-2" id='Heading' style={{fontSize:'60'}}>{lastHeader}</h4> {/* Shows the latest header that the read area is up too */}
                                    <ScrollBox headings={headings} text={text} scroll={scroll} timer={timer} searchWord={searchWord}/> {/* The component that stores the tet that the pdf contained */}
                                    <div className = "w-full pt-4 px-3 mb-7  flex justify-center items-center space-x-4"> {/* Button to scroll up in the read area */}
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