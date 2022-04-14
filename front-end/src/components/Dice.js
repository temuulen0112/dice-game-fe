import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import "../css/dice.css";
// import { useEffect, useState } from 'react';


function Dice() {


    return (
        <div className='imbyuu'>
            <img className='img' src='/img/dice1.png' />
            <Form.Control type="text" placeholder="Enter your name" />
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Roll Dice</Button>
            </ButtonGroup>
        </div>
    )
}

export default Dice;