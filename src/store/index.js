import { configureStore } from "@reduxjs/toolkit";

import siteReducers from "./site";
import userReducers from "./user";
import streamerReducers from "./streamer";
import categoryReducers from "./category";

export default configureStore({
  reducer: {
    site: siteReducers,
    user: userReducers,
    streamer: streamerReducers,
    category: categoryReducers,
  },
});
