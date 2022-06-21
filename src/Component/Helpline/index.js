import React from 'react';


const Index=() => {
    return (
        <div className="Aim">
            <h2 className="center">Helpline</h2>
            <div className="line-wrapper">
                <div className="line"></div>
            </div>
            <p className="pgraph">You need to talk to someone urgently. Please reach us on these lines
                <span className="phone"><i class="fa fa-phone" aria-hidden="true"></i>    
                <b>  08077781990</b>,<b>  09098830620</b></span> or send a Whatsapp message through this 
                <a href="/" target="_blank" rel="noreferrer" className="whatsapplink">  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                link <span className="smlinks"> Whatsapp</span></a>
            </p> 
        </div>
    )
}

export default Index;