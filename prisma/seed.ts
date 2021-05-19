import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: `areyan@bytesack.com`,
            username: 'areyan96',
            password: 'changeme',
            role: 'ADMIN',
            bio: 'young developer living in the dreams',
            Post: {
                create: {
                    title: 'Check out Bytesack with Next.js',
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
