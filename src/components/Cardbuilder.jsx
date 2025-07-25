import './css/cardbuilder.css'
import { useState } from 'react'
import Pic from './img/profile-default.jpg';
import Instagramicon from './img/instagram-icon.png';
import Linkedinicon from './img/linkedin-icon.png';
import Youtubeicon from './img/youtube-icon.png';
import Xicon from './img/x-icon.png';
function Cardbuilder() {
    const [bgcolor, Setbgcolor] = useState("rgb(255,229,229)");
    const [name, Setname] = useState("Your Name...");
    const [description, Setdescription] = useState("I am good at html well better in css good for me i guess");
    const [textcolor, Settextcolor] = useState("black");
    const [instalink, Setinstalink] = useState("");
    const [linkedinlink, Setlinkedinlink] = useState("");
    const [youtubelink, Setyoutubelink] = useState("");
    const [xlink, Setxlink] = useState("");
    const [buttonbgcolor, Setbgbuttoncolor] = useState("");
    const [buttoncolor, Setbuttoncolor] = useState("white");
    const [viewcv, Setviewcv] = useState("");   
    
    const [emailme, Setemailme] = useState("");

    console.log(buttoncolor, "buttonColor");

    const bgcolorChangeHandler = (e) => {
        Setbgcolor(e.target.value);
    }
    const nameHandler = (event) => {
        Setname(event.target.value)
    }
    const descriptionHandler = (e) => {
        Setdescription(e.target.value)
    }
    const textcolorHandler = (event) => {
        Settextcolor(event.target.value)
    }
    const instalinkHandler = (e) => {
        Setinstalink(e.target.value);
    }
    const linkedinlinkHandler = (e) => {
        Setlinkedinlink(e.target.value);
    }
    const youtubelinkHandler = (e) => {
        Setyoutubelink(e.target.value);
    }
    const xlinkHandler = (e) => {
        Setxlink(e.target.value);
    }
    const buttonbgcolorHandler = (e) => {
        Setbgbuttoncolor(e.target.value);
    }
    const buttoncolorHandler = (e) => {
        Setbuttoncolor(e.target.value);
    }
    const viewcvHandler = (e) => {
        Setviewcv(e.target.value);
    }
    const emailmeHandler = (e) => {
        Setemailme(e.target.value);
    }
    return (
        <>
            <h1>Card Builder: </h1>
            <div className="builder-all">
                <div className="builder-left">
                    <h3 style={{ display: "inline-block" }}>Select your Background Color: &nbsp;</h3>
                    <input className="color-selection" type="color" value={bgcolor} onChange={bgcolorChangeHandler} />


                    <h3 style={{ display: "inline-block" }}>Select your Text Color:&nbsp; </h3>
                    <input className="color-selection" type="color" value={textcolor} onChange={textcolorHandler}></input>
                    {/* <input type="file" className='image-exceptor'/> */}


                    <input type="text" value={name} className='name-acceptor' placeholder='Your Name...' onChange={nameHandler} />

                    <h5>Description:</h5>
                    <textarea type="text" value={description} rows="3" className='description-acceptor' onChange={descriptionHandler} />


                    <h3>Social Media Handles (Links):</h3>
                    <div className='social-input'>
                        <img className="socialmedia-icons" src={Instagramicon} />
                        <input className='socialmedia-input' value={instalink} placeholder="Insta profile url..." onChange={instalinkHandler}></input>
                    </div>
                    <div className='social-input'>

                        <img className="socialmedia-icons" src={Linkedinicon} />
                        <input className='socialmedia-input' value={linkedinlink} placeholder='Linkedin profile url..' onChange={linkedinlinkHandler}></input>
                    </div>
                    <div className='social-input'>
                        <img className="socialmedia-icons" src={Youtubeicon} />
                        <input className='socialmedia-input' value={youtubelink} placeholder='Youtube profile url..' onChange={youtubelinkHandler}></input>

                    </div>
                    <div className='social-input'>
                        <img className="socialmedia-icons" src={Xicon} />
                        <input className='socialmedia-input' value={xlink} placeholder='Twitter profile url..' onChange={xlinkHandler}></input>

                    </div>

                    <h4 style={{ display: "inline-block" }}>Select your Button Background Color: &nbsp;</h4>
                    <input className="color-selection" type="color" value={buttonbgcolor} onChange={buttonbgcolorHandler} />
                    <h4 style={{ display: "inline-block" }}>Select your Button Text Color:&nbsp; </h4>
                    <input className="color-selection" type="color" value={buttoncolor} onChange={buttoncolorHandler}></input>

                    <input placeholder="CV URL...." type="text" value={viewcv} className='cv-email-input' onChange={viewcvHandler} />
                    <input placeholder="Email Id...." type="email" value={emailme} className='cv-email-input' onChange={emailmeHandler} />
                </div>
                <div className="cardbuild-right">
                    <div className="card" style={{ backgroundColor: bgcolor, color: textcolor }}>
                        <img src={Pic} className='profile-pic' />

                        <b><p className='name'>{name}</p></b>

                        <p className="description">{description}</p>


                        <div className="socialhandles-line">
                            <a href={instalink} target='_blank'>
                                <img className="socialmedia-icons" style={{ display: instalink === "" ? "none" : "inline-block" }} src={Instagramicon} />

                            </a>
                            <a href={linkedinlink} target="_blank">
                                <img className="socialmedia-icons" style={{ display: linkedinlink === "" ? "none" : "inline-block" }} src={Linkedinicon} />
                            </a>
                            <a href={youtubelink} target="_blank">
                                <img className="socialmedia-icons" style={{ display: youtubelink === "" ? "none" : "inline-block" }} src={Youtubeicon} />
                            </a>

                            <a href={xlink} target="_blank">
                                <img className="socialmedia-icons" style={{ display: xlink === "" ? "none" : "inline-block" }} src={Xicon} />
                            </a>
                        </div>
                        <div className="cv-email">
                            {/*   <a href={viewcv} > */}
                            <button
                                className='view-cv'
                                style={{ backgroundColor: buttonbgcolor, color: buttoncolor }}
                                onChange={viewcvHandler}
                                target="_blank"
                            >View CV</button>
                            {/* </a> */}
                            <a href={`mailto:${emailme}`}>
                                <button
                                    className="email-me"
                                    style={{ backgroundColor: buttonbgcolor, color: buttoncolor }}
                                    onChange={emailmeHandler}
                                    target="_blank"
                                >Email Me</button>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Cardbuilder;