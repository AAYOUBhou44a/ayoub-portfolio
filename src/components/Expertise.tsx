import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faNodeJs,
    faDocker,
    faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
    "JavaScript",
    "Node.js",
    "Express.js",
    "Vue.js",
    "PHP",
    "Laravel",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
];

const labelsSecond = [
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "MVC",
    "Postman",
    "Docker",
    "Git",
    "GitHub",
];

const labelsThird = [
    "Linux",
    "GitHub",
    "UML",
    "Agile Scrum",
    "Trello",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>

                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" />

                        <h3>Full Stack Web Development</h3>

                        <p>
                            I build modern web applications with frontend and
                            backend technologies, focusing on clean code,
                            REST APIs and practical solutions.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>

                            {labelsFirst.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />

                        <h3>Backend, APIs & Databases</h3>

                        <p>
                            I develop backend applications, REST APIs and
                            database-driven systems using Node.js, Laravel,
                            PostgreSQL and MySQL.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>

                            {labelsSecond.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faGitAlt} size="3x" />

                        <h3>Tools & Development Workflow</h3>

                        <p>
                            I use modern development tools and collaborative
                            workflows to manage projects, version code and
                            work efficiently in a development environment.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>

                            {labelsThird.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;