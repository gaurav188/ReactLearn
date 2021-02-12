import React from 'react';
import './card.styles.css';
export const Card = props => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61Fl7JbX%252BPL._AC_SY741_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FUBTECH-Alpha-1PRO-Humanoid-Robot%2Fdp%2FB06XT3F6Q8&tbnid=0-MQjzCA-cgLJM&vet=12ahUKEwir3duLtuTuAhX7kksFHUGOC9AQMygFegUIARDhAQ..i&docid=6bBjYWW2rrFA1M&w=435&h=741&q=robot&ved=2ahUKEwir3duLtuTuAhX7kksFHUGOC9AQMygFegUIARDhAQ`} />
            <h1>{props.monster.name}</h1>
        </div>
    )
}