import { headingStyle, divstyle, textstyle } from "./style";

export default function ScrollBox({ headings, text, scroll, timer, searchWord }) {
  // Generate the individual elements for all the spans and paragraphs/headers of the text
  const renderText = (sections, text) => {
    return (
      <>
        {sections.map((section, index) => (
          <div key={index}>
            <h1 style={headingStyle} className="scrollboxtext" id={`${section}${index}Header`}>
              <span onClick={() => { searchWord(section) }}>{`${section}`}</span>
            </h1>
            <p style={textstyle} className="scrollboxtext" id={`${section}${index}`}>
              {text[index].split(/(\n-)/).map((chunk, i) => {
                if (chunk.startsWith('\n-')) {
                  return (
                    <>
                      <br />
                      <span key={i} onClick={() => { searchWord(chunk) }}>{chunk.replace('\n', '')}</span>
                    </>
                  );
                } else {
                  return (
                    <span key={i} onClick={() => { searchWord(chunk) }}>{chunk}</span>
                  );
                }
              })}
            </p>
            <br></br>
          </div>
        ))}
      </>
    );
  }

  // Return Generated Elements
  return (
    <div style={divstyle} id="scrollbox" onScroll={() => scroll(timer)}>
      {renderText(headings, text)}
    </div>
  );
}
