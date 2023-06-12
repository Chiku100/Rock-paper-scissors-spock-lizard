import { useContext, useEffect, useState } from 'react'
import { MyContext } from './MyContext'

export default function Playing() {
    const { playing, state, setPlaying, userChoice, setComputerChoice, cls, computerChoice, status } = useContext(MyContext)
    return (<>
        <section className='playing vizlg'>
            <div>
                <h2>You picked</h2>
                <div className={`${userChoice}p playingboxes `}></div>
            </div>
            <div>
                {state && <h2 className='result'>{status}</h2>}
                {state && <button onClick={() => setPlaying(false)}>play again</button>}
            </div>
            <div>
                <h2>The house {state ? `picked` : "picking..."}</h2>
                {state ? <div className={`${computerChoice}p playingboxes`}></div> : <div className={`${cls}p playingboxes `}></div>}
            </div>

        </section>
        <div className='vizsm'>
            <div className='grid'>
                <div className='radial'>
                    <h2>You picked</h2>
                    <div className={`${userChoice}p playingboxes `}></div>
                </div>
                <div>
                    <h2>The house {state ? `picked` : "picking..."}</h2>
                    {state ? <div className={`${computerChoice}p playingboxes`}></div> : <div className={`${cls}p playingboxes `}></div>}
                </div>
            </div>
            <div>
                <h2 className='result'>{status}</h2>
                <button onClick={() => setPlaying(false)}>play again</button>
            </div>
        </div>
    </>
    )
}
