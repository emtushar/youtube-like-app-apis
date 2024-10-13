export const FETCH_MOST_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=";

export const FETCH_LIVE_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=50&q=hindinews&type=video&key=";

export const FETCH_SEARCHED_RESULTS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&&key=";

export const FETCH_VIDEO_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=";

export const YOUTUBE_AUTOCOMPLETE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
