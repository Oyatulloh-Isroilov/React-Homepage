import NewInfo from "./newInfo";

function Hero() {
        return <div className="heroBar">
            <div className="heroLeft">
                <div className="heroImg">
                    <img src="./hero.png" alt="" />
                </div>
                <div className="heroInfo">
                    <h1>The Bright Future of Web 3.0?</h1>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>
            </div>
            <div className="heroRight">
                <div className="heroNews">
                    <h2>New</h2>
                    <NewInfo importantInfo="Hydrogen VS Electric Cars" info="Will hydrogen-fueled cars ever catch up to EVs?" />
                    <NewInfo importantInfo="The Downsides of AI Artistry" info="What are the possible adverse effects of on-demand AI image generation?" />
                    <NewInfo importantInfo="Is VC Funding Drying Up?" info="Private funding by VC firms is down 50% YOY. We take a look at what that means." />
                </div>
            </div>
        </div>
}

export default Hero;