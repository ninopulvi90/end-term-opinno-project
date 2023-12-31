/* eslint-disable react/prop-types */
export default function RoundedImg({ size, url, alt }) {
  return (
    <div
      style={{ width: `${size * 4}px`, aspectRatio: "1" }}
      className={
        "rounded-full overflow-hidden shadow-sm shadow-slate-900/50 bg-smp-white dark:bg-smp-black"
      }
    >
      <img src={url} alt={alt} className="object-cover w-full object-center" />
    </div>
  );
}
