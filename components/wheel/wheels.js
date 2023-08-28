import Wheel from "@/components/wheel/component";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "@/store";



function Wheels({clickable , setClickable , wheelState}) {
    return (
        <Wheel clickable={clickable} setClickable={setClickable} items={wheelState?.wheel} winIndex={2}/>
    );
}

export default Wheels;
