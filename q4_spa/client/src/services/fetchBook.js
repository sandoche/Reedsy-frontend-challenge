import { API_HOST } from '../constants'

export default async function fetchBook (slug) {
  const result = await fetch(API_HOST + '/books/' + slug)
  return result
}
