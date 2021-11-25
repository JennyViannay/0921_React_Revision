import axios from "axios";
import { useEffect, useState } from "react";

export const AllCharacters = () => {
    const [infos, setInfos] = useState();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getInfos()
    }, [])

    const getInfos = () => {
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => res.data)
            .then(data => {
                setInfos(data.info)
                setCharacters(data.results)
                for (let i = 1; i <= data.info.pages; i++) {
                    getCharacters(i)
                }
            });
    }

    const getCharacters = (page) => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => res.data)
            .then(data => {
                console.log(data.results)
                setCharacters(characters => [...characters, data.results])
            })
    }
    // console.log(characters)
    // console.log(infos)
    return (<div>all acharacters</div>)
}