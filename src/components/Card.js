import React from 'react';
import '../App.css';

function Card({name,img,moves,weight,abilities}) {



    return (
        <>
            <div className="cardcontainer">
                <article className="card">
                    <h1>{name}</h1>
                    <img src={img} alt="name"/>
                    <h2>Moves: {moves}</h2>
                    <h2>Weight: {weight}</h2>
                    <h2>Abilities:</h2>
                    <div className="abilities">
                       {abilities.map(ability => <p>{ability}</p>)}
                    </div>
                </article>
            </div>
        </>
    );
}

export default Card;
