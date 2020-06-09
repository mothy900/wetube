import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//upload
//router.js로 넘어오게 되면 해당 미들웨어를 새로 컨트롤 할 수 있게된다.
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
//videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
