import { axiosInstance } from './index'

class UserService {
  getAllUsers(page: number) {
    const ITEMS_PER_PAGE = 30
    const since = (page - 1) * ITEMS_PER_PAGE
    return axiosInstance.get(`/users?since=${since}`)
  }

  getSingleUser(userLogin: string) {
    return axiosInstance.get(`/users/${userLogin}`)
  }

  getUserRepositories(userLogin: string) {
    return axiosInstance.get(`/users/${userLogin}/repos`)
  }
}

export default new UserService()
