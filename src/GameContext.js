import React, {useEffect, useState} from 'react'

export const GameContext = React.createContext()

function Rnd() {
    if(Math.random()<0.25){
        return 2
    }
    else {return 0}
}


export const GameProvider = ({children}) => {


    const [gameField, setGameField] = useState(
        [
            [Rnd(),Rnd(),Rnd(),Rnd()],
            [Rnd(),Rnd(),Rnd(),Rnd()],
            [Rnd(),Rnd(),Rnd(),Rnd()],
            [Rnd(),Rnd(),Rnd(),Rnd()]  ]
    )





    return(        <GameContext.Provider value={{

        gameField,setGameField,

    }}>
        {children}
    </GameContext.Provider>)
}