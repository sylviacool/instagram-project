import React from "react";
import Header from "./components/Header";
import Story from "./components/Story";
import Card from "./components/Card";

const App = () => {
    return (
        <div className="flex justify-center items-stretch ">
            <div className="w-[50vw] px-4 border-4 border-amber-300">
                <Header />

                <div className="flex gap-3 my-5">
                    <Story name="Your story" width={70} height={70}  />
                    <Story name="3gx__" width={70} height={70}/>
                    <Story name="faybeyond" width={70} height={70} />
                    <Story name="futur"width={70} height={70} />
                    <Story name="faybeyond" width={70} height={70}/>
                    <Story name="futur" width={70} height={70}/>
                </div>
                
                <Card />
            </div>
        </div>
    );
};

export default App;
