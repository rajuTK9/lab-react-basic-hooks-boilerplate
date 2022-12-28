import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { ToggleTheme } from "../App";

function UseContext() {
  const [isClicked, setIsClicked] = useState(false);
  const [like, setLike] = useState(0);
  const theme = useContext(ToggleTheme);

  const [initialRender, setIR] = useState(true);
  useEffect(() => {
    if (initialRender) {
      setIR(false);
    } else {
      alert("Content button clicked!");
      document.getElementById("para").classList.toggle("active");
    }
  }, [isClicked]);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  function content() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <div style={themeStyle}>
        <p id="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dicta
          incidunt quis reiciendis minus aperiam ipsum tenetur suscipit deleniti
          natus. Iure totam a dolorem est suscipit necessitatibus, pariatur rem
          ducimus quisquam harum enim non eos aut molestiae neque laborum fuga
          tempore quibusdam illum. Tenetur ducimus accusantium corporis quod
          iste modi similique veniam est eius, commodi quidem vel sequi, aliquam
          culpa quaerat nobis. Ipsum sit quo laudantium suscipit? Consequatur
          officiis culpa, voluptates minus nesciunt nisi suscipit. Vero repellat
          repellendus expedita culpa. Officia facere magnam voluptatibus eius
          maiores explicabo doloremque quae vitae.
        </p>
        <button onClick={content}>Content</button>
        <div className="like">{like}</div>
        <button
          onClick={() => {
            setLike((like) => like + 1);
          }}
        >
          Like
        </button>
      </div>
    </>
  );
}

export default UseContext;
