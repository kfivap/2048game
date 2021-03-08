import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import {Field} from "./Field";
import {GameContext} from "../GameContext";
import {Score} from "./Score";
import {GameOver} from "./GameOver";
import {GitHub} from "./GitHub";


function mover(num1, num2) {

    if (num1 === num2 && num2 !== 0) {
        return true
    }
        // if (num1===0 ){
        //     return true
    // }
    else {
        return false
    }
}

function RandomFill(fl) {
    // if (Math.random() < 0.08) {
    //     return 2
    // } else {
    //     return 0
    // }

    let filled = false

    while (!filled){
        let a =Math.floor(Math.random() * 4);
        let b =Math.floor(Math.random() * 4);
            if (fl[a][b] === 0) {
                fl[a][b] = 2
                filled = true
                break
            }
        }

      //  console.log(fl)

    return fl

}



let possibleMoves = [true, true, true, true] //up down left right

export const Game = (props) => {

    const context = useContext(GameContext)



    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                // console.log( 'left swipe')
                window.dispatchEvent(new KeyboardEvent('keydown',{'key':'ArrowLeft'}));
            } else {
                // console.log( 'right swipe')
                window.dispatchEvent(new KeyboardEvent('keydown',{'key':'ArrowRight'}));
            }
        } else {
            if ( yDiff > 0 ) {
                // console.log( 'up swipe')
                window.dispatchEvent(new KeyboardEvent('keydown',{'key':'ArrowUp'}));
            } else {
                // console.log( 'down swipe')
                window.dispatchEvent(new KeyboardEvent('keydown',{'key':'ArrowDown'}));
            }
        }
        /* reset values */

        xDown = null;
        yDown = null;

    };

    const myref = useRef()




    function handleKeyDown(event) {


        let fl = context.gameField

        if (event.key === 'ArrowUp') {
            // console.log(event.key)

            let count = 0
            for (let j = 0; j < 4; j++) {

                for (let i = 0; i < 2; i++) {
                    if (fl[0][j] === 0 && fl[1][j] !== 0) {
                        fl[0][j] = fl[1][j]
                        fl[1][j] = 0
                        count = count + 1
                    }
                    if (fl[1][j] === 0 && fl[2][j] !== 0) {
                        fl[1][j] = fl[2][j]
                        fl[2][j] = 0
                        count = count + 1
                    }
                    if (fl[2][j] === 0 && fl[3][j] !== 0) {
                        fl[2][j] = fl[3][j]
                        fl[3][j] = 0
                        count = count + 1
                    }
                }


                if (mover(fl[0][j], fl[1][j])) {
                    fl[0][j] += fl[1][j]
                    fl[1][j] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[0][j])
                }
                if (mover(fl[1][j], fl[2][j])) {
                    fl[1][j] += fl[2][j]
                    fl[2][j] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[1][j])
                }

                if (mover(fl[2][j], fl[3][j])) {
                    fl[2][j] += fl[3][j]
                    fl[3][j] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[2][j])
                }

                for (let i = 0; i < 2; i++) {
                    if (fl[0][j] === 0 && fl[1][j] !== 0) {
                        fl[0][j] = fl[1][j]
                        fl[1][j] = 0
                        count = count + 1
                    }
                    if (fl[1][j] === 0 && fl[2][j] !== 0) {
                        fl[1][j] = fl[2][j]
                        fl[2][j] = 0
                        count = count + 1
                    }
                    if (fl[2][j] === 0 && fl[3][j] !== 0) {
                        fl[2][j] = fl[3][j]
                        fl[3][j] = 0
                        count = count + 1
                    }
                }



            }


            if (count > 0) {
                RandomFill(fl)
                possibleMoves.fill(true)
            }
            if (count ===0){
                possibleMoves[0] =false

            }
            count = 0
        }

        if (event.key === 'ArrowDown') {
            // console.log(event.key)
            let count = 0

            for (let j = 0; j < 4; j++) {

                for (let i = 0; i < 2; i++) {
                    if (fl[3][j] === 0 && fl[2][j] !== 0) {
                        fl[3][j] = fl[2][j]
                        fl[2][j] = 0
                        count = count + 1
                    }
                    if (fl[2][j] === 0 && fl[1][j] !== 0) {
                        fl[2][j] = fl[1][j]
                        fl[1][j] = 0
                        count = count + 1
                    }
                    if (fl[1][j] === 0 && fl[0][j] !== 0) {
                        fl[1][j] = fl[0][j]
                        fl[0][j] = 0
                        count = count + 1
                    }

                }


                if (mover(fl[3][j], fl[2][j])) {
                    fl[3][j] += fl[2][j]
                    fl[2][j] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[3][j])
                }
                if (mover(fl[2][j], fl[1][j])) {
                    fl[2][j] += fl[1][j]
                    fl[1][j] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[2][j])
                }

                if (mover(fl[1][j], fl[0][j])) {
                    fl[1][j] += fl[0][j]
                    fl[0][j] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[1][j])
                }


                for (let i = 0; i < 2; i++) {
                    if (fl[3][j] === 0 && fl[2][j] !== 0) {
                        fl[3][j] = fl[2][j]
                        fl[2][j] = 0
                        count = count + 1
                    }
                    if (fl[2][j] === 0 && fl[1][j] !== 0) {
                        fl[2][j] = fl[1][j]
                        fl[1][j] = 0
                        count = count + 1
                    }
                    if (fl[1][j] === 0 && fl[0][j] !== 0) {
                        fl[1][j] = fl[0][j]
                        fl[0][j] = 0
                        count = count + 1
                    }

                }

            }

            if (count > 0) {
                RandomFill(fl)
                possibleMoves.fill(true)
            }
            if (count ===0){
                possibleMoves[1] =false
            }
            count = 0
        }

        if (event.key === 'ArrowLeft') {
            // console.log(event.key)
            let count = 0

            for (let j = 0; j < 4; j++) {

                for (let i = 0; i < 2; i++) {
                    if (fl[j][0] === 0 && fl[j][1] !== 0) {
                        fl[j][0] = fl[j][1]
                        fl[j][1] = 0
                        count = count + 1
                    }
                    if (fl[j][1] === 0 && fl[j][2] !== 0) {
                        fl[j][1] = fl[j][2]
                        fl[j][2] = 0
                        count = count + 1
                    }
                    if (fl[j][2] === 0 && fl[j][3] !== 0) {
                        fl[j][2] = fl[j][3]
                        fl[j][3] = 0
                        count = count + 1
                    }
                }


                if (mover(fl[j][0], fl[j][1])) {
                    fl[j][0] += fl[j][1]
                    fl[j][1] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[j][0])
                }
                if (mover(fl[j][1], fl[j][2])) {
                    fl[j][1] += fl[j][2]
                    fl[j][2] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[j][1])
                }

                if (mover(fl[j][2], fl[j][3])) {
                    fl[j][2] += fl[j][3]
                    fl[j][3] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[j][2])
                }

                for (let i = 0; i < 2; i++) {
                    if (fl[j][0] === 0 && fl[j][1] !== 0) {
                        fl[j][0] = fl[j][1]
                        fl[j][1] = 0
                        count = count + 1
                    }
                    if (fl[j][1] === 0 && fl[j][2] !== 0) {
                        fl[j][1] = fl[j][2]
                        fl[j][2] = 0
                        count = count + 1
                    }
                    if (fl[j][2] === 0 && fl[j][3] !== 0) {
                        fl[j][2] = fl[j][3]
                        fl[j][3] = 0
                        count = count + 1
                    }
                }





            }
            if (count > 0) {
                RandomFill(fl)
                possibleMoves.fill(true)
            }
            if (count ===0){
                possibleMoves[2] =false
            }
            count = 0

        }

        if (event.key === 'ArrowRight') {
            // console.log(event.key)

            let count = 0


            for (let j = 0; j < 4; j++) {

                for (let i = 0; i < 2; i++) {
                    if (fl[j][3] === 0 && fl[j][2] !== 0) {
                        fl[j][3] = fl[j][2]
                        fl[j][2] = 0
                        count = count + 1
                    }
                    if (fl[j][2] === 0 && fl[j][1] !== 0) {
                        fl[j][2] = fl[j][1]
                        fl[j][1] = 0
                        count = count + 1
                    }
                    if (fl[j][1] === 0 && fl[j][0] !== 0) {
                        fl[j][1] = fl[j][0]
                        fl[j][0] = 0
                        count = count + 1
                    }

                }


                if (mover(fl[j][3], fl[j][2])) {
                    fl[j][3] += fl[j][2]
                    fl[j][2] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[j][3])
                }
                if (mover(fl[j][2], fl[j][1])) {
                    fl[j][2] += fl[j][1]
                    fl[j][1] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[j][2])
                }

                if (mover(fl[j][1], fl[j][0])) {
                    fl[j][1] += fl[j][0]
                    fl[j][0] = 0
                    count = count + 1
                    context.setScore(prevState => prevState+fl[j][1])
                }


                for (let i = 0; i < 2; i++) {
                    if (fl[j][3] === 0 && fl[j][2] !== 0) {
                        fl[j][3] = fl[j][2]
                        fl[j][2] = 0
                        count = count + 1
                    }
                    if (fl[j][2] === 0 && fl[j][1] !== 0) {
                        fl[j][2] = fl[j][1]
                        fl[j][1] = 0
                        count = count + 1
                    }
                    if (fl[j][1] === 0 && fl[j][0] !== 0) {
                        fl[j][1] = fl[j][0]
                        fl[j][0] = 0
                        count = count + 1
                    }
                }

                //      console.log(count)
                //filler




            }
            if (count > 0) {
                RandomFill(fl)
             //   console.log(fl)
                possibleMoves.fill(true)
            }
            if (count ===0){
                possibleMoves[3] =false
            }
            count = 0

        }

        //console.log(possibleMoves)
if (possibleMoves.every(elem => !elem)){
    context.setGameOver(true)
    possibleMoves.fill(true)
    context.setGameField(context.initialField)

}

        context.setGameField(fl)



    }



    useEffect(() => {




            setTimeout( ()=> {
                window.addEventListener('keydown', (e) => {
                    handleKeyDown(e)

                })

                setTimeout(() => {
                    myref.current.addEventListener('touchstart', handleTouchStart, false);
                    myref.current.addEventListener('touchmove', handleTouchMove, false);
                    myref.current.focus()
                }, 0)

            },0)

        // st(prevState => prevState+1)

        }
        , [])


    return (<div
    >

        <h1>game</h1>
        <Score/>

        <div ref={myref}>
        <Field  />
    </div>
<GameOver/>
 <GitHub/>

    </div>)
}