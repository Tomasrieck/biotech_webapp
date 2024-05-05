import React from "react";
import "./css/Home.css";
import resume from "../assets/resume.pdf";
import application from "../assets/application.pdf";
import profile_img from "../assets/profile.JPG";
import bannerImg from "../assets/biotech_banner.png";
import { Link } from "react-router-dom";

function Home() {
  const link = {
    name: "AI",
    color: "rgb(255, 122, 1)",
    borderColor: "rgb(206, 100, 1)",
    link: "code",
  };
  const pdfs = [
    {
      name: "Resume",
      color: "rgb(255, 122, 1)",
      borderColor: "rgb(206, 100, 1)",
      link: resume,
    },
    {
      name: "Cover Letter",
      color: "rgb(255, 122, 1)",
      borderColor: "rgb(206, 100, 1)",
      link: application,
    },
  ];

  return (
    <>
      {window.innerWidth < 800 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <h2
            style={{
              width: "90vw",
              textAlign: "center",
              lineHeight: "2.5rem",
              fontFamily: "Roboto",
            }}
          >
            This is awkward. The website is only made for computer screens, not
            smartphones. Sorry for the inconvenience 🫤
          </h2>
        </div>
      ) : (
        <div className="home">
          <img alt="banner" src={bannerImg} className="banner"></img>
          <div className="section">
            <div className="header">
              <img src={profile_img} alt="profile" />
              <div className="text">
                <h1>Welcome 👋</h1>
                <h2>
                  To show my interest in a job opportunity at Reshape Biotech, I
                  have built an AI that can recognize Malaria in blood cells!
                  <br />
                  Click the button below to learn more. You can also view my
                  cover letter and resume.
                </h2>
              </div>
            </div>
            <div className="btn_grp">
              <Link
                to={link.link}
                key={link.name}
                className="btn"
                style={{
                  backgroundColor: link.color,
                  borderColor: link.borderColor,
                }}
              >
                {link.name}
              </Link>
              {pdfs.map((pdf) => {
                return (
                  <a
                    href={pdf.link}
                    key={pdf.name}
                    className="btn"
                    style={{
                      backgroundColor: pdf.color,
                      borderColor: pdf.borderColor,
                    }}
                  >
                    {pdf.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
