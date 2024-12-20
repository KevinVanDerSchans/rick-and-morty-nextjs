import { CustomError } from '@errors/services/CustomError'

class CharactersErrorNotFound extends CustomError {
  constructor(message: string = 'Characters have not been found') {
    super(message)
    this.name = 'CharactersErrorNotFound'
  }
}

class CharactersErrorFetching extends CustomError {
  constructor(message: string = 'Error when fetching Characters') {
    super(message)
    this.name = 'CharactersErrorFetching'
  }
}

class CharacterErrorFetchingById extends CustomError {
  constructor(message: string = 'Error when fetching this Character') {
    super(message)
    this.name = 'CharacterErrorFetchingById'
  }
}

const CharactersErrors = {
  CharactersErrorNotFound,
  CharactersErrorFetching,
  CharacterErrorFetchingById,
}

export default CharactersErrors
