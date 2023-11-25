const accessToken = () => {
  try {
    return localStorage.getItem('productly');
  } catch (err) {
    return null;
  }
};

export default accessToken;
