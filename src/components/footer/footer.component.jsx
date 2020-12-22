import React from 'react'

import {FaHeartbeat} from "react-icons/fa"
import {BsBootstrap} from "react-icons/bs"
import {SiReact} from 'react-icons/si'

import "./footer.styles.scss"

const Footer = () => {
    return (
        <div className="footer bg-dark text-center">
            Made with <FaHeartbeat /> on <BsBootstrap /> + <SiReact />
        </div>
    )
}

export default Footer
