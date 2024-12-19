import { createSlice } from '@reduxjs/toolkit'
import { getEpisodesAsync } from '@episodes/redux/episodesThunks'

import { Episode } from '@entities/Episode'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { initialEpisodesManagementState } from '@episodes/types/EpisodeManagementState'

const episodesSlice = createSlice({
  initialState: initialEpisodesManagementState,
  name: 'episodes',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getEpisodesAsync.fulfilled, (state, { payload }: { payload: Episode[] }) => {
      state.status = RequestStatus.Loaded
      state.episodes = payload
      state.hasFetchError = false
      state.fetchErrorMessage = null
    })
    builder.addCase(getEpisodesAsync.pending, state => {
      state.status = RequestStatus.Idle
      state.fetchErrorMessage = null
    })
    builder.addCase(getEpisodesAsync.rejected, (state, action) => {
      state.status = RequestStatus.Error
      state.fetchErrorMessage = action.error.message || 'Error loading Episodes'
    })
  },
})

export const episodesActions = episodesSlice.actions
export default episodesSlice.reducer