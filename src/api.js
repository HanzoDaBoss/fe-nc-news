import axios from "axios";

const api = axios.create({
  baseURL: `https://nc-news-7e8z.onrender.com/api`,
});

const getArticles = (sort, order_by) => {
  const sort_by = sort || undefined;
  const order = order_by || undefined;
  return api
    .get(`/articles`, {
      params: {
        sort_by,
        order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      return error.response;
    });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const getComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const patchVote = (article_id, vote) => {
  return api
    .patch(`/articles/${article_id}`, {
      inc_votes: vote,
    })
    .then(({ data }) => {
      return data.article;
    });
};

const postComment = (article_id, commentObj) => {
  return api
    .post(`/articles/${article_id}/comments`, commentObj)
    .then(({ data }) => {
      return data.articles;
    });
};

const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then(() => {
    return;
  });
};

const getTopics = () => {
  return api
    .get(`/topics`)
    .then(({ data }) => {
      return data.topics;
    })
    .catch((error) => {
      return error.response;
    });
};

const getArticlesByTopic = (topic_name) => {
  return api.get(`/articles?topic=${topic_name}`).then(({ data }) => {
    return data.articles;
  });
};

const getUsers = () => {
  return api
    .get(`/users`)
    .then(({ data }) => {
      return data.users;
    })
    .catch((error) => {
      return error.response;
    });
};

export {
  getArticles,
  getArticleById,
  getComments,
  patchVote,
  postComment,
  deleteComment,
  getTopics,
  getArticlesByTopic,
  getUsers,
};
