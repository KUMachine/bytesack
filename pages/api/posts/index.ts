import { NextApiHandler } from 'next'
import { PrismaClient } from 'prisma/prisma-client'

const Posts: NextApiHandler = async (req, res) => {
    const prisma = await new PrismaClient()
    const post = await prisma.post.create({
        data: {
            title: 'tech for everyone',
            slug: 'tech-for-no-one',
            image: 'https://picsum.photos/id/23/600/900.webp',
            tag: 'tech',
            author: 'areyan naaman',
            authorImage:
                'https://scontent.fisu7-2.fna.fbcdn.net/v/t1.6435-1/p160x160/53591706_2064951923628354_2547356489215901696_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=8YcITA2OT6oAX-AzkPG&_nc_ht=scontent.fisu7-2.fna&tp=6&oh=25a9cc8cec852b200a49c5ea4aafd2af&oe=60E60727',
            body: {},
            readTime: 6,
        },
    })
    console.log({ post })
    res.end({ success: true })
}

export default Posts
