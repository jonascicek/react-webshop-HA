import ArticleCard from "./ArticleCard";
import AF1 from "../assets/AF1.webp";
import Asics from "../assets/Asics.webp";
import P6000 from "../assets/P6000.webp";
import Samba from "../assets/samba.webp";

function ArticleList() {
  const article = [
    {
      id: 1,
      name: "Air Force 1",
      thumbnail: AF1,
      price: "119€",
      available: "Available",
    },
    {
      id: 2,
      name: "Asics",
      thumbnail: Asics,
      price: "89€",
      available: "Available",
    },
    {
      id: 3,
      name: "P6000",
      thumbnail: P6000,
      price: "99€",
      available: "Available",
    },
    {
      id: 4,
      name: "Samba",
      thumbnail: Samba,
      price: "79€",
      available: "Sold out",
    },
  ];
    return (
        <div className="grid grid-cols-4 gap-4">
        {article.map((article) => (
            <ArticleCard key={article.id} article={article} />
        ))}
        </div>
    );
}

export default ArticleList;
