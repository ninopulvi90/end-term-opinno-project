export default function RoundedImg({ size, url, alt }) {
    return (
      <div
        className={
          "w-" +
          size +
          " h-" +
          size +
          " rounded-full overflow-hidden shadow-sm shadow-slate-900/50 bg-slate-100 dark:bg-[#1A1A1A]"
          
        }
      >
        <img src={url} alt={alt} className="object-cover w-full" />
      </div>
    );
  }
  