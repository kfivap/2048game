import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from "../GameContext";
import './Field.css'

export const Score = ()=>{


    const context = useContext(GameContext)

    const maxScore = localStorage.getItem('2048maxScore')

    useEffect(()=>{
        if(!localStorage.getItem('2048score')){
            localStorage.setItem('2048score', context.score)
        }

        localStorage.setItem('2048score', context.score)


        let locSt = parseInt(localStorage.getItem('2048maxScore'))
                if(!locSt){
                    localStorage.setItem('2048maxScore', context.score)
                }
                if(locSt<context.score) {
                    localStorage.setItem('2048maxScore', context.score)
                }

            },[context.score])

    return(<div>

        <h2>current <span className="badge bg-light text-dark">{context.score}</span></h2>
        <h2>max <span className="badge bg-light text-dark">{maxScore}</span></h2>

    </div>)
}