import { notify } from 'react-notify-toast'

export function createNotification() {
  notify.show('Looks like you made a spelling mistake. Please try again', 'error', 3000)
}