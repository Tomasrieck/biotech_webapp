import React, { useState } from "react";
import "./css/Code.css";
import code_img from "../assets/code.png";
import uninf1 from "../assets/uninf_img1.png";
import uninf2 from "../assets/uninf_img2.png";
import inf1 from "../assets/inf_img1.png";
import inf2 from "../assets/inf_img2.png";
import loader from "../assets/loader.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Code() {
  const bricks = [
    { id: 0, item: "(1) Infected with Malaria.", img: inf1 },
    { id: 1, item: "(0) Not infected with Malaria.", img: uninf1 },
    { id: 2, item: "(0) Not infected with Malaria.", img: uninf2 },
    { id: 3, item: "(1) Infected with Malaria.", img: inf2 },
  ];
  const [target, setTarget] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading("finished");
    }, 1250);
  }

  return (
    <div className="content">
      <img src={code_img} alt="code" />
      <div className="results">
        <h3>
          I have developed a Deep Learning model capable of recognizing
          Malaria-infected blood cells.
        </h3>
        <h3>
          The model takes an image of a blood cell as input and returns 1 if the
          blood cell is infected and 0 if the blood cell is not infected.
          <br />
          Using a Convolutional Neural Network, the model achieves an accuracy
          of 94.32% in predicting whether a blood cell is infected or not.
        </h3>
        <h3>
          Feel free to select one of the blood cell images below, run the code,
          and the model will predict whether the blood cell is infected or not.
        </h3>
        <div className="images">
          {bricks.slice(0, 2).map((brick) => {
            return (
              <img
                src={brick.img}
                alt={brick.item}
                onClick={() => {
                  setTarget([brick.id, brick.item]);
                  setLoading(false);
                }}
                style={{
                  borderStyle: target[0] === brick.id && "solid",
                  borderWidth: target[0] === brick.id && "5px",
                  borderColor: target[0] === brick.id && "lime",
                }}
              />
            );
          })}
        </div>
        <div className="images">
          {bricks.slice(2).map((brick) => {
            return (
              <img
                src={brick.img}
                alt={brick.item}
                onClick={() => {
                  setTarget([brick.id, brick.item]);
                  setLoading(false);
                }}
                style={{
                  borderStyle: target[0] === brick.id && "solid",
                  borderWidth: target[0] === brick.id && "5px",
                  borderColor: target[0] === brick.id && "lime",
                }}
              />
            );
          })}
        </div>
        <div className="process">
          <div
            onClick={
              target[1] !== ""
                ? handleClick
                : console.log("Choose a blood cell")
            }
            className="btn"
          >
            Run Code
          </div>
          <FaArrowRight size={30} color="gray" />
          <div className="guess">
            {loading === "finished" && target[1] !== "" ? (
              <h3>{target[1]}</h3>
            ) : (
              <>
                {loading === true ? (
                  <img style={{ height: "100%" }} src={loader} alt="loader" />
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </div>
        <div className="repo_grp">
          <div className="repo">
            <FaGithub size={30} />
            <a
              href="https://github.com/tomasrieck/biotech_AI"
              target="_blank"
              rel="noreferrer"
            >
              Check out the code for the AI here
            </a>
          </div>
          <div className="repo">
            <FaGithub size={30} />
            <a
              href="https://github.com/Tomasrieck/biotech_webapp"
              target="_blank"
              rel="noreferrer"
            >
              Check out the code for this website here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;
