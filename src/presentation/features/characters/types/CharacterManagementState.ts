import { Character } from '@entities/Character'
import { RequestStatus } from '@sharedTypes/RequestStatus'

export type CharacterManagementState = {
  characters: Character[]
  status: RequestStatus
  hasFetchError: boolean
  fetchErrorMessage: string | null
}

export const initialCharactersManagementState: CharacterManagementState = {
  characters: [],
  status: RequestStatus.Idle,
  hasFetchError: false,
  fetchErrorMessage: null,
}
