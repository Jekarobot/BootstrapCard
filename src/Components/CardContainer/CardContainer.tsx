import React from "react";
import Card from "../Card/Card";
import CardImage from "../CardImage/CardImage";
import CardButton from "../CardButton/CardButton";

const CardContainer: React.FC = () => {
    return (
        <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." button={<CardButton>Go somewhere</CardButton>}>
            <CardImage src="https://picsum.photos/0/0" alt="Card image" />
        </Card>
    )
}

export default CardContainer;