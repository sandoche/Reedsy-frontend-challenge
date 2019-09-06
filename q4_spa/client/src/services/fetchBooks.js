import { API_HOST } from '../constants'

export default async function fetchBooks () {
  const result = await fetch(API_HOST + '/books')
  return result
}
