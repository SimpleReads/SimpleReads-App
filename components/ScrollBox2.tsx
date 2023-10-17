'use client'
import * as React from 'react'
import getDefs from '@/app/lib/getDefs'
import simplifyPDF from '@/app/lib/simplifyPdf'

export default function ScrollBox({parentToChild, childToParent, uploadFile}) {

    // HARD CODED GARBAGE FOR TUESDAY TESTING -------------------------------------------------------------------------------------------------------------
    let cheatHeaders = ["Abstract", "1 Introduction", "2 Background", "3 Related Work", 
                        "4 Deep Reinforcement Learning", "4.1 Preprocessing and Model Architecture", 
                        "5 Experiments", "5.1 Training and Stability", "5.2 Visualizing the Value Function", 
                        "5.3 Main Evaluation", "6 Conclusion"]
    let cheatText = ["We made the first deep learning model that learns how to make decisions just by looking at raw images. We trained it using a special kind of learning called Q-learning. We tested it on seven classic video games and it did better than any previous methods on six of them. It even did better than a human expert on three games.",
                     "Learning to make decisions based on things like sight and sound is a big challenge in the field of reinforcement learning. Usually, successful systems in this field use specially designed features. The quality of these features is very important for the system's performance.\n\nDeep learning has recently helped improve tasks like image and speech recognition by automatically learning useful features from raw data. So, we wondered if deep learning could also help reinforcement learning tasks.\n\nHowever, reinforcement learning has its own set of challenges for deep learning. For example, it often has to learn from limited and noisy feedback that comes much later after an action is taken. This is different from other deep learning tasks where there is immediate and clear feedback. Another challenge is that the data in reinforcement learning is often correlated and changes over time, which is tough for typical deep learning methods.\n\nIn our study, we show that a specific type of neural network can learn to make good decisions based on raw video data in complex environments. We used a method called Q-learning to train the network and included a special technique to handle the correlated data.\n\nWe tested our approach on various classic video games. The network learned just from the video on the screen and the game's rewards, without any extra information. We kept the network design the same for all games. Our network did better than previous methods on most of the games and even beat a human expert on some.",
                     "In our study, we focus on tasks where an agent interacts with a video game environment. The agent performs actions and receives feedback in the form of images and game scores. However, the agent can't see the game's internal workings; it only sees the current screen image.\n\nSince one image isn't enough to fully understand the situation, we consider sequences of actions and images. We then apply traditional reinforcement learning methods to these sequences, treating each one as a unique situation.\n\nThe goal is to maximize future rewards. We use the concept of discounted future rewards, where future rewards are worth less the further they are in the future.\n\nWe use a neural network to estimate the best possible future rewards for each action based on these sequences. This is known as a Q-network. The network is trained to minimize the difference between its predictions and actual future rewards.\n\nThe training process uses a variant of Q-learning, a well-known reinforcement learning method. It's an \"off-policy\" method, meaning it learns the best strategy while also exploring new actions. This is usually done by sometimes taking random actions to explore the environment.\n\nIn summary, we use sequences of actions and screen images to train a neural network to play the game, aiming to get the highest score possible. The network learns directly from the game play, without needing a model of the game's inner workings.",
                     "The success of TD-gammon, a program that became superhuman at backgammon through reinforcement learning, was a milestone. However, early efforts to apply similar techniques to other games like chess and Go didn't fare as well. This led to the belief that this approach mainly worked for backgammon, possibly because the randomness in dice rolls helped the system explore and learn better.\n\nFor a while, the focus in reinforcement learning shifted to simpler, more stable methods. The use of deep learning methods has recently reignited interest in the field. These new methods have started to tackle some of the issues seen in older approaches, like the stability of the learning process.\n\nOur work is somewhat similar to Neural Fitted Q-Learning (NFQ), a method that also uses a Q-network. But we differ in key areas. For example, NFQ uses batch updates that depend on the data size, while we use a more scalable method suitable for large datasets. We also apply our method directly to raw visual inputs, potentially capturing more useful information for decision-making.\n\nOthers have also explored using the Atari 2600 emulator as a platform for reinforcement learning. Various methods have been used, from simple learning algorithms to evolving a game strategy through neural networks. Our approach aims to improve upon these by directly learning from the visual inputs, making it more versatile and potentially more powerful.",
                     "Deep Reinforcement Learning: Recent advances in fields like computer vision and speech recognition have used deep neural networks trained on large datasets. These networks often perform better when trained directly on raw inputs. This success inspired us to apply a similar approach to reinforcement learning, connecting a deep neural network to work directly on raw RGB images.\n\nWe're building on the TD-Gammon model, which used a simpler neural network to become a champion backgammon player. Given that TD-Gammon was successful two decades ago, we're curious if today's advanced hardware and techniques could push the envelope further.\n\nOur approach is different in some ways. We use \"experience replay,\" where the agent's experiences are stored and later randomly sampled for training. This method offers several benefits:\n\n1. It's data-efficient, as each experience can be reused multiple times.\n2. It reduces training variance by randomizing the samples.\n3. It avoids harmful feedback loops and parameter divergence, making learning smoother.\n\nHowever, our current approach has limitations too. For example, all experiences are considered equally important, and newer experiences overwrite older ones due to memory limits. Future improvements could involve better sampling strategies to focus on more crucial learning experiences.",
                     "Preprocessing and Model Architecture: We're working with Atari games, which originally have frames that are 210 x 160 pixels in size with 128 colors. Processing these directly is resource-heavy. So, we simplify these frames by converting them to grayscale, resizing them to 110 x 84, and then cropping them to 84 x 84 to focus on the game area. This cropped image is our final input.\n\nWe use these pre-processed images as inputs to our neural network, designed to estimate the Q-value for each possible action the agent can take in a given state. The advantage of our network setup is that it can calculate the Q-values for all actions in one go, making it efficient.\n\nThe architecture of our neural network, called Deep Q-Networks (DQN), is as follows:\n\n1. The input layer takes an 84 x 84 x 4 image.\n2. The first hidden layer applies 16 filters of size 8 x 8 with a stride of 4, followed by a rectifier function for nonlinearity.\n3. The second hidden layer applies 32 filters of size 4 x 4 with a stride of 2, also followed by a rectifier function.\n4. The third hidden layer is fully connected with 256 rectifier units.\n5. The output layer is also fully connected but has one output unit for each possible action the agent can take.\n\nThis setup allows us to estimate the best action for the agent to take efficiently, in terms of computational resources.",
                     "We tested our approach on seven different Atari games: Beam Rider, Breakout, Enduro, Pong, Q*bert, Seaquest, and Space Invaders. We used the same neural network design and learning settings for all games, showing that our method is versatile.\n\nWe did make one adjustment during training: we simplified the rewards. If the game score went up, the reward was set to +1. If it went down, the reward was set to -1. We kept zero rewards the same. This made it easier to apply the same learning rate across all games, although it might affect how well the agent learns to prioritize different actions.\n\nFor training, we used the RMSProp algorithm, taking small batches of 32 examples at a time. The agent started off exploring a lot but gradually focused more on exploiting known strategies. We trained the agent like this for 10 million frames, storing the last million frames for reference.\n\nWe also used a trick to speed up training. The agent didn't consider every single frame of the game to make a decision. Instead, it looked at every 4th frame and repeated its last action in the skipped frames. This allowed the agent to play more games in less time. The one exception was Space Invaders, where we had to look at every 3rd frame to ensure lasers were visible. This was the only setting we changed between games.",
                     "In supervised learning, it's easy to see how well a model is doing by checking its performance on training and validation sets. In reinforcement learning, it's harder to gauge an agent's progress during training.\n\nWe measure success by the average total rewards an agent earns over multiple games. But this method can be very inconsistent because small changes to the model can lead to big swings in performance. For example, the rewards we observed while training on Seaquest and Breakout games fluctuated a lot, making it seem like the agent wasn't steadily improving.\n\nInstead of just looking at rewards, we also tracked a more stable measure called the 'Q-value.' This estimates how much reward an agent could get from a specific situation and tends to be more consistent. In our tests, this Q-value increased smoothly, suggesting that our model was in fact learning effectively.\n\nWe also didn't encounter any problems of the learning going off track, which indicates our method is pretty stable, even though we can't mathematically prove it will always be.\n\nTo summarize, we used two ways to check our agent's learning: 1) average total rewards, which was a bit unreliable, and 2) Q-values, which gave us a more consistent picture of progress. Both methods confirmed that our approach is effective and stable for training agents on these games.",
                     "Visualizing the Value Function: Figure 3 provides a visual guide on how the agent's learned 'value function' changes during gameplay in Seaquest. The value function predicts how good a situation is for the agent.\n\nAt point A, when an enemy appears on the left, the predicted value jumps. This suggests the agent recognizes an opportunity.\n\nAt point B, the agent shoots a torpedo, and the value peaks, indicating that the agent expects a positive outcome—like hitting the enemy.\n\nAt point C, after the enemy is gone, the value drops back to its initial level.\n\nThis shows that our method can understand and adapt to complex sequences of events in the game. It's aware of opportunities (like an enemy appearing), actions to capitalize on them (shooting a torpedo), and knows when the situation is back to normal (enemy disappearing).",
                     "We compared our method, labeled as DQN, with other techniques and also with a human expert. Here's what we found:\n\n1. **Other Methods**: One method used a Sarsa algorithm with custom features for Atari games. Another, called Contingency, was similar but added extra features. Both methods already had some game knowledge built-in.\n\n2. **Human Expert**: The human scores are based on about two hours of gameplay and are higher than previously reported scores.\n\n3. **Our Method**: DQN uses only the raw game visuals and doesn't have built-in game knowledge. Still, it performed significantly better than other learning methods on all seven games tested.\n\n4. **Comparison with Evolutionary Approach**: We also compared DQN with an 'evolutionary' method. That method uses hand-engineered algorithms and doesn't adapt well to unexpected situations. DQN outperformed it in almost all games.\n\n5. **Human vs DQN**: Our method did better than an expert human player on some games and came close on others. However, it struggled on games like Q*bert, Seaquest, and Space Invaders, which require long-term strategies.\n\nIn summary, DQN performs very well, beating other methods and even human experts in some cases, despite having no pre-existing game knowledge.",
                     "This paper introduces a new deep learning model for reinforcement learning. We showed that it can learn complex game strategies for Atari 2600 games using just the raw visuals from the game. We also presented a modified version of Q-learning that makes it easier to train deep networks. Our method performed better than other methods on six out of the seven games we tested, without needing any special adjustments. Overall, our approach sets a new standard in this area."
                    ]
    // --------------------------------------------------------------------------------------------------------------------------------------------------

    const [defining, setDefining] = React.useState<number>(0)

    let rawText = parentToChild
    let i = formatText(rawText)
    let sections = i[0]
    let text = i[1]

    childToParent(sections)

    const divstyle = {
        overflow: 'auto',
        height: 'min(90vh - 200px, 1000px)',
    };

    const divstyle2 = {
        overflow: 'auto',
        position: 'relative' as 'relative',
        height: 'min(60vh - 200px, 300px)',
        width: "100%"
    };

    const btnstyle = {
        margin: '10px 5px 10px 5px',
        fontSize: '20px',
        fontWeight: '900',
        letterSpacing: 2
    };
    const textstyle = {
        fontSize: '28px',
        scrollBehavior: 'smooth' as 'smooth',
        textAlign: 'left' as 'left',
        lineHeight: 2,
        letterSpacing: 1
    };

    const headingStyle = {
        fontSize: '50px',
        scrollBehavior: 'smooth' as 'smooth',
        textAlign: 'left' as 'left',
    };
    const btncontainer = {
        marginLeft: 'auto',
        marginRight: '0'
    };
    

    
  
  // Set a variable to track the position of the pop-out text box
  const [textBoxLayout, setTextBoxLayout] = React.useState({ x: 0, y: 0 });
  const [dragging, setDragging] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [def, setDef] = React.useState<string>();
  const [lastHeader, setLastHeader] = React.useState<string>();

  let timer = -1

  // DEFINE FUNCTIONS  
  const searchWord = async (word) => {
    if (defining > 0) {
        setDef(await getDefs(2, 2, word))
        setDefining(2)
    }
  }

  // Create a function to close the text box when an x button is clicked.
  const closeTextBox = () => {
      setDefining(0);
  }; 

  // Event handler for when the mouse button is pressed on the pop-out text box
  const handleMouseDown = (e) => {
      if (defining == 2) {
          return;
      }
      setDragging(true);
      setOffset({ x: e.clientX - textBoxLayout.x, y: e.clientY - textBoxLayout.y });
  };

  // Event handler for when the mouse button is released
  const handleMouseUp = () => {
      setDragging(false);
  };

  // Event handler for when the mouse is moved
  const handleMouseMove = (e) => {
      if (!dragging) {
          return;
      }
      setTextBoxLayout({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };


  const toggleDefine = () => {
    if (defining > 0) {
        setDefining(0)
    } else {
        setDefining(1)
    }
  }

  // SCROLL BOX FUNCTIONS
  const renderText = () => {
    return(
      <>
        {sections.map((section, index) => (
          <div>
            <h1 style={headingStyle} className="scrollboxtext" id={`${section}${index}Header`}>
              <span onClick={() => {searchWord(section)}}>{`${section}`}</span>
            </h1>
            <p style={textstyle} className="scrollboxtext" id={`${section}${index}`}>
              {text[index].split(/( )/).map(word => <span onClick={() => {searchWord(word)}}>{word}</span>)}
            </p>
            <br></br>
          </div>
        ))}
      </>
    )
  }

  const renderSectionButtons = () => {
    return(
        <>
        {sections.map((label, index) => (
        <div className="w-full px-3 mb-3">
            <button id = {`${label}${index}button`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2" onClick = {() => scrollTo(`${label}${index}Header`)}>{label}</button>
        </div>
        ))}
        </>
    )
  }

  const [textItems, setTextItems] = React.useState<React.JSX.Element>(renderText())
  const [sectionButtons, setSectionButtons] = React.useState<React.JSX.Element>(renderSectionButtons())

  const increaseFontSize = () => {
    // var box = Array.from(document.getElementsByClassName('scrollboxtext'))
    // for (const b of box) {
	//     var fontsize = parseFloat(window.getComputedStyle(b, null).getPropertyValue('font-size'))
    var box = Array.from(document.getElementsByClassName('scrollboxtext') as HTMLCollectionOf<HTMLElement>);
    for (const b of box) {
        var fontsize = parseFloat(window.getComputedStyle(b, null).getPropertyValue('font-size'));
	    if (fontsize < 79) {
	      b.style.fontSize = (fontsize + 2) + 'px'
	    }
    }
  }

    const decreaseFontSize = () => {
        Array.from(document.getElementsByClassName("scrollboxtext")).forEach(function(item) {
            const htmlElement = item as HTMLElement;
            var fontsize = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue('font-size'));
            if (fontsize > 17) {
                htmlElement.style.fontSize = (fontsize - 2) + 'px';
            }
        });
    }


  const scrollUp = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementsByClassName('scrollboxtext')[0]
    var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
    var addheight = Math.floor(lineheight/10)
    var excess = lineheight % 10
    for (var i=0; i<10; i++) {
      setTimeout(() => {box.scrollTop -= addheight}, 100);
    }
    box.scrollTop -= excess
  }

  const scrollDown = () => {
    var box = document.getElementById('scrollbox')
    var textelement = document.getElementsByClassName('scrollboxtext')[0]
    var lineheight = parseFloat(window.getComputedStyle(textelement, null).lineHeight)
    var addheight = Math.floor(lineheight/10)
    var excess = lineheight % 10
    for (var i=0; i<10; i++) {
      setTimeout(() => {box.scrollTop += addheight}, 100);
    }
    box.scrollTop += excess
  }

  const scrollTo = (id) => {
    document.getElementById("scrollbox").scrollTo(0, 0)
    let y = document.getElementById(id).getBoundingClientRect().y
    let x = document.getElementById(id).getBoundingClientRect().x
    let y1 = document.getElementById("scrollbox").getBoundingClientRect().y
    let x1 = document.getElementById("scrollbox").getBoundingClientRect().x
    document.getElementById("scrollbox").scrollTo({top: y - y1, behavior: 'smooth'})
  }

  const simplify = async(oldtext) => {
    text = await simplifyPDF(oldtext)
    setTextItems(renderText())
  }

  const dummyStupidText = () => {
    text = cheatText
    sections = cheatHeaders
    setTextItems(renderText())
    setSectionButtons(renderSectionButtons())
  }

  const checkScroll = (timer) => {
    if (timer != -1){
        clearTimeout(timer)
    }
    return window.setTimeout(getLastHeader, 100)
  }

  const getLastHeader = () => {
        let y1 = document.getElementById("scrollbox").getBoundingClientRect().y
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i]
            console.log(section)
            let pos = document.getElementById(`${section}${i}Header`).getBoundingClientRect().top
            if (pos - y1 > 0) {
                setLastHeader(sections[i-1])
                return false
            }
        }
        setLastHeader(sections[sections.length - 1])
  }


    //COMPONENT
    return (


        <>
        <div className="row-auto">
          <div className='pt-24 pb-0 md:pt-24 md:pb-0'>
            {/* Side Buttons */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="h4 mb-4" data-aos="fade-up">Sections</h3>
                </div>
                <div className="flex flex-wrap -mx-2 mt-6 ml-2 mb-8">                    
                    <div style={divstyle2} id="section-scrollbox">
                        {sectionButtons}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-0 ml-2">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="h4 mb-4" data-aos="fade-up">Tools</h3>
                    </div>
                    <div className="w-full px-3 mb-3">
                        <button onClick={() => dummyStupidText()} id = {`Simplify`} type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2">Simplify</button>
                    </div>
                    <div className="w-full px-3 mb-3">
                        <button id = {`Define`}type = "button" className={defining > 0 ? ("btn text-gray-900 bg-purple-700 hover:bg-purple-800 w-full tracking-wider py-2") : ("btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2")}
                            onClick = {toggleDefine}>{defining > 0 ? ("Click a Word to Define") : ("Define")}</button>
                    </div>
                    {/*Display the text box based on state. */}
                    {defining == 2 && (
                    <div className="popout-text-box" style={{
                        backgroundColor: 'lightblue', // Set the background color
                        padding: '10px', // Set padding
                        borderRadius: '5px', // Set border radius
                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', // Set box shadow
                        marginTop: '10px', // Set margin top
                        position: 'absolute', // Potisition is absolute
                        zIndex: 9999, // Ensure it's on top of other elements
                        left: `${textBoxLayout.x}px`, // Set left position
                        top: `${textBoxLayout.y}px`, // Set top position
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}>
                        {/* Add a close button "x" */}
                        <button
                            type = "button"
                            onClick={closeTextBox}
                            style={{
                            position: 'absolute', // Position the button absolutely
                            top: '5px', // Position from the top edge
                            right: '5px', // Position from the right edge
                            background: 'none', // No background color
                            border: 'none', // No border
                            cursor: 'pointer', // Show a pointer cursor on hover
                            fontSize: '16px', // Set font size
                        }}> &times;
                        </button>

                        {def.split('\n').map(e => <p>{e}</p>)}
                    </div>
                    )}
                    <div className="w-full px-3 mb-3">
                        <button id = {`Upload`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full tracking-wider py-2" onClick = {uploadFile}>Upload File</button>
                    </div>
                    <div className = "w-full px-3 mb-3 grid grid-cols-2 gap-4">
                        <button id = {`Decrease Font Size`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 tracking-wider py-2" 
                            onClick = {increaseFontSize}>Font (+)</button>
                        <button id = {`Decrease Font Size`}type = "button" className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 tracking-wider py-2" 
                            onClick = {decreaseFontSize}>Font (-)</button>
                    </div>  
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className = "row-auto col-span-4">
          <div className="pt-8 pb-0 md:pt-6 md:pb-0">
            <div className="max-w-full mx-auto text-center pb-0 md:pb-0">
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Box */}
                    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                    <h4 className="h4 mb-2" id='Heading'>{lastHeader}</h4>
                    <div style={divstyle} id="scrollbox" onScroll={() => {timer = checkScroll(timer)}}>
                        {renderText()}
                    </div>
                    <div className = "w-full pt-4 px-3 mb-7  flex justify-center items-center space-x-4">
                        <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-1/4 sm:mb-0 tracking-wider py-2" 
                        onClick={scrollUp}>Scroll Up</button>
                        <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-1/4 sm:mb-0 tracking-wider py-2" 
                        onClick={scrollDown}>Scroll Down</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
          </div>
        </div>
      </>
    );
}

function formatText(rawText: string){
    let sections = ["Preface"]
    let text = []
    let paragraph = ""
    let splits = rawText.split('\n')
    for (let i = 0; i < splits.length; i++) {
        if ((splits[i].split(/( )/).length < 3) && (splits[i].charAt(0).match(/[A-Z]/)) && (/^[A-Za-z\s]*$/.test(splits[i])) && (splits[i].length > 5)) {
            text.push(paragraph)
            sections.push(splits[i])
            paragraph = ""
        }
        else {
            paragraph += `${splits[i]} `
        }
    }
    text.push(paragraph)
    return [sections, text]
}
