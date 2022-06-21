import React from 'react';
import './index.css';

const Index = () => {
    return(
        <div className="note">
            <div className="note-section-1">
                <h2 className="note-header">Live Chat</h2>
                <p className="note-paragraph">We want you to know we will always be here to talk about whatever is on
                 your mind</p>
                 <div className="btn-wrapper">
                    <a href="https://www.tidio.com/talk/ah1isddqryi86dbqiicdsu2cpxjkysr0" target="_blank" rel="noreferrer" className="btn">Live Chat</a>
                </div>
            </div>

            <div className="note-section-2">
                <h2 className="note-header">NGO Support</h2>
                <p className="note-paragraph">Here is a list of organizations that would love to provide support for you 
                during this period.</p>
                <div className="btn-wrapper">
                    <a href="/get-support" className="btn"> List of NGOs</a>
                </div>
            </div>
        </div>
    )
}

export default Index;