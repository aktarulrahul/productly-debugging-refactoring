const accessToken = () => {
  try {
    return localStorage.getItem('token');
  } catch (err) {
    return null;
  }
};

export default accessToken;
