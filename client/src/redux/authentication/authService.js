import axios from "axios";

const login = async (userData) => {
  const response = await axios.post(
    "https://blue-different-rhinoceros.cyclic.app/api/users/login",
    userData
  );
  if (response.data) {
    localStorage.setItem("me", JSON.stringify(response.data));
  }
  return response.data;
};
const logOut = () => {
  try {
    localStorage.removeItem("me");
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  logOut,
  login,
};
export default authService;
