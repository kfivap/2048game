import React, {useEffect, useState} from 'react'

export const GameContext = React.createContext()

function Rnd() {
    if(Math.random()<0.25){
        return 2
    }
    else {return 0}
}


export const GameProvider = ({children}) => {

    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)


    const initialField = [
        [Rnd(),Rnd(),Rnd(),Rnd()],
        [Rnd(),Rnd(),Rnd(),Rnd()],
        [Rnd(),Rnd(),Rnd(),Rnd()],
        [Rnd(),Rnd(),Rnd(),Rnd()]  ]

  //   const initialField = [
  //       [4,4,4,4],
  //       [2048,512,1024,512],
  //       [256,1024,512,256],
  //       [2048,512,1024,512],
  //
  // ]

    const [gameField, setGameField] = useState(
        initialField
    )

    useEffect(()=>{
        if(gameOver){
            let locSt = parseInt(localStorage.getItem('2048maxScore'))
            if(!locSt){
                localStorage.setItem('2048maxScore', score)
            }
        if(locSt<score){
            localStorage.setItem('2048maxScore', score)
        }

// console.log(locSt)
           // localStorage.setItem('maxScore', score)
        }
    }, [gameOver])




    return(        <GameContext.Provider value={{

        gameField,setGameField,
        score, setScore,
        gameOver, setGameOver,
        initialField


    }}>
        {children}
    </GameContext.Provider>)
}