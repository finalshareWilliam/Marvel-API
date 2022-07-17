import { Input } from "@mui/material";
import React, { useRef } from "react";

export default function SearchBar({setter}){
    let input = useRef("")

    const handleClick = async (e) => {
        let value = input.current.value
        if (value === "") return

        try{
            let herois = await fetchHerois (value)
            setter(herois)
        } catch (err){
            console.error(err);
        }
    }

    return(
        <form>
            <input type="text" placeholder="Pesquisar Heroi..." ref={input}/>
            <button onClick={handleClick}>Pesquisar</button>
        </form>
    );
}