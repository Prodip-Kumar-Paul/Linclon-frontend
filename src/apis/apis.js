const apis = {
   baseURL: "https://linclon-backend.herokuapp.com/api/v1",
   // "http://localhost:5000/api/v1", 
   USER: "/user/user_profile",
   LOGIN: "/auth/signup_or_login",
   GITHUB_AUTH_API:
      "https://github.com/login/oauth/authorize?client_id=0c9c71b435f3cb1c955f&scope=repo",
   GET_ALL_PROJECTS: "/webproject/allprojects",
   CREATE_PROJECT: "/webproject/project",
};
export default apis;
