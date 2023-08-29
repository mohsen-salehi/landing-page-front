import Wheel from "@/components/wheel/component";




function Wheels({clickable , setClickable , wheelState}) {
    return (
        <Wheel clickable={clickable} setClickable={setClickable} items={wheelState?.wheel} />
    );
}

export default Wheels;
