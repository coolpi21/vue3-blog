import axios from '@/utils/axios'

interface profileDataItem {
  avatar: string
  profile: string
}
// 获取用户资料
export const getUserProfile = (id: number): Promise<any> => {
  return axios.get(`/profile/${id}`)
}

// 更新用户资料
export const updateUserProfile = (
  id: number,
  data: profileDataItem
): Promise<any> => {
  return axios.patch(`/user/${id}`, { profile: data })
}
