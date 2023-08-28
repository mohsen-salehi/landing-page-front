import React, {useContext, useEffect, useState} from 'react';
import Image from "next/image";
import Title from "@/public/title.svg";
import Wheels from "@/components/wheel/wheels";
import wheel from "@/public/New folder (4)/حلقه با سایه.svg";
import Btn from "@/public/btn.svg";
import {ToastContainer} from "react-toastify";
import {StoreContext} from "@/store";
import 'react-toastify/dist/ReactToastify.css';
import Curtains from "@/components/Curtains";

function HomeComponent() {
    const [loading , setLoading] = useState(false)
    const [clickable , setClickable] = useState(false)
    const [hide , setHide] = useState(true)
    const clickHandler = () => {
        setClickable(true)
    }
    const {wheelState , wheelDispatch} = useContext(StoreContext)
    useEffect(() => {
        wheelDispatch({type : "GET_INDEX"})
    }, []);
    setTimeout(()=> {
        setLoading(true)
    } , 1000)
    return (
        <main
            className="p-3  h-screen current-page overflow-x-hidden relative flex flex-wrap justify-center content-start container mx-auto max-w-7xl ">
            {hide && <Curtains setHide={setHide}/>}
            <div className="w-full p-2  flex justify-center items-center overflow-hidden">
                <Image width={400} height={300} src={Title} className="scale-[1.2]" alt={"title"}/>
            </div>
            {loading && (
                <div className="w-full  flex flex-wrap justify-center">
                    <div className="p-[10px]  -rotate-90 !rounded-full flex flex-wrap  relative main-wheel" >
                        <div className="z-10 rounded-full">

                            <Wheels wheelState={wheelState} clickable={clickable} setClickable={setClickable} />
                        </div>
                        <Image src={wheel} alt="wheel" width={285} height={285} className="z-0 center-position overflow-hidden rounded-full"/>
                        <div className="wheel-pointer overflow-hidden rounded-full"></div>
                    </div>
                    <div className="w-full flex justify-center items-center  overflow-hidden">
                        <div className="image-holder image-holder z-10"></div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <Image width={230} height={72} src={Btn} alt={"btn"} onClick={clickHandler} className="cursor-pointer" />
                    </div>
                </div>
            )}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />
        </main>
    );
}

export default HomeComponent;