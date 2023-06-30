import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  ids: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    manageFavorites: (state, action) => {
      const currentId = action.payload
      if (state.ids.indexOf(currentId) < 0) {
        state.ids = [...state.ids, currentId]
      } else {
        state.ids = state.ids.filter((favId) => favId !== currentId)
      }
    },
  },
})

export const { manageFavorites: actionManageFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
