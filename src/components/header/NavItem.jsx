import { Link } from "react-router-dom";
import RoundedImg from "../RoundedImg";

/* eslint-disable react/prop-types */
export default function NavItem({to, img}) {
  return (
    <Link to={to} className="group hover:scale-110 transition-all">
      <div className="flex flex-col justify-center items-center gap-1">
        {/* <div className="w-16 h-16">
        <img src="https://picsum.photos/200" alt="placeholder" className="object-cover"/>
      </div> */}
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
