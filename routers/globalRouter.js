import express from "express";
import routes from "../routes";
import { search, home } from "../controller/videoController";
import { join, login, logout } from "../controller/userController";
const globalRouter = express.Router();
//router.js로 넘어오게 되면 해당 미들웨어를 새로 컨트롤 할 수 있게된다.
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
