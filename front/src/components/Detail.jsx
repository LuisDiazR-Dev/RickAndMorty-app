import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
//styles
import styled from "styled-components";
import { CardDiv } from "./Card";


const Detail = () => {
    const { id } = useParams();//sacando el Id de la URL

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});
    }, [id]); //viendo tod el tiempo al id a ver si cambia

    return (
        <CardDiv>
            <h2>Soy Detail de:</h2>
            <h3>{character.name && character.name}</h3>

            <span>.-{character.status && character.status}-.</span>
            <span>.-{character.species && character.species}-.</span>
            <span>.-{character.gender && character.gender}-.</span>
            <span>.-{character.origin?.name && character.origin?.name}-.</span>

            <img src={character.image && character.image}
                alt={character.name && character.name} />

        </CardDiv>
    );
};
export default Detail;
