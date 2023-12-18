export default function Footer() {
  return (
    <div className="dark:bg-smp-light-gray bg-smp-white p-4 shadow-md shadow-smp-shadow w-64 flex rounded-2xl dark:text-white text-smp-dark-gray">
      <ul>
        <li className="inline-block mr-2 underline">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="inline-block mr-2 underline">
          <a href="#">Cookie Policy</a>
        </li>
        <li className="inline-block mr-2 underline">
          <a href="#">Sede Legale</a>
        </li>
        <li className="inline-block mr-2 underline">
          <a href="#">Help</a>
        </li>
        <li className=" inline-block mr-2 underline">
          <a target="blank" href="https://icons8.com">
            Icons8
          </a>
        </li>
        <li className="">
          <p>@2023</p>
        </li>
      </ul>
    </div>
  );
}
