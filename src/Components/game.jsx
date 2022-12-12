import React, { useRef, useState } from 'react'
import "./game.css"
let arr = new Array(10)
export default function Game() {
    const [turn, setturn] = useState('X')
    const [cvalue, setcvalue] = useState({ cell1: { c: "", key: 1 }, cell2: { c: "", key: 2 }, cell3: { c: "", key: 3 }, cell4: { c: "", key: 4 }, cell5: { c: "", key: 5 }, cell6: { c: "", key: 6 }, cell7: { c: "", key: 7 }, cell8: { c: "", key: 8 }, cell9: { c: "", key: 9 } })
    const ansref = useRef()

    const handleclick = (pos, i) => {
        turn === 'X' ? setturn('O') : setturn('X')

        switch (pos) {
            case 'cell1':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell1: { c: turn } })
            case 'cell2':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell2: { c: turn } })
            case 'cell3':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell3: { c: turn } })
            case 'cell4':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell4: { c: turn } })
            case 'cell5':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell5: { c: turn } })
            case 'cell6':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell6: { c: turn } })
            case 'cell7':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell7: { c: turn } })
            case 'cell8':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell8: { c: turn } })
            case 'cell9':
                arr[i] = turn
                return setcvalue({ ...cvalue, cell9: { c: turn } })
            default:
                return
        }

    }
    if ((arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8] && arr[9])) {
        ansref.current.innerHTML = "DRAW"
    }
    if ((arr[1] === 'X' && arr[2] === 'X' && arr[3] === 'X') || (arr[4] === 'X' && arr[5] === 'X' && arr[6] === 'X') || (arr[7] === 'X' && arr[8] === 'X' && arr[9] === 'X') || (arr[1] === 'X' && arr[4] === 'X' && arr[7] === 'X') || (arr[2] === 'X' && arr[5] === 'X' && arr[8] === 'X') || (arr[3] === 'X' && arr[6] === 'X' && arr[9] === 'X') || (arr[1] === 'X' && arr[5] === 'X' && arr[9] === 'X') || (arr[3] === 'X' && arr[5] === 'X' && arr[7] === 'X')) {
        ansref.current.innerHTML = 'X wins'
    }
    if ((arr[1] === 'O' && arr[2] === 'O' && arr[3] === 'O') || (arr[4] === 'O' && arr[5] === 'O' && arr[6] === 'O') || (arr[7] === 'O' && arr[8] === 'O' && arr[9] === 'O') || (arr[1] === 'O' && arr[4] === 'O' && arr[7] === 'O') || (arr[2] === 'O' && arr[5] === 'O' && arr[8] === 'O') || (arr[3] === 'O' && arr[6] === 'O' && arr[9] === 'O') || (arr[1] === 'O' && arr[5] === 'O' && arr[9] === 'O') || (arr[3] === 'O' && arr[5] === 'O' && arr[7] === 'O')) {
        ansref.current.innerHTML = 'O wins'
    }



    const reset = () => {

        arr = new Array(10)
        ansref.current.innerHTML = ''
        setturn('X')
        setcvalue({ ...cvalue, cell1: { c: "" }, cell2: { c: "" }, cell3: { c: "" }, cell4: { c: "" }, cell5: { c: "" }, cell6: { c: "" }, cell7: { c: "" }, cell8: { c: "" }, cell9: { c: "" } })
    }

    return (
        <>
            <div id='wrapper'>
                <h1 id='tic-head'>TIC-TAC-TOE</h1>
                <div id='main-container'>
                    <div className='row'>
                        <div className='cell' id='c1' onClick={() => {

                            handleclick("cell1", 1)
                        }}>{cvalue.cell1.c}</div>
                        <div className='cell' id='c2' onClick={() => { handleclick("cell2", 2) }}>{cvalue.cell2.c}</div>
                        <div className='cell' id='c3' onClick={() => { handleclick("cell3", 3) }}>{cvalue.cell3.c}</div>

                    </div>
                    <div className='row'>
                        <div className='cell' id='c4' onClick={() => { handleclick("cell4", 4) }}>{cvalue.cell4.c}</div>
                        <div className='cell' id='c5' onClick={() => { handleclick("cell5", 5) }}>{cvalue.cell5.c}</div>
                        <div className='cell' id='c6' onClick={() => { handleclick("cell6", 6) }}>{cvalue.cell6.c}</div>
                    </div>
                    <div className='row'>
                        <div className='cell' id='c7' onClick={() => { handleclick("cell7", 7) }}>{cvalue.cell7.c}</div>
                        <div className='cell' id='c8' onClick={() => { handleclick("cell8", 8) }}>{cvalue.cell8.c}</div>
                        <div className='cell' id='c9' onClick={() => { handleclick("cell9", 9) }}>{cvalue.cell9.c}</div>
                    </div>
                </div>
                <div>
                    <button id='btn' onClick={reset}>RESET</button>
                </div>
                <div>
                    <p id='winner' ref={ansref}></p>
                </div>
            </div>


        </>

    )
}
