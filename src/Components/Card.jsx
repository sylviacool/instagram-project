import React from "react";
import Story from "./Story";
import Foto from "../assets/images/img.jpg";
import { FaRegHeart } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";

const Card = () => {
    return (
        <section className="border-3 p-2">
            <div className="cardhead my-4">
                <Story className="" name="bbc" width={30} height={30}/>
            </div>
            <div className="cardbody">
                <img src={Foto} alt="story-foto" />
            </div>
            <div className="cardfoot">
                <div className="icons flex justify-between my-4">
                    <div className="left-icons flex gap-4">
                        <FaRegHeart />
                        <LuMessageCircle />
                        <LuSend />
                    </div>
                    <FaRegBookmark />
                </div>
                <div className="cardtext">
                    <p> Welcome to my page</p>
                </div>
            </div>
        </section>
    );
};

export default Card;
