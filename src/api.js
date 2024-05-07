import axios from "axios";

const getArticles = () => {
  return axios
    .get(`https://nc-news-7e8z.onrender.com/api/articles`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      return error.response;
    });
};

const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-7e8z.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

const getComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-7e8z.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

export { getArticles, getArticleById, getComments };
