import { API_HOST } from '../constants'

export default async function fetchBook (slug) {
  return await fetch(API_HOST + '/books/' + slug)
}