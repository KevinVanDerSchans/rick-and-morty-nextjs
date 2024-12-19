import { Episode } from '@entities/Episode'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export type EpisodeManagementState = {
  episodes: Episode[]
  status: RequestStatus
  hasFetchError: boolean
  fetchErrorMessage: string | null
  selectedEpisode: Episode | null
  selectedEpisodeStatus: RequestStatus
  selectedEpisodeFetchErrorMessage: string | null
}

export const initialEpisodesManagementState: EpisodeManagementState = {
  episodes: [],
  status: RequestStatus.Idle,
  hasFetchError: false,
  fetchErrorMessage: null,
  selectedEpisode: null,
  selectedEpisodeStatus: RequestStatus.Idle,
  selectedEpisodeFetchErrorMessage: null,
}
