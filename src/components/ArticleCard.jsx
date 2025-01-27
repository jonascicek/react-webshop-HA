function ArticleCard(props) {
    return (
      <div className="border p-2 shadow-lg rounded-lg">
        <img src={props.article.thumbnail} alt={props.article.name} />
        <h3>{props.article.name}</h3>
        <span>Price: {props.article.price} </span>
        <span>Availability: {props.article.available}</span>
      </div>
    );
  }
  export default ArticleCard;