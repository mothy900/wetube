import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
//import { userRouter } from "./router"; // 다른 import와 다른 이유는 router.js에서 default로 선언하지 않았기 때문
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet()); //보안
app.set("view engine", "pug"); //html 을 꾸미는 역할
app.use("/uploads", express.static("uploads")); //directory에서 file을 보내주는 middleWare function
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // 로그로 기록을 남김

app.use(localsMiddleware);
//router를 이용해서 미들웨어를 쪼개서 관리한다.
// user라는 항목에 들어가게되면 userRouter가 실행되고, router.js 로 이동된다.
app.use(routes.home, globalRouter); //join, search, about page etc
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; // 내파일을 불러올때 app object를 준다
