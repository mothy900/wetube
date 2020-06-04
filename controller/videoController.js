import routes from "../routes";
import Video from "../models/Video";
export const home = async (req, res) => {
  //async는 javascript에게 이 함수는 반드시 기다려야 된다고 알려주는 함수.
  try {
    const videos = await Video.find({}); // 모든 video를 기다려야 한다. await 는 async에서만 사용 가능한 명령어

    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
  //console.log(videos);
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileURL: path,
    title,
    description,
  });

  console.log(newVideo);
  //todo upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    param: { id },
  } = req;
  const video = await Video.findByIds;
  res.render("videoDetail", { pageTitle: "Video Detail" });
};
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideos", { pageTitle: "Delete Video" });
