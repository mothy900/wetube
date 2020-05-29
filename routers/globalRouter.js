import express from "express";
import routes from "../routes";
import { search, home } from "../controller/videoController";
import {
  getJoin,
  getLogin,
  postLogin,
  logout,
  postJoin,
} from "../controller/userController";
const globalRouter = express.Router();
//router.js로 넘어오게 되면 해당 미들웨어를 새로 컨트롤 할 수 있게된다.
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
