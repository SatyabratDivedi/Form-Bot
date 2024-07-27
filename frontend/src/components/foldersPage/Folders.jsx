import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./folders.module.css";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

const Folders = () => {
  const navigate = useNavigate();
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showFolderDelete, setShowFolderDelete] = useState({ display: false, index: "" });
  const [folderName, setFolderName] = useState("");
  const [foldersArr, setFoldersArr] = useState([]);
  const params = useParams();
  const folderInputHandler = () => {
    if (folderName === "") return;
    const alreadyExists = foldersArr.some((folder) => folder === folderName);
    if (alreadyExists) {
      alert("Folder name is already exists");
      return;
    }
    setFoldersArr([...foldersArr, folderName]);
    setFolderName("");
    setShowCreateFolder(false);
  };
  useEffect(() => {
    console.log(foldersArr);
  }, [foldersArr]);
  return (
    <>
      <div className={style.mainPage} onClick={() => showCreateFolder && setShowCreateFolder(!showCreateFolder)}>
        <header >
          <div onClick={} className={style.nameSpace}>
            Satyabrat <HiChevronDown />
          </div>
        </header>
        <div className={style.folderBoxContainer}>
          <div
            className={style.folderBox}
            onClick={() => {
              setShowCreateFolder(!showCreateFolder);
              setShowFolderDelete({ display: false });
            }}
          >
            <HiOutlineFolderPlus /> Create a folder
          </div>
          {foldersArr.map((folderName, i) => (
            <NavLink key={i} to={`/folder/${folderName}`} className={({ isActive }) => `${isActive && style.activeBackground} ${style.folderBox}`}>
              {folderName}
              <RiDeleteBin6Line
                style={{ color: "#F55050" }}
                onClick={() => {
                  setShowFolderDelete({ display: true, index: i });
                }}
              />
            </NavLink>
          ))}
        </div>
        <div className={style.boxContainer}>
          <div onClick={() => navigate(`/folder/${params.folderName}/flow`)} className={style.box}>
            <div style={{ fontSize: "4rem", paddingBottom: "16px" }}>+</div>
            <div style={{ fontSize: "19px", fontWeight: "400" }}>Create a typebot</div>
          </div>
        </div>
        {/* add folder popup */}
        {showCreateFolder && (
          <div onClick={(e) => e.stopPropagation()} className={style.addFolderPopup}>
            <h1>Create a folder</h1>
            <input onChange={(e) => setFolderName(e.target.value)} value={folderName} type='text' autoFocus placeholder='Enter folder name' />
            <div className={style.cancelCreateBtn}>
              <button onClick={folderInputHandler} style={{ color: "#4B83FF" }}>
                Done
              </button>
              <div className={style.stand}>|</div>
              <button
                onClick={() => {
                  setShowCreateFolder(false);
                  setFolderName("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {/* delete folder popup */}
        {showFolderDelete.display && (
          <div className={style.addFolderPopup}>
            <h1 style={{ textAlign: "center" }}>Are you sure you want to delete this folder ? {showFolderDelete.index}</h1>
            <div className={style.cancelCreateBtn}>
              <button
                style={{ color: "#4B83FF" }}
                onClick={() => {
                  setShowFolderDelete({ display: false });
                  foldersArr.splice(showFolderDelete.index, 1);
                }}
              >
                Confirm
              </button>
              <div className={style.stand}>|</div>
              <button
                onClick={() => {
                  setShowFolderDelete({ display: false });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Folders;
