import episodesReducer from '@episodes/redux/episodesSlice'
import charactersReducer from '@characters/redux/charactersSlice'

export const rootReducer = {
  episodes: episodesReducer,
  characters: charactersReducer,
}
