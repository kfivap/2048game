import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from "../GameContext";
import './Field.css'

export const Field = ()=>{

const context = useContext(GameContext)


//WITH INDEX
    // function rowGenerator(num) {
    //     const rw = context.gameField[num].map((number, index) => {
    //       //  `cellValue${number}`
    //         return (
    //             <div className={`cell cellValue${number}`} key={`row${num}_${index}`}>{number}
    //             <br/>
    //                index[{num} {index}]
    //             </div>)
    //     })
    //     return rw
    // }


    function rowGenerator(num) {

            const rw = context.gameField[num].map((number, index) => {
                //  `cellValue${number}`
                return (
                    <div className={`cell cellValue${number}`} key={`row${num}_${index}`}>{number}

                    </div>)
            })
            return rw

    }

    // console.log(context.localField)
    // console.log(context.gameField)


    return(
        <>

<div className='containerGame'>
        <div className='mt-5 gameGrid'>
            <div>{rowGenerator(0)}</div>
            <div>{rowGenerator(1)}</div>
            <div>{rowGenerator(2)}</div>
            <div>{rowGenerator(3)}</div>
        </div>
</div>
            </>
    )
}