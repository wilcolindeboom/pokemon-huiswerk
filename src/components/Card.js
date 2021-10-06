import React, {useEffect,useState} from 'react';
import '../App.css';
import axios from "axios";

function Card({name,img,moves,weight,abilities, url}) {

    const [cardData,setcardData] = useState();

    async function fetchCardData(url) {
        console.log("fetchCardData");
        try {
            const result = await axios.get(url);
            console.log(result.data);
            console.log("cardDatafetched");
            setcardData(result.data);
        } catch (e) {
            console.error(e);
        }
    }


    useEffect(
        () => {
            fetchCardData(url);
        }
        ,[url]
    );


    return (
        <>
                 <article className="card">
                    <h1>{name}</h1>
                    <img src={img} alt="name"/>
                    <h2>Moves: {cardData.moves.length}</h2>
                    <h2>Weight: {cardData.weight}</h2>
                    <h2>Abilities:</h2>
                    <div className="abilities">
                       {cardData.abilities.map(ability => <p>{ability.ability.name}</p>)}
                    </div>
                </article>
        </>
    );
}

export default Card;
