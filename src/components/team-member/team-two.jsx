import Link from "next/link";
import React from "react";

const TeamTwo = ({ instructor, image_location_path = "02" }) => {
  return (
    <div className="edu-team-grid team-style-2">
      <div className="inner">
        <div className="thumbnail-wrap">
          <div className="thumbnail">
            <Link href={`/`}>
              <a>
                <img
                  style={{
                    width: "400px",
                    height: "400px",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                  src={`${instructor.img}`}
                  alt="team images"
                />
              </a>
            </Link>
          </div>
          <ul className="team-share-info">
            {instructor.social_links.map((social, i) => (
              <li key={i}>
                <a
                  href={social.link}
                  target={social.target ? social.target : ""}
                >
                  <i className={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <h5 className="title">
            <Link href={`/`}>
              <a>{instructor.name}</a>
            </Link>
          </h5>
          <span className="designation">{instructor.title}</span>
          <p>{instructor.sm_text}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamTwo;
