import React from 'react'

import ImageRoller from "../../components/image-roller/image-roller.component"
import TitleCard from "../../components/title-card/title-card.component"

import "./homepage.styles.scss"

const Homepage = () => {
    return (
        <div className="homepage">
            <ImageRoller />
            <TitleCard />
            
        </div>
    )
}

export default Homepage
