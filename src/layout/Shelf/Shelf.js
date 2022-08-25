import { useContext } from "react";
import SingleArticle from "../../components/Articles/SingleArticle";

import WritingContext from "../../store/article-context";

const Shelf = () => {
  const user = useContext(WritingContext);
  const trimmedArticles = user.writings.slice(0);

  return (
    <div>
      {trimmedArticles.map((article) => (
        <SingleArticle key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Shelf;
