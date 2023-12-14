export default function RoundedImg({ size, url, alt }) {
    return (
      <div
        className={
          "w-" +
          size +
          " h-" +
          size +
          " rounded-full overflow-hidden shadow-sm shadow-slate-900/50"
        }
      >
        <img src={url} alt={alt} className="object-cover w-full" />
      </div>
    );
  }
  