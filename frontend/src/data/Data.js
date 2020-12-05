let Data = {
  login: { isLoggedIn: false },
  register: { userRegister: true },
  userDetails: {},
  userRegister: true,
};
const setUserRegister = (isUserRegister) => {
  Data.userRegister = isUserRegister;
};
const getUserRegister = () => {
  return Data.userRegister;
};
const setLoginStatus = (loginStatus) => {
  Data.login.isLoggedIn = loginStatus;
};
const getLoginStatus = () => {
  return Data.login.isLoggedIn;
};

const setRegisterPage = (RegisterPage) => {
  Data.register.userRegister = RegisterPage;
};
const getRegisterPage = () => {
  return Data.register.userRegister;
};

const setUserDetails = (obj) => {
  Data.userDetails.id = obj.id;
};
const getUserDetails = () => {
  return Data.userDetails;
};
exports.setLoginStatus = setLoginStatus;
exports.getLoginStatus = getLoginStatus;
exports.setRegisterPage = setRegisterPage;
exports.getRegisterPage = getRegisterPage;
exports.setUserDetails = setUserDetails;
exports.getUserDetails = getUserDetails;
exports.setUserRegister = setUserRegister;
exports.getUserRegister = getUserRegister;
