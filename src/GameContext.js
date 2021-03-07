import React, {useEffect, useState} from 'react'

export const GameContext = React.createContext()

function Rnd() {
    if(Math.random()<0.25){
        return 2
    }
    else {return 0}
}


export const GameProvider = ({children}) => {

    // const [gameField, setGameField] = useState(
    //     [
    //         [8],
    //         [2],
    //         [2],
    //         [4],
    //     ]
    //  )

    const [gameField, setGameField] = useState(
        [
            [Rnd(),Rnd(),Rnd(),Rnd()],
            [Rnd(),Rnd(),Rnd(),Rnd()],
            [Rnd(),Rnd(),Rnd(),Rnd()],
            [Rnd(),Rnd(),Rnd(),Rnd()]  ]
    )
    //
   //  const [gameField, setGameField] = useState(
   //      [
   //          [2,2,4,4],
   //          [2,4,4,0],
   //          [2,2,2,0],
   //          [8,2,2,2],
   // ]
   //  )


const [test, setTest] = useState(0)



    return(        <GameContext.Provider value={{

        gameField,setGameField,
        test, setTest
    }}>
        {children}
    </GameContext.Provider>)
}