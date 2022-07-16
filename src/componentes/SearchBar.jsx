import { Input } from "@mui/material";
import React, { useRef } from "react";

export default function SearchBar(){
    let input = useRef("")
    return(
        <form>
            <input type="text" placeholder="Pesquisar Heroi..." ref={input}/>
            <button>Pesquisar</button>
        </form>
    );
}