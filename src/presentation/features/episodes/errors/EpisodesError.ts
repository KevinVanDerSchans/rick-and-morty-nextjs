import { CustomError } from '@errors/services/CustomError'

class EpisodesErrorNotFound extends CustomError {
  constructor(message: string = 'Episodes have not been found') {
    super(message)
    this.name = 'EpisodesErrorNotFound'
  }
}

class EpisodesErrorFetching extends CustomError {
  constructor(message: string = 'Error when fetching Episodes') {
    super(message)
    this.name = 'EpisodesErrorFetching'
  }
}

class EpisodeErrorFetchingById extends CustomError {
  constructor(message: string = 'Error when fetching this Episode') {
    super(message)
    this.name = 'EpisodeErrorFetchingById'
  }
}

const EpisodesErrors = {
  EpisodesErrorNotFound,
  EpisodesErrorFetching,
  EpisodeErrorFetchingById,
}

export default EpisodesErrors
