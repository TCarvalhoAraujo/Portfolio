import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import InfoCard from "./InfoCard";
import ProfileCard from "./ProfileCard";
import IceBreakerCard from "./IceBreakerCard";
import ProjectCard from "./ProjectCard";
import profiles from "../content/profile";
import iceBreaker from "../content/ice-breakers";
import info from "../content/info";
import projects from "../content/projects";

function Portfolio() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            {profiles.map((profile) => (
              <ProfileCard key={profile.key} {...profile} />
            ))}
          </div>
          <div className="col-md-4 mb-4">
            {info.map((i) => (
              <InfoCard key={i.key} {...i} />
            ))}
            {iceBreaker.map((i) => (
              <IceBreakerCard key={i.key} {...i} />
            ))}
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div key={project.key} className="col-md-4 mb-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
