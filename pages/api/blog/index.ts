import prisma from 'lib/prisma'
import { NextApiHandler } from 'next'
import validate from 'lib/validations/validateBlogPost'

const Posts: NextApiHandler = async (req, res) => {
    const { slug, title, description, tags, language, readTime, image } =
        req.body
    if (req.method !== 'POST') {
        res.statusCode = 400
        return res.json({ message: 'invalid request' })
    }
    try {
        validate({ slug, title, description, tags, readTime, image })
        const checkPost = await prisma.post.findUnique({
            where: { slug },
            select: { slug: true },
        })
        if (checkPost) throw 'Slug must be unique'
    } catch (error) {
        res.statusCode = 400
        return res.json({ message: error })
    }

    const post = await prisma.post.create({
        data: {
            slug,
            title,
            description,
            author: { connect: { id: 1 } },
            image,
            tags,
            language,
            readTime: +readTime,
        },
    })
    console.log({ post })
    res.json({ success: true })
}

export default Posts
