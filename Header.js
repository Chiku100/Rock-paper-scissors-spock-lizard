import { useContext } from 'react'
import { MyContext } from './MyContext'
const Header = () => {
    const {score}=useContext(MyContext)
    return (
        <section className='heading'>
            <h1>ROCK <br />
                PAPER <br />
                SCISSORS <br />
                LIZARD <br />
                SPOCK</h1>
            <div>
                <p>score</p>
                <h2>{score}</h2>
            </div>
        </section>
    )
}
export default Header