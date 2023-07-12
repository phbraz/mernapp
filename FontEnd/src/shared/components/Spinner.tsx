import React from "react";

interface SpinnerProps {
    colour: string
}

const Spinner = ({colour}: SpinnerProps) => {

    return <div className="inline-block w-6 h-6 border-4 border-t-4 border-gray-200 rounded-full animate-spin" style={{ borderTopColor: colour }}></div>
};


export { Spinner }