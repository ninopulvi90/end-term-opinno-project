import { Link } from "react-router-dom";
import RoundedImg from "../RoundedImg";

/* eslint-disable react/prop-types */
export default function NavItem({to, img}) {
  return (
    <Link to={to} className="group hover:scale-110 transition-all">
      <div className="flex flex-col justify-center items-center gap-1">
        <RoundedImg
          size={16}
          url={img}
          alt="placeholder"
        />
        <p className="font-sans text-slate-300 font-semibold group-hover:text-slate-50">Image</p>
      </div>
    </Link>
  );
}
