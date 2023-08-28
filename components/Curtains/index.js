import React from 'react';
function Curtains({setHide}) {
    const showHandler = () => {
        setInterval(()=> {
            setHide(false)
        },1500)
    }
    return (
    <div onClick={showHandler} className="curtainBody top-0">
        <div id="leftCurtain" className="curtainContainer z-50">
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
        </div>
        <div id="rightCurtain" className="curtainContainer z-50">
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
            <div className="unCurtain"></div>
        </div>
        <div className="overlay z-50"></div>
    </div>
    );
}

export default Curtains;

