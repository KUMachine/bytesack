export default async function getImageUrl(file: any) {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`
    const formData = new FormData()

    const signRes = await fetch('/api/blog/sign')
    const signData = await signRes.json()
    const { signature, timestamp } = signData

    formData.append('file', file[0])
    formData.append('signature', signature)
    formData.append('timestamp', timestamp)
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_KEY as string)

    const response = await fetch(url, {
        method: 'post',
        body: formData,
    })

    const data = await response.json()
    const { secure_url } = data
    return secure_url
}
