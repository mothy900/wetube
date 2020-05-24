//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//USER

const USERS = "/users";
const USER_DETAIL = "/users/:id";
const EDIT_PROFILE = "/users/edit-profile";
const CHANEGE_PASSWORD = "/users/change-profile";

//Video

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANEGE_PASSWORD,

  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
