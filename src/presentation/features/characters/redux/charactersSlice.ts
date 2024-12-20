import { createSlice } from '@reduxjs/toolkit'
import { getCharactersById } from '@characters/redux/charactersThunks'

import { Character } from '@entities/Character'
import { RequestStatus } from '@sharedTypes/RequestStatus'
import { initialCharactersManagementState } from '@characters/types/CharacterManagementState'

const charactersSlice = createSlice({
  initialState: initialCharactersManagementState,
  name: 'characters',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCharactersById.fulfilled, (state, { payload }: { payload: Character[] }) => {
      state.status = RequestStatus.Loaded
      state.characters = payload
      state.hasFetchError = false
      state.fetchErrorMessage = null
    })
    builder.addCase(getCharactersById.pending, state => {
      state.status = RequestStatus.Idle
      state.fetchErrorMessage = null
    })
    builder.addCase(getCharactersById.rejected, (state, action) => {
      state.status = RequestStatus.Error
      state.fetchErrorMessage = action.error.message || 'Error loading the characters'
    })
  },
})

export const charactersActions = charactersSlice.actions
export default charactersSlice.reducer
