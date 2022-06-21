import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';


const Index= () => {
    
    return (
        <div>
            <section>
            <Slider
                fullscreen={false}
                options={{
                    duration: 500,
                    height: 550,
                    indicators: true,
                    interval: 5000
                }}
                >
                <Slide image={<img alt="" src="/sad-lady.jpg" className="first-img"/>}>
                    <Caption placement="left">
                    <h3 className="captitle">
                        Our mental health
                    </h3>
                    <h5 id="element" className="letters">
                        is easily ignored
                    </h5>
                    </Caption>
                </Slide>
            <Slide image={<img alt="" src="/pictwo1.jpg"/>}>
                    <Caption placement="left">
                    <h3 className="captitle">
                        You might be experiencing a sad chapter
                    </h3>
                    <h5 id="two" className="letters">
                        but you are not a sad story
                    </h5>
                    </Caption>
                </Slide>
                <Slide image={<img alt="" src="/picthree.jpg"/>}>
                    <Caption placement="right">
                    <h3 className="captitle">
                        Start the conversation with us today
                    </h3>
                    <h5 id="three" className="letters">
                        Talking with someone makes <span id="wrap">a difference!</span>
                    </h5>
                    </Caption>
                </Slide>
                <Slide image={<img alt="" src="/picfour.jpg"/>}>
                    <Caption placement="center">
                    <h3 className="captitle">
                        Together, the power is ours
                    </h3>
                    <h4 className="letters" id="four">
                        You are not alone!
                    </h4>
                    </Caption>
                </Slide>
            </Slider>
            </section>
        </div>

    )
}

export default Index;