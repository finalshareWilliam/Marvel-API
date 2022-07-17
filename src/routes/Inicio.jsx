import React, { useState } from 'react'

import Container from '../componentes/Container'
import SearchBar from '../componentes/SearchBar'
import Grid from '../componentes/Grid'

export default function Inicio(){
    const [herois, setHerois] = useState ([])
    return(
        <Container>
            <h1>Universo Marvel</h1>
            <SearchBar setter={setHerois}/>
            <Grid>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Grid>
        </Container>
    )
}