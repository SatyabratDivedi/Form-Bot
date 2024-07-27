import { useState } from "react";
import style from "./themePage.module.css";
import theme1 from "./../../assets/theme1.png";
import theme2 from "./../../assets/theme2.png";
import theme3 from "./../../assets/theme3.png";
import circleImg from "./../../assets/me-square.png.png";

const ThemePage = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className={style.themeMainContainer}>
        <div className={style.leftContainer}>
          <div>
            <h3>Customize the theme</h3>
          </div>
          <div className={style.boxContainer}>
            <div onClick={() => setTheme("light")} style={{ border: theme == "light" ? "2px solid #1a5fff" : "" }} className={style.box}>
              <img src={theme1} alt='' />
              <div>Light</div>
            </div>
            <div onClick={() => setTheme("dark")} style={{ border: theme == "dark" ? "2px solid #1a5fff" : "" }} className={style.box}>
              <img src={theme2} alt='' />
              <div>Dark</div>
            </div>
            <div onClick={() => setTheme("blue")} style={{ border: theme == "blue" ? "2px solid #1a5fff" : "" }} className={style.box}>
              <img src={theme3} alt='' />
              <div>Tail Blue</div>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className={style.chatContainer} style={{ background: (theme == "dark" && "#171923") || (theme == "light" && "white") || (theme == "blue" && "#508c9b") }}>
          <div style={{ display: "flex" }}>
            <img src={circleImg} alt='' />
            <h2 className={style.welcomeSms}>Hello</h2>
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <div className={style.chatBubble}>Hi!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemePage;
