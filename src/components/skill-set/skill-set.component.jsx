import React from "react";

import {
    SiPython,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodeDotJs,
    SiReact,
    SiGithub
} from "react-icons/si";

import "./skill-set.styles.scss"

const SkillSet = () => {
    return (
        <div className="skill-set text-center">
            <SiPython />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiNodeDotJs />
            <SiReact />
            <SiGithub />
        </div>
    );
};

export default SkillSet;
