import { configureStore } from "@reduxjs/toolkit"
import favoriteSlice from "./slices/favorites"

const store = configureStore({
  reducer: {
    favorites: favoriteSlice,
  },
})

export default store
