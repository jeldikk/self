import React from "react";

import {Container} from 'react-bootstrap'

import {
    SiPython,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodeDotJs,
    SiReact,
    SiGithub,
    SiFirebase,
    SiBootstrap,
    SiMarkdown,
    SiRedux,
    SiElectron
} from "react-icons/si";

import "./skill-set.styles.scss"

const SkillSet = () => {
    return (
        <Container fluid className="skill-set">
            <SiPython />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiNodeDotJs />
            <SiBootstrap />
            <SiMarkdown />
            <SiReact />
            <SiRedux />
            <SiElectron />
            <SiGithub />
            <SiFirebase />
        </Container>
    );
};

export default SkillSet;
