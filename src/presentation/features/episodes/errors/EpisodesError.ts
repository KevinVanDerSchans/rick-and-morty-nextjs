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

const EpisodesErrors = {
  EpisodesErrorNotFound,
  EpisodesErrorFetching,
}

export default EpisodesErrors
