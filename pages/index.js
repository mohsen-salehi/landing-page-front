import Curtains from "@/components/Curtains";

export default function Home() {

    return (
         <Authorization>
            <HomeComponent/>
         </Authorization>
    )
}
import HomeComponent from "@/components/home/homeComponent";


import Authorization from "@/middleware/authorization";
import React from "react";
