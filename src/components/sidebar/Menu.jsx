import { useState, useEffect } from "react";
import LoadingCircle from "../loading-circle/LoadingCircle";
import { getTodos } from "../../network/Gateway";

const MenuItem = ({
  missionId,
  body,
  onClick,
  activeClick,
  setActiveClick,
}) => {
  const handleClick = () => {
    if (activeClick === missionId) {
      setActiveClick(null);
    } else {
      setActiveClick(missionId);
    }
    onClick(missionId);
  };

  const isActive = activeClick === missionId;

  return (
    <li
      key={missionId}
      className={`py-2 rounded-lg cursor-pointer flex flex-col gap-2  ${
        isActive ? "dark:text-white" : ""
      } `}
      onClick={handleClick}
    >
      <p className="text-sm font-semibold dark:text-white ">
        {"Missione " + missionId}
        <img
          className="h-4 w-4 inline-block ml-2 mb-2"
          src={`src/assets/icons8-lancia-rocket-16.png`}
          alt="lancia-rocket-image"
        />
      </p>

      {isActive && <p className="text-sm">{body}</p>}
    </li>
  );
};

const Menu = ({ title, missions, onClick }) => {
  const [activeClick, setActiveClick] = useState(null);
  const [apiTitles, setApiTitles] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      setTimeout(() => {
        setApiTitles(res.data.map((item) => item.title));
      }, 1000);
    });
  }, []);

  return (
    <div className=" ">
      <h3 className="text-sm font-bold mb-2 dark:text-white ">{title}</h3>

      <ul className="space-y-2 overflow-y-auto">
        {apiTitles.length == 0 ? (
          <LoadingCircle />
        ) : (
          missions.map((mission, index) => (
            <MenuItem
              key={mission.missionId}
              missionId={mission.missionId}
              body={apiTitles[index]}
              onClick={onClick}
              activeClick={activeClick}
              setActiveClick={setActiveClick}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Menu;
