import { createSlice } from "@reduxjs/toolkit";

const moveSlice = createSlice({
  name: "movies",
  initialState: {
    selected: null,
    nowPlayingMovies: null,
    popularMovies: null,
    tvPopular: null,
    trailerVideo: null,
    topRatedMovies: null,
    upcomingMovies: null,
    tvAirToday: null,
    tvTopRated: null,
  },
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addTvPopular: (state, action) => {
      state.tvPopular = action.payload;
    },

    addTvAirToday: (state, action) => {
      state.tvAirToday = action.payload;
    },
    addTvTopRated: (state, action) => {
      state.tvTopRated = action.payload;
    },
  },
});

export const {
  setSelected,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTvPopular,
  addTvAirToday,
  addTvTopRated,
} = moveSlice.actions;
export default moveSlice.reducer;
