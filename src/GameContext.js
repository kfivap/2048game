import React, {useEffect, useState} from 'react'

export const GameContext = React.createContext()

function Rnd() {
    if(Math.random()<0.25){
        return 2
    }
    else {return 0}
}


export const GameProvider = ({children}) => {

    const [score, setScore] = useState(parseInt(localStorage.getItem('2048score')))
    const [gameOver, setGameOver] = useState(true)


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



    useEffect(()=>{
        if(gameOver){
            let locSt = parseInt(localStorage.getItem('2048maxScore'))
             localStorage.setItem(('grid'), initialField)
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



if (!localStorage.getItem(('grid'))){
    localStorage.setItem(('grid'), initialField)
}
    const [gameField, setGameField] = useState(
        localStorageParser()
    )
    function localStorageParser(){
        let grid = localStorage.getItem('grid')
        grid = grid.split(',')
        grid=grid.map(element => parseInt(element))

        return [grid.slice(0,4), grid.slice(4,8), grid.slice(8,12), grid.slice(12,16)]

    }

    const [localField, setLocalField] = useState(localStorageParser())


    useEffect(()=>{


        setTimeout(()=>{
            setLocalField([localStorageParser()]
            )
            localStorage.setItem('grid', gameField)
        }, 0)



    }, [gameField])

    return(        <GameContext.Provider value={{

        gameField,setGameField,
        score, setScore,
        gameOver, setGameOver,
        initialField,
        localField, setLocalField


    }}>
        {children}
    </GameContext.Provider>)
}