import axios from 'axios'
import { utilityApiURL } from '../models/urls'

// const url = 'https://utility.adchain.com/'
// second server = https://utility2.adchain.com/

export async function getPosts (domain) {
  let res
  try {
    res = await axios.post(`${utilityApiURL}/get/post`, {
      domain: domain.toLowerCase()
    })
    return res
  } catch (error) {
    console.error(error)
  }
}

export async function createPostApplication (domain, reason) {
  let res
  try {
    res = await axios.post(`${utilityApiURL}/create/post/application`, {
      domain: domain.toLowerCase(),
      reason: reason
    })
    return res
  } catch (error) {
    console.error(error)
  }
}

export async function createPostChallenge (domain, reason) {
  let res
  try {
    res = await axios.post(`${utilityApiURL}/create/post/challenge`, {
      domain: domain.toLowerCase(),
      reason: reason
    })
    return res
  } catch (error) {
    console.error(error)
  }
}

export async function createComment (id, comment) {
  let res
  try {
    res = await axios.post(`${utilityApiURL}/create/comment`, {
      id: id,
      comment: comment
    })
    console.log('response: ', res)
    return res
  } catch (error) {
    console.error(error)
  }
}
