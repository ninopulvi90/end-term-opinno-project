import "./Footer.css";

export default function Footer() {
  return (
    <div className="bg-gray-100 py-4   border-t-2  shadow-md w-64 flex ">
      <ul>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Cookie Policy</a>
        </li>

        <li>
          <a href="#">Sede Legale</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <p>@2023</p>
        </li>
      </ul>
    </div>
  );
}
