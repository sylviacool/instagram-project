import React from "react";
import Foto from "../assets/images/img.jpg";

const Story = (props) => {
    return (
        <div className="border-4 border-amber-500 ">
            <img
                src={Foto}
                alt="story-foto"
                className={` rounded-full w-[${props.width}] h-[${props.height}] border-amber-300 border-3 p-1`}
            />
            <p className="text-xs text-center">{props.name}</p>
        </div>
    );
};

export default Story;
