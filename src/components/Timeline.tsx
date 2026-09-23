import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>My Journey</h1>

        <VerticalTimeline>

          {/* MS INVEST MED */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="May 2026 - July 2026"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer Intern
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              MS INVEST MED
            </h4>

            <p>
              Developed a full stack web application for vehicle rental
              management using Laravel, Vue.js, PostgreSQL and Docker.
            </p>
          </VerticalTimelineElement>


          {/* YouCode */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2025 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Web Development Student
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              YouCode
            </h4>

            <p>
              Training in web development covering frontend, backend,
              databases, APIs, version control and software development
              practices through practical projects.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;