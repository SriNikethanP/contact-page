import React from 'react'
import "../navbar/navbar.css"

export default function Navbar() {
    return <nav>
        <div className="logo">
            <img src="/images/Frame.png" alt="logo" />
        </div>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
}