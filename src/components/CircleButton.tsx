import React from 'react';
import "../css/CircleButton.css";

interface CircleButtonProps {
    symbol: string;
    label: string;
    style?: React.CSSProperties 
}

const CircleButton: React.FunctionComponent<CircleButtonProps> = (props: CircleButtonProps) => {
    return (
        <div className="circle-button_container" style={props.style}>
            <button className="circle-button_btn">
                <span className="circle-button_symbol">{props.symbol}</span>
            </button>
            <span className="circle-button_label">{props.label}</span>
        </div>
    )
}

export default CircleButton
