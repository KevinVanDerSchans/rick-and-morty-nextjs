/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { fakeApiRequest } from '@utils/fakeApiRequest'
import { showCommentSuccessAlert, showCommentErrorAlert } from '@utils/sweetalert2/sweetAlertConfig'
import { errorService } from '@errors/services/ErrorService'
import CommentEpisodeFormErrors from '@comments/errors/CommentEpisodeFormErrors'

export function useCommentForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleComment = async (e: React.FormEvent) => {
    setIsSubmitting(true)

    try {
      const result = await fakeApiRequest({ name, email, comment })

      if (result?.ok) {
        showCommentSuccessAlert()
        resetForm()
      } else {
        errorService.handleError(new CommentEpisodeFormErrors.CommentEpisodeFormError())
        showCommentErrorAlert()
      }
    } catch (error) {
      errorService.handleError(new CommentEpisodeFormErrors.CommentEpisodeFormError())
      showCommentErrorAlert()
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setComment('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await handleComment(e)
  }

  return {
    name,
    setName,
    email,
    setEmail,
    comment,
    setComment,
    isSubmitting,
    handleSubmit,
  }
}
