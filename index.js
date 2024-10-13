import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import {
  FETCH_LIVE_VIDEOS,
  FETCH_MOST_POPULAR_VIDEOS,
  FETCH_SEARCHED_RESULTS,
  FETCH_VIDEO_BY_ID,
  YOUTUBE_AUTOCOMPLETE_API,
} from "./constants.js";
const app = express();
configDotenv({
  path: "./.env",
});
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.get("/", async (req, res) => {
  //   const data = await fetch();
  //   const response = await data.json();
  //   return res.json({ response });
  res.send("Hello");
});

app.get("/api/fetch/suggestions/:query", async (req, res) => {
  const { query } = req.params;
  const data = await fetch(YOUTUBE_AUTOCOMPLETE_API + query);
  const response = await data.json();
  return res.send(response);
});
app.get("/api/fetch/live-news", async (req, res) => {
  try {
    const data = await fetch(FETCH_LIVE_VIDEOS + process.env.YOUTUBE_API_KEY);
    const response = await data.json();
    return res.send(response);
  } catch (error) {
    return res.send(error);
  }
});

app.get("/api/fetch/popular-videos", async (req, res) => {
  try {
    const data = await fetch(
      FETCH_MOST_POPULAR_VIDEOS + process.env.YOUTUBE_API_KEY
    );
    const response = await data.json();
    return res.send(response);
  } catch (error) {
    return res.send(error);
  }
});

app.get("/api/fetch/search-results/:query", async (req, res) => {
  try {
    const { query } = req.params;
    const data = await fetch(
      FETCH_SEARCHED_RESULTS + process.env.YOUTUBE_API_KEY + "&q=" + query
    );
    const response = await data.json();
    return res.send(response);
  } catch (error) {
    return res.send(error);
  }
});

app.get("/api/fetch/video-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await fetch(
      FETCH_VIDEO_BY_ID + process.env.YOUTUBE_API_KEY + "&id=" + id
    );
    const response = await data.json();
    console.log(data, response);

    return res.send(response);
  } catch (error) {
    return res.send(error);
  }
});
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server Started Successfully at ${process.env.PORT}`);
});
