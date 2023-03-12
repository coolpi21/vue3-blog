import axios from '@/utils/axios'

export interface UploadSign {
  stsToken: string
  accessKeyId: string
  accessKeySecret: string
}

interface SignResp {
  code: number
  message: string
  data: UploadSign
}

// 获取上传签名
export const getUploadSign = (): Promise<SignResp> => {
  return axios.get(`/upload/sign`)
}
