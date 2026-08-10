const Cards = (props) => {
  const ele = props.ele;
  return (
    <div>
      <a href={ele.url} target="_blank" rel="noopener noreferrer">
        <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={ele.download_url}
            alt={ele.author}
            loading="lazy"
          />
        </div>
        <h2 className="font-bold text-lg">{ele.author}</h2>
      </a>
    </div>
  );
};

export default Cards;
