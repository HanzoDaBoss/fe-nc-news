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

const patchVote = (article_id, vote) => {
  return axios
    .patch(`https://nc-news-7e8z.onrender.com/api/articles/${article_id}`, {
      inc_votes: vote,
    })
    .then(({ data }) => {
      return data.article;
    });
};

const postComment = (article_id, commentObj) => {
  return axios
    .post(
      `https://nc-news-7e8z.onrender.com/api/articles/${article_id}/comments`,
      commentObj
    )
    .then(({ data }) => {
      console.log("Success");
      return data.articles;
    });
};

export { getArticles, getArticleById, getComments, patchVote, postComment };
