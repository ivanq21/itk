import * as axios from 'axios';

const instance = axios.create({
  withCredentials:true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    "API-KEY": '0a4a1fcf-b247-4577-a1c2-b73d3a48a10d'
  }
});

export const usersAPI = {
  getUsers: (page=1, count=10) => {
    return instance.get(`/users?page=${page}&count=${count}`).then(response => response.data);
  },
  getAuth: () => {
    console.log(instance)
    return instance.get(`/auth/me`).then(response => response.data);
  },
  getProfile: (userId) => {
    return instance.get(`/profile/${userId}`).then(response => response.data)
  },
  setFollow: (userId) => {
    return instance.post(`/follow/${userId}`)
  },
  setUnfollow: (userId) => {
    return instance.delete(`/follow/${userId}`)
  }
}
