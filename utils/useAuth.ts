import { user } from '.prisma/client'
import jwt from 'jsonwebtoken'

export default function (token: string) {
    try {
        const user = jwt.verify(
            token,
            process.env.NEXT_PRIVATE_JWT_KEY as string
        )
        if (typeof user === 'string') {
            throw new Error('only expected object found string')
        }
        return user as user
    } catch (ex) {
        return null
    }
}
