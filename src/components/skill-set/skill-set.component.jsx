import React from "react";

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
    SiMarkdown
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
            <SiBootstrap />
            <SiMarkdown />
            <SiReact />
            <SiGithub />
            <SiFirebase />
        </div>
    );
};

export default SkillSet;
