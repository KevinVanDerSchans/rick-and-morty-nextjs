/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

export const fakeApiRequest = async (data: { name: string; email: string; comment: string }) => {
  const url = '/fake-endpoint'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))

    const response = await fetch(url, options)

    const isSuccess = Math.random() > 0.2

    if (isSuccess) {
      return { ok: true }
    } else {
      throw new Error('Simulated API error')
    }
  } catch (error) {
    throw new Error('Request failed: ' + error)
  }
}
