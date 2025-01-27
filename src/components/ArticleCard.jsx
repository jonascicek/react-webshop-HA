function ArticleCard(props) {
    return (
      <div className="border p-2 shadow-lg rounded-lg">
        <img src={props.article.thumbnail} alt={props.article.name} />
        <h3>{props.article.name}</h3>
        <span>Price: {props.article.price} </span>
        <span className="flex items-center"> 
        Available: {props.article.available ? (<img src="src/assets/square-check.png" alt="Available" width={18} height={18}></img>) : (<img src="src/assets/package-x.png" alt="Not Available" width={18} height={18}></img>)}
        </span>
      </div>
    );
  }

  export default ArticleCard;