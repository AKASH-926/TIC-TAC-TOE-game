import React from 'react'
import "./game.css"

export default function Game() {


    return (
        <>
            <div id='wrapper'>
                <h1 id='tic-head'>TIC-TAC-TOE</h1>
                <div id='main-container'>
                    <div className='row'>
                        <div className='cell' id='c1' onClick={() => {


                        }}>{ }</div>
                        <div className='cell' id='c2' onClick={() => { }}>{ }</div>
                        <div className='cell' id='c3' onClick={() => { }}>{ }</div>

                    </div>
                    <div className='row'>
                        <div className='cell' id='c4' onClick={() => { }}>{ }</div>
                        <div className='cell' id='c5' onClick={() => { }}>{ }</div>
                        <div className='cell' id='c6' onClick={() => { }}>{ }</div>
                    </div>
                    <div className='row'>
                        <div className='cell' id='c7' onClick={() => { }}>{ }</div>
                        <div className='cell' id='c8' onClick={() => { }}>{ }</div>
                        <div className='cell' id='c9' onClick={() => { }}>{ }</div>
                    </div>
                </div>
                <div>
                    <button id='btn' >RESET</button>
                </div>
                <div>
                    <p id='winner' ></p>
                </div>
            </div>


        </>

    )
}
