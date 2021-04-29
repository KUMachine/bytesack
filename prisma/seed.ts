import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: `alice@prisma.io`,
            username: 'username',
            bio: 'biography',
            Post: {
                create: {
                    title: 'Check out Prisma with Next.js',
                    published: true,
                },
            },
        },
    })
    console.dir(alice, { depth: Infinity })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
