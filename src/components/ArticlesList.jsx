import { Link } from "react-router-dom";

const ArticlesList = ({ articlesList }) => {
  return (
    <>
      {articlesList.map((article) => {
        return (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <div className="article-card" key={article.article_id}>
              <p>
                {article.author} posted on {article.topic}
              </p>
              <h2>{article.title}</h2>
              <img src={article.article_img_url}></img>
              <p>votes: {article.votes}</p>
              <p>comments: {article.comment_count}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ArticlesList;
