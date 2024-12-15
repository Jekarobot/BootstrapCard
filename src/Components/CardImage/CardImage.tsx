import React from "react";

interface CardImageProps {
    src: string;
    alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
    return (
        <div className="card-img-container">
            <img src={src} className="card-img-top" alt={alt} />
        </div>
    )
};

export default CardImage;