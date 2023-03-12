import OSS from 'ali-oss'

interface OSSoptions {
  stsToken: string
  accessKeyId: string
  accessKeySecret: string
}

class Upload {
  OSSoptions: OSSoptions

  constructor(options: OSSoptions) {
    this.OSSoptions = Object.assign(options, {
      region: 'oss-cn-hangzhou',
      bucket: 'cai-images-oss',
      secure: true
    })
  }

  init() {
    return new OSS({
      ...this.OSSoptions
    })
  }

  put(filename: string, file: File): Promise<any> {
    return this.init().put(`blog/${filename}`, file)
  }
}

export default Upload
