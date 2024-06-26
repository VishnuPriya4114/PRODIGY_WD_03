import React from 'react'
import styled from 'styled-components'
import Button from '../Elements/Button'

const Score = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Luckiest+Guy&display=swap');
    color: ${props => props.turn === props.check ? "#39ff14": "whitesmoke"};
    font-size: 50px;
    font-family: 'Coda Caption', sans-serif;
    font-family: 'Luckiest Guy', cursive;
    margin-top: 5px;
`
function ScoreCard({Turn,xScore,oScore}) {
    return (
        <div style={{'paddingBottom':'75px'}}>
            <Button width={'100px'} height={'100px'}>X</Button>
            {Turn === 'X' && <Score style={{'color':'black'}}>&#8594;</Score>}
            <Score turn={Turn} check='X' style={{'color':'green'}}>{xScore}</Score>
            <Button width={'100px'} height={'100px'}>O</Button>
            {Turn === 'O' && <Score style={{'color':'black'}}>&#8594;</Score>}
            <Score turn={Turn} check='O' style={{'color':'green'}} >{oScore}</Score>
        </div>
    )
}

export default ScoreCard
