import React from "react";

interface CardProps {
    title: string;
    text: string;
    children?: React.ReactNode;
    button: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, text, children, button }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                {button}
            </div>
        </div>
    );
}

export default Card;