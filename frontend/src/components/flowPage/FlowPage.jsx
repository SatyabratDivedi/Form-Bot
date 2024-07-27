import { useEffect, useState } from "react";
import { MdOutlineTextsms } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { FiVideo } from "react-icons/fi";
import { MdGif } from "react-icons/md";
import { PiTextTBold } from "react-icons/pi";
import { MdOutlineNumbers } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import flag from "./../../assets/flag.png";
import style from "./flowPage.module.css";
import { useDispatch } from "react-redux";
import { setFlow } from "../../redux/flowSlice";

const FlowPage = () => {
  const dispatch = useDispatch();
  const [flowArr, setFlowArr] = useState([
    { type: "Text", category: "Bubble" },
    { type: "Number", category: "Input" },
    { type: "Video", category: "Bubble" },
    { type: "Image", category: "Bubble" },
    { type: "Number", category: "Input" },
    { type: "Text", category: "Bubble" },
  ]);
  const flowClkHandler = (type, category) => {
    setFlowArr([...flowArr, { type, category }]);
  };
  const deleteFlowHandler = (i) => {
    setFlowArr(flowArr.filter((_, index) => index !== i));
  };
  const flowInputHandler = () => {};

  useEffect(() => {
    dispatch(setFlow(flowArr));
  }, [flowArr]);

  let occurrenceCounter = {};
  function countWithSequence(type, category) {
    const key = `${type}-${category}`;
    if (!occurrenceCounter[key]) {
      occurrenceCounter[key] = 1;
    } else {
      occurrenceCounter[key] += 1;
    }
    return occurrenceCounter[key];
  }

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.leftChooseContainer}>
          <div className={style.bubblesBox}>
            <h3>Bubbles</h3>
            <div className={style.box}>
              <div onClick={() => flowClkHandler("Text", "Bubble")}>
                <MdOutlineTextsms className={style.icon1} /> Text
              </div>
              <div onClick={() => flowClkHandler("Image", "Bubble")}>
                <CiImageOn className={style.icon1} /> Image
              </div>
              <div onClick={() => flowClkHandler("Video", "Bubble")}>
                <FiVideo className={style.icon1} /> Video
              </div>
              <div onClick={() => flowClkHandler("GIF", "Bubble")}>
                <MdGif className={style.icon1} /> GIF
              </div>
            </div>
          </div>
          <div className={style.bubblesBox} style={{ paddingTop: "10px" }}>
            <h3>Inputs</h3>
            <div className={style.box}>
              <div onClick={() => flowClkHandler("Text", "Input")}>
                <PiTextTBold className={style.icon2} /> Text
              </div>
              <div onClick={() => flowClkHandler("Number", "Input")}>
                <MdOutlineNumbers className={style.icon2} /> Number
              </div>
              <div onClick={() => flowClkHandler("Email", "Input")}>
                <MdAlternateEmail className={style.icon2} /> Email
              </div>
              <div onClick={() => flowClkHandler("Phone", "Input")}>
                <IoCallOutline className={style.icon2} /> Phone
              </div>
              <div onClick={() => flowClkHandler("Date", "Input")}>
                <CiCalendarDate className={style.icon2} /> Date
              </div>
              <div onClick={() => flowClkHandler("Rating", "Input")}>
                <FaRegStar className={style.icon2} /> Rating
              </div>
              <div onClick={() => flowClkHandler("Button", "Input")}>
                <IoMdCheckboxOutline className={style.icon2} /> Button
              </div>
            </div>
          </div>
        </div>
        {/* right Container */}
        <div className={style.rightContainer}>
          <div className={style.startTxt}>
            <img src={flag} alt='' /> Start
          </div>
          {flowArr.map((item, i) => (
            <div style={{ transform: item.category == "Input" && "translateX(130px)" }} key={i} className={style.flowBox}>
              {item.type} {countWithSequence(item.type, item.category)}
              <div onClick={() => deleteFlowHandler(i)} className={style.deleteBtn}>
                <RiDeleteBin6Line />
              </div>
              {item.category !== "Input" && <input onChange={flowInputHandler} placeholder={item.type == "Text" ? "Enter text" : "Click to add link"} type='text' name='' id='' />}
              {item.category == "Input" && <div className={style.userTxt}>Hint : User will input a text on his form</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FlowPage;
