import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [{ emit: 'event', level: 'query' }],
    errorFormat: 'pretty',
})

const main = async () => {
    // await prisma.user.create({ data: { email: 'another@mail.com' } })
    const post = await prisma.user.findMany({ include: { Post: true } })

    console.dir(post, { depth: Infinity })
    return process.exit(0)
}

main()
