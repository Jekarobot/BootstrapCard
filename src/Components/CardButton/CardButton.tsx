import React from "react";

interface CardButtonProps {
    children: React.ReactNode;
}

const CardButton: React.FC<CardButtonProps> = ({ children }) => {
    return <a href="#" className="btn btn-primary">{children}</a>;
};

export default CardButton;