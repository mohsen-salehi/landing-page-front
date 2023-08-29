import React, {useContext, useEffect, useState} from "react";
import {StoreContext} from "@/store";
import {appendBonus} from "@/context/actions/wheel/appendBonus";

function Wheel({items , clickable , setClickable  }) {
    const [counter , setCounter ] = useState(0)
    const [selectedItem , setSelectedItem ] = useState(null)
    const  {wheelState, wheelDispatch} = useContext(StoreContext)
    const [wonIndex , setWonIndex] = useState(0)

    useEffect(() => {
      if (clickable){
          if (selectedItem === null) {
              appendBonus(wheelState?.token).then(function (result){
                  console.log(result)
                  setWonIndex(result.map(item => item?.bonus_id))
              })
              setSelectedItem(wonIndex[Math.floor(Math.random() * wonIndex.length)])
              console.log(wonIndex[Math.floor(Math.random() * wonIndex.length)])
              setCounter((prevState)=> prevState +1 )
          }
      }
    }, [clickable]);







    const wheelVars = {
        "--nb-item": items?.length,
        "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    return (
        <div className="wheel-container flex flex-wrap">
            <div
                className={`wheel ${spinning}`}
                id="click_btn"
                style={wheelVars}
            >
                {items?.map((item, index) => (
                    <div
                        className="wheel-item"
                        key={index}
                        style={{ "--item-nb": index }}
                    >
                        {item}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Wheel;