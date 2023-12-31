import RoundedImg from "../RoundedImg";

export default function Followers(props) {
  return (
    <div className="flex flex-row rounded-2xl overflow-hidden px-4 py-2 bg-smp-white dark:bg-smp-light-gray shadow-lg shadow-smp-shadow">
      <RoundedImg
        size={12}
        url={`https://picsum.photos/id/${props.follower.id + 10}/200/300`}
        alt="Followers"
      />
      <div className="flex flex-row">
        <div className="ml-2">
          <h2 className="text-base font-semibold h-12 w-36 leading-[48px] dark:text-white">
            {props.follower.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
