import { NextApiHandler } from 'next'
import { PrismaClient } from 'prisma/prisma-client'
import useAuth from '../../../utils/useAuth'

const Posts: NextApiHandler = async (req, res) => {
    let user = useAuth(req.cookies['bytesack-auth-token'])
    if (!user) {
        res.status(401).end('Unauthorized Access')
        return
    }
    const prisma = await new PrismaClient()
    const post = await prisma.post.create({
        data: { title: 'title', authorId: 1 },
    })
}

export default Posts
