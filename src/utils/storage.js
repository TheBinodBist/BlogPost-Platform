export const getBlogs = () => {
  return JSON.parse(localStorage.getItem("blogs")) || [];
};

export const saveBlogs = (blogs) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};
