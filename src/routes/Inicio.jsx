import React, { useState } from 'react'

import Container from '../componentes/Container'
import SearchBar from '../componentes/SearchBar'
import Grid from '../componentes/Grid'
import Card from '../componentes/Card'


const IMAGE_SIZE = 'portrait_fantastic';

export default function Inicio(){
    const [herois, setHerois] = useState ();

    let cards;

    if (herois) {
        cards = herois.map((hero) => (
          <Card
            name={hero.name}
            key={hero.id}
            id={hero.id}
            thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
          />
        ));
      }
    return(
        <Container>
            <h1>Universo Marvel</h1>
            <SearchBar setter={setHerois}/>
            <Grid>{cards ? cards : null}</Grid>
        </Container>
    );
}