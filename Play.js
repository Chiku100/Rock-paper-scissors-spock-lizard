import React, { useContext } from 'react'
import { MyContext } from './MyContext'
export default function Play() {
  const { setCloseRules, setPlaying, userChoice, setUserChoice } = useContext(MyContext)
  return (
    <section className='play'>
      <div className='rock' onClick={() => { setPlaying(true); setUserChoice("rock") }}></div>
      <div className='paper' onClick={() =>  { setPlaying(true); setUserChoice("paper") }}></div>
      <div className='scissor' onClick={() =>  { setPlaying(true); setUserChoice("scissor") }}></div>
      <div className='lizard' onClick={() =>  { setPlaying(true); setUserChoice("lizard") }}></div>
      <div className='spock' onClick={() =>  { setPlaying(true); setUserChoice("spock") }}></div>
      <button className='btnrules' onClick={() => setCloseRules(true)}>rules</button>
    </section>
  )
}
