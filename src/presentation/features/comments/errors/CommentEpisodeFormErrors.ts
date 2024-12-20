import { CustomError } from '@errors/services/CustomError'

class CommentEpisodeFormError extends CustomError {
  constructor(message: string = 'Error submitting a comment. Please try again.') {
    super(message)
    this.name = 'CommentEpisodeFormError'
  }
}

const CommentEpisodeFormErrors = {
  CommentEpisodeFormError,
}

export default CommentEpisodeFormErrors
