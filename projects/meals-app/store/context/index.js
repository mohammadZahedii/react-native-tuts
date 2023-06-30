import { createContext, useContext, useState } from "react"

const favoritesContext = createContext({
  ids: [],
  manageFavorites: () => {},
})

const FavoriteContextProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([])

  const manageFavoritesHandler = (id) => {
    if (!!!id) return

    setFavoriteIds((crt) => {
      if (crt.indexOf(id) <= -1) {
        return [...crt, id]
      } else {
        return crt.filter((favId) => favId !== id)
      }
    })
  }

  return (
    <favoritesContext.Provider
      value={{
        ids: favoriteIds,
        manageFavorites: manageFavoritesHandler,
      }}
    >
      {children}
    </favoritesContext.Provider>
  )
}

export default FavoriteContextProvider

export const useFavoriteContext = () => useContext(favoritesContext)
