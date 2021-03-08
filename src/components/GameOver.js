import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from "../GameContext";
import './Field.css'

function localStorageParser(){
    let grid = localStorage.getItem('grid')
    grid = grid.split(',')
    grid=grid.map(element => parseInt(element))

    return [grid.slice(0,4), grid.slice(4,8), grid.slice(8,12), grid.slice(12,16)]

}

export const GameOver = ()=>{


    const context = useContext(GameContext)

    const clickHandler = ()=>{
        // context.setGameField(context.initialField)
        context.setScore(0)
        context.setGameOver(false)
        localStorage.setItem('grid', context.initialField)
        context.setLocalField(localStorageParser())
        context.setGameField(localStorageParser())
        // window.location.reload();
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