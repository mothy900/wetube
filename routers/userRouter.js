import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controller/userController";

const userRouter = express.Router();
//router.js로 넘어오게 되면 해당 미들웨어를 새로 컨트롤 할 수 있게된다.
userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
