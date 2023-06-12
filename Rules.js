import React,{useContext} from 'react'
import closeicon from "./images/icon-close.svg"
import rule from "./images/image-rules-bonus.svg"
import { MyContext } from './MyContext'
export default function Rules() {
    const {setCloseRules}=useContext(MyContext)
    return (
        <section className='rules'>
            <div className='box'>
                <div>
                    <h1>rules</h1>
                    <button onClick={()=>setCloseRules(false)}>
                        <img src={closeicon} alt="close" />
                    </button>
                </div>
                <img src={rule} alt="rules" />
                <button className='reset'>reset score</button>
            </div>
        </section>
    )
}
