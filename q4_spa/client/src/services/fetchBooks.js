import { API_HOST } from '../constants'

export default async function fetchBooks () {
  return await fetch(API_HOST + '/books')
}