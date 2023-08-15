import Image from "next/image";
import React from "react";

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <Image
                alt="Loading..."
                src="/loader.svg"
                width={100}
                height={100}
                
            />
        </div>
    );
};

export default Loader;