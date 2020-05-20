import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//import { userRouter } from "./router"; // 다른 import와 다른 이유는 router.js에서 default로 선언하지 않았기 때문
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); //보안
app.use(morgan("dev")); // 로그로 기록을 남김

//router를 이용해서 미들웨어를 쪼개서 관리한다.
// user라는 항목에 들어가게되면 userRouter가 실행되고, router.js 로 이동된다.
app.use("/", globalRouter); //join, search, about page etc
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app; // 내파일을 불러올때 app object를 준다
