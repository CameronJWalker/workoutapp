import Link from 'next/link'
import Nav from '../styles/Nav.module.css'
import { useState, useRef } from "react"

export default function Navbar() {
    const [display, setDisplay] = useState(true)

    const myNavRef = useRef(null);

    const handleClick = () => {
        myNavRef.current.style.display = display ? "flex" : "none";
        setDisplay(!display)
    }
    return (
        <div className={Nav.container}>
            <div className={Nav.title}>
                <Link href="/" className={Nav.homebutton}><h3>MyFitnessVault</h3></Link>
            </div>
            <div className={Nav.toggleButton} onClick={handleClick}>
                    <span className={Nav.bar}></span>
                    <span className={Nav.bar}></span>
                    <span className={Nav.bar}></span>
            </div>
            <div className={Nav.links} ref={myNavRef}>
                <ul>
                    <li><Link href="/newworkout" className={Nav.homebutton}><p>Workout</p></Link></li>
                    <li><Link href="/nutrition" className={Nav.homebutton}><p>Nutrition</p></Link></li>
                    <li><Link href="/prlog" className={Nav.homebutton}><p>PR</p></Link></li>         
                    <li><Link href="/userpage" className={Nav.homebutton}><img src="../user.png" className={Nav.icon}/></Link></li>
                </ul>
            </div>
        </div>
    )
}