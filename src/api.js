import axios from "axios";

const getArticles = () => {
  return axios
    .get(`https://nc-news-7e8z.onrender.com/api/articles`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getArticles };
