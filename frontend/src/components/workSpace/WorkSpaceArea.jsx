import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./workSpaceAera.module.css";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import FlowPage from "./../flowPage/FlowPage.jsx";
import ThemePage from "../themePage/ThemePage";
import ResponsePage from "../responsePage/ResponsePage";
import { useSelector } from "react-redux";

const WorkSpaceArea = () => {
  const data = useSelector((state) => state.flow?.data);
  const location = useLocation();
  const navigate = useNavigate();
  const param = location.pathname.split("/")[2];
  const mainRoute = location.pathname.split("/")[3];

  return (
    <>
      <div className={style.workSpaceMainContainer}>
        <header>
          <div className={style.left}>
            <input style={{ visibility: mainRoute !== "flow" ? "hidden" : "" }} type='text' placeholder='Enter Form Name' name='' id='' />
          </div>
          <div className={style.center}>
            <NavLink to={`/folder/${param}/flow`} className={({ isActive }) => `${isActive && style.flowText} ${style.navTxt}`}>
              Flow
            </NavLink>
            <NavLink to={`/folder/${param}/theme`} className={({ isActive }) => `${isActive && style.flowText} ${style.navTxt}`}>
              Theme
            </NavLink>
            <NavLink to={`/folder/${param}/response`} className={({ isActive }) => `${isActive && style.flowText} ${style.navTxt}`}>
              Response
            </NavLink>
          </div>
          <div className={style.right}>
            <div  className={style.shareBtn} style={{ background: data.length >= 1 && "#1a5fff", cursor: data.length >= 1 && "pointer" }}>
              Share
            </div>
            <div className={style.saveBtn}>Save</div>
            <div onClick={() => navigate("/folder/main")} style={{ color: "#F55050", transform: "translateY(3px)", fontSize: "1.4rem", cursor: "pointer" }}>
              <RxCross2 />
            </div>
          </div>
        </header>
        {/* Container */}
        {mainRoute === "flow" && <FlowPage />}
        {mainRoute === "theme" && <ThemePage />}
        {mainRoute === "response" && <ResponsePage />}
        <Outlet />
      </div>
    </>
  );
};

export default WorkSpaceArea;
