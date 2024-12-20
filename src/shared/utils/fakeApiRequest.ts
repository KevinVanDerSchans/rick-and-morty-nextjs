/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

export const fakeApiRequest = async (data: { name: string; email: string; comment: string }) => {
  return new Promise<{ ok: boolean }>(resolve => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2
      resolve({ ok: isSuccess })
    }, 1500)
  })
}
