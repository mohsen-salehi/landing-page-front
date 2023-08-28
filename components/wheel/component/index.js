import React, {useEffect, useState} from "react";

function Wheel({items , clickable , setClickable , winIndex}) {
    const [counter , setCounter ] = useState(0)
    const [selectedItem , setSelectedItem ] = useState(null)

    useEffect(() => {
      if (clickable){
          if (selectedItem === null) {
              setSelectedItem(winIndex)
              setCounter((prevState)=> prevState +1 )
          }
      }
    }, [clickable]);
    const wheelVars = {
        "--nb-item": items.length,
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
                {items.map((item, index) => (
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