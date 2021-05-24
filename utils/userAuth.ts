import jwt from 'jsonwebtoken'

export default function (token: string) {
    try {
        const user = jwt.verify(
            token,
            process.env.NEXT_PRIVATE_JWT_KEY as string
        )
        return user
    } catch (ex) {
        return null
    }
}
