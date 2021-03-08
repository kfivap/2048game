import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import {Field} from "./Field";
import {GameContext} from "../GameContext";

function mover(num1, num2) {

    if (num1===num2 && num2!==0 ){
        return true
    }
    // if (num1===0 ){
    //     return true
    // }
    else
        {return false}
}

function RandomFill() {
if(Math.random()<0.8){
    return 2
}
else {return 0}
}


export const Game = (props) => {

    const context = useContext(GameContext)






    function handleKeyDown(event) {



        const fl = [...context.gameField]

        if(event.key === 'ArrowUp'){
            // console.log(event.key)

            for (let j=0; j<4; j++) {

                for (let i = 0; i < 2; i++) {
                    if (fl[0][j] === 0) {
                        fl[0][j] = fl[1][j]
                        fl[1][j] = 0
                    }
                    if (fl[1][j] === 0) {
                        fl[1][j] = fl[2][j]
                        fl[2][j] = 0
                    }
                    if (fl[2][j] === 0) {
                        fl[2][j] = fl[3][j]
                        fl[3][j] = 0
                    }
                }


                if (mover(fl[0][j], fl[1][j])) {
                    fl[0][j] += fl[1][j]
                    fl[1][j] = 0
                }
                if (mover(fl[1][j], fl[2][j])) {
                    fl[1][j] += fl[2][j]
                    fl[2][j] = 0
                }

                if (mover(fl[2][j], fl[3][j])) {
                    fl[2][j] += fl[3][j]
                    fl[3][j] = 0
                }

                for (let i = 0; i < 2; i++) {
                    if (fl[0][j] === 0) {
                        fl[0][j] = fl[1][j]
                        fl[1][j] = 0
                    }
                    if (fl[1][j] === 0) {
                        fl[1][j] = fl[2][j]
                        fl[2][j] = 0
                    }
                    if (fl[2][j] === 0) {
                        fl[2][j] = fl[3][j]
                        fl[3][j] = 0
                    }
                }

                //filler
                for(let i=0; i<4; i++){
                    if(fl[i][j]===0){
                        fl[i][j]=RandomFill()
                        }
                }

            }


        }

        if(event.key === 'ArrowDown'){
            // console.log(event.key)
            for (let j=0; j<4; j++) {

                for (let i = 0; i < 2; i++) {
                    if (fl[3][j] === 0) {
                    fl[3][j] = fl[2][j]
                    fl[2][j] = 0
                }
                    if (fl[2][j] === 0) {
                        fl[2][j] = fl[1][j]
                        fl[1][j] = 0
                    }
                    if (fl[1][j] === 0) {
                        fl[1][j] = fl[0][j]
                        fl[0][j] = 0
                    }


                }


                if (mover(fl[3][j], fl[2][j])) {
                    fl[3][j] += fl[2][j]
                    fl[2][j] = 0
                }
                if (mover(fl[2][j], fl[1][j])) {
                    fl[2][j] += fl[1][j]
                    fl[1][j] = 0
                }

                if (mover(fl[1][j], fl[0][j])) {
                    fl[1][j] += fl[0][j]
                    fl[0][j] = 0
                }



                for (let i = 0; i < 2; i++) {
                    if (fl[3][j] === 0) {
                        fl[3][j] = fl[2][j]
                        fl[2][j] = 0
                    }
                    if (fl[2][j] === 0) {
                        fl[2][j] = fl[1][j]
                        fl[1][j] = 0
                    }
                    if (fl[1][j] === 0) {
                        fl[1][j] = fl[0][j]
                        fl[0][j] = 0
                    }


                }


                for(let i=0; i<4; i++){
                    if(fl[i][j]===0){
                        fl[i][j]=RandomFill()
                    }
                }


            }

        }

        if(event.key === 'ArrowLeft'){
            // console.log(event.key)

            for (let j=0; j<4; j++) {

                for (let i = 0; i < 2; i++) {
                    if (fl[j][0] === 0) {
                        fl[j][0] = fl[j][1]
                        fl[j] [1]= 0
                    }
                    if (fl[j][1] === 0) {
                        fl[j][1] = fl[j][2]
                        fl[j][2] = 0
                    }
                    if (fl[j][2] === 0) {
                        fl[j][2] = fl[j][3]
                        fl[j][3] = 0
                    }
                }


                if (mover(fl[j][0], fl[j][1])) {
                    fl[j][0] += fl[j][1]
                    fl[j][1] = 0
                }
                if (mover(fl[j][1], fl[j][2])) {
                    fl[j][1] += fl[j][2]
                    fl[j][2]= 0
                }

                if (mover(fl[j][2], fl[j][3])) {
                    fl[j][2] += fl[j][3]
                    fl[j][3] = 0
                }

                for (let i = 0; i < 2; i++) {
                    if (fl[j][0] === 0) {
                        fl[j][0] = fl[j][1]
                        fl[j] [1]= 0
                    }
                    if (fl[j][1] === 0) {
                        fl[j][1] = fl[j][2]
                        fl[j][2] = 0
                    }
                    if (fl[j][2] === 0) {
                        fl[j][2] = fl[j][3]
                        fl[j][3] = 0
                    }
                }

                //filler
                for(let i=0; i<4; i++){
                    if(fl[i][j]===0){
                        fl[i][j]=RandomFill()
                    }
                }

            }




        }

        if(event.key === 'ArrowRight'){
            // console.log(event.key)

            let count = 0

            for (let j=0; j<4; j++) {

                for (let i = 0; i < 2; i++) {
                    if (fl[j][3] === 0 &&fl[j][2]!==0) {
                        fl[j][3] = fl[j][2]
                        fl[j][2] = 0
                        count=count+1
                    }
                    if (fl[j][2] === 0 &&fl[j][1]!==0) {
                        fl[j][2] = fl[j][1]
                        fl[j][1] = 0
                        count=count+1
                    }
                    if (fl[j][1] === 0 &&fl[j][0]!==0) {
                        fl[j][1] = fl[j][0]
                        fl[j][0] = 0
                        count=count+1
                    }

                }


                if (mover(fl[j][3], fl[j][2])) {
                    fl[j][3] += fl[j][2]
                    fl[j][2] = 0
                }
                if (mover(fl[j][2], fl[j][1])) {
                    fl[j][2] += fl[j][1]
                    fl[j][1] = 0
                }

                if (mover(fl[j][1], fl[j][0])) {
                    fl[j][1] += fl[j][0]
                    fl[j][0] = 0
                }



                for (let i = 0; i < 2; i++) {
                    if (fl[j][3] === 0) {
                        fl[j][3] = fl[j][2]
                        fl[j][2] = 0
                    }
                    if (fl[j][2] === 0) {
                        fl[j][2] = fl[j][1]
                        fl[j][1] = 0
                    }
                    if (fl[j][1] === 0) {
                        fl[j][1] = fl[j][0]
                        fl[j][0] = 0
                    }

                }

                for (let i = 0; i < 2; i++) {
                    if (fl[j][3] === 0 &&fl[j][2]!==0) {
                        fl[j][3] = fl[j][2]
                        fl[j][2] = RandomFill()
                        count=count+1
                    }
                    if (fl[j][2] === 0 &&fl[j][1]!==0) {
                        fl[j][2] = fl[j][1]
                        fl[j][1] = RandomFill()
                        count=count+1
                    }
                    if (fl[j][1] === 0 &&fl[j][0]!==0) {
                        fl[j][1] = fl[j][0]
                        fl[j][0] = RandomFill()
                        count=count+1
                    }

                }

                console.log(count)
                // //filler
                // for(let i=0; i<4; i++){
                //     if(fl[i][j]===0){
                //         fl[i][j]=RandomFill()
                //     }
                // }




            }


        }

        context.setGameField(fl)
    }
//сделать проверку ходов

useEffect(()=>{
    window.addEventListener('keydown', (e)=>{
        handleKeyDown(e)
    // context.setLastAction(564)
    })
    }
    , [])


    return(<div
        // ref={myref}

    >

        <h1>game</h1>

        <Field/>


    </div>)
}