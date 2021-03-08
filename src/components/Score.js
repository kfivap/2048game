import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from "../GameContext";
import './Field.css'

export const Score = ()=>{


    const context = useContext(GameContext)

    const maxScore = localStorage.getItem('2048maxScore')

    return(<div>

        <h2>current <span className="badge bg-light text-dark">{context.score}</span></h2>
        <h2>max <span className="badge bg-light text-dark">{maxScore}</span></h2>

    </div>)
}