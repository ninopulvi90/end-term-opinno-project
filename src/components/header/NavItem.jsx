import { Link } from "react-router-dom";
import RoundedImg from "../RoundedImg";

/* eslint-disable react/prop-types */
export default function NavItem({to, img, testo}) {
  return (
    <Link to={to} className="group hover:scale-110 transition-all">
      <div className="flex flex-col justify-center items-center gap-1">
        <RoundedImg
          size={9}
          url={img}
          alt="placeholder"
        />
        <p className="font-sans text-sm text-white font-bold group-hover:text-white">{testo}</p>
      </div>
    </Link>
  );
}
