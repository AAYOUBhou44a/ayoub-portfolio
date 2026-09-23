import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import "../assets/styles/Project.scss";

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>

            <div className="projects-grid">

                {/* Easy Coloc */}
                <div className="project">
                    <a
                        href="https://github.com/AAYOUBhou44a/coloc-manager"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock02}
                            className="zoom"
                            alt="Easy Coloc project"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://github.com/AAYOUBhou44a/coloc-manager"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Easy Coloc</h2>
                    </a>

                    <p>
                        A web application for managing shared expenses in a house share,
                        automatically calculating and balancing debts between members.
                    </p>
                </div>


                {/* AutoFlow */}
                <div className="project">
                    <a
                        href="https://github.com/AAYOUBhou44a/AutoFlow"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock01}
                            className="zoom"
                            alt="AutoFlow project"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://github.com/AAYOUBhou44a/AutoFlow"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>AutoFlow</h2>
                    </a>

                    <p>
                        A centralized vehicle rental management platform that streamlines
                        the complete rental process through a Vue.js frontend and a REST API backend.
                    </p>
                </div>


                {/* HosBank */}
                <div className="project">
                    <a
                        href="https://github.com/fakhrddinelargou/HOS-BANK"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock04}
                            className="zoom"
                            alt="HosBank project"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://github.com/fakhrddinelargou/HOS-BANK"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>HosBank</h2>
                    </a>

                    <p>
                        A fictional educational banking web application built
                        as a team project. It includes authentication, sessions,
                        role-based access and REST APIs.
                    </p>
                </div>


                {/* MS Invest Med */}
                <div className="project">
                    <img
                        src={mock03}
                        className="zoom"
                        alt="MS Invest Med project"
                        width="100%"
                    />

                    <h2>MS Invest Med</h2>

                    <p>
                        A full stack web application developed during my internship
                        for managing machine rentals and related operations using
                        Laravel, Vue.js, PostgreSQL and Docker.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;