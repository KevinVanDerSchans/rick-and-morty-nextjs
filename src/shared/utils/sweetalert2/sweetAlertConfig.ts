export const showCommentSuccessAlert = async () => {
  const Swal = (await import('sweetalert2')).default
  return Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thank you',
    text: 'We will review your comment',
    showConfirmButton: false,
    timer: 3000,
  })
}

export const showCommentErrorAlert = async () => {
  const Swal = (await import('sweetalert2')).default
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong',
    footer: 'Please try again later',
  })
}
