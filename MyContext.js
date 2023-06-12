import React, { createContext, useContext, useState, useEffect } from 'react'
export const MyContext = createContext()
export default function Provider({ children }) {
    const [closeRules, setCloseRules] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [userChoice, setUserChoice] = useState("")
    const [computerChoice, setComputerChoice] = useState("")
    const [status, setStatus] = useState("")
    const [state, setState] = useState("false")
    const [score, setScore] = useState(parseInt(localStorage.getItem("scorerock")) || 0)
    useEffect(() => {
        localStorage.setItem("scorerock", score)
    }, [score])
    const dep = playing ? true : false
    const beats = {
        rock: ["scissor", "lizard"],
        paper: ["rock", "spock"],
        scissor: ["paper", "lizard"],
        spock: ["rock", "scissor"],
        lizard: ["paper", "spock"]
    };

    function checkWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            setStatus("It's a tie!");
        }
        else if (beats[playerChoice].includes(computerChoice)) {
            setStatus("Player wins!");
            setScore(prev => prev + 1);
        }
        else {
            setStatus("Computer wins!");
            setScore(prev => prev - 1);
        }
    }
    function computerchoice() {
        let langurs = ["rock", "paper", "scissor", "lizard", "spock"]
        let prevv = null;
        function randomNoRepeat() {
            let num = Math.floor(Math.random() * 5);
            while (num === prevv) {
                num = Math.floor(Math.random() * 5);
            }
            prevv = num;
            return num;
        }
        setComputerChoice(langurs[randomNoRepeat()])
    }
    // localStorage.removeItem("scorerock")
    useEffect(() => {
        computerchoice()
    }, [])
    useEffect(() => {
        if (playing) {
            setTimeout(() => {
                checkWinner(userChoice, computerChoice)
            }, 2000);
        }
    }
        , [playing])
    const tryna = ["rock", "paper", "scissor", "lizard", "spock"]
    const [cls, setClass] = useState("")
    useEffect(() => {
        const inter = setInterval(() => {
            const ranm = Math.floor(Math.random() * 5)
            setClass(tryna[ranm])
            setState(false)

        }, 100);
        setTimeout(() => {
            clearInterval(inter)
            setState(true)
        }, 2000);

    }, [playing])
    return (
        <MyContext.Provider value={{ state, playing, cls, score, setScore, status, setStatus, userChoice, setUserChoice, computerChoice, setComputerChoice, closeRules, setCloseRules, playing, setPlaying }}>
            {children}
        </MyContext.Provider>
    )

}
