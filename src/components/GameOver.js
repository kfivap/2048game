import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from "../GameContext";
import './Field.css'

export const GameOver = ()=>{


    const context = useContext(GameContext)

    const clickHandler = ()=>{
        context.setGameField(context.initialField)
        context.setScore(0)
        context.setGameOver(false)
        window.location.reload();
    }

    if(context.gameOver){
        return(<div>
            <h1>Game Over</h1>
            <button className='btn btn-outline-warning btn-lg m-2' onClick={clickHandler}>reset!</button>
        </div>)
    }
    else{
        return null
    }


}