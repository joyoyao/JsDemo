import { request, config } from '../utils'
const { api } = config
const { userLogin,userRegister } = api

export async function login (data) {
  return request({
    url: userLogin,
    method: 'post',
    data,
  })
}

export async function register (data) {
  return request({
    url: userRegister,
    method: 'post',
    data,
  })
}