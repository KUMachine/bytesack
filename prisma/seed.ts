import prisma from '../lib/prisma'
import faker from 'faker'
export async function seed() {
    await prisma.$connect()
    await prisma.user.create({
        data: {
            firstname: 'areyano',
            lastname: 'naaman',
            username: 'areyan',
            email: 'areyan@bytesack.com',
            role: 'SUPERUSER',
            account: { create: { password: 'superadmin' } },
        },
    })
    for (let index = 0; index < 5; index++) {
        await prisma.user.create({
            data: {
                firstname: faker.internet.userName(),
                lastname: faker.internet.userName(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                account: { create: { password: faker.internet.password() } },
                posts: {
                    create: {
                        slug: faker.lorem.slug(),
                        title: faker.random.words(),
                        description: faker.random.words(),
                        image: faker.random.image(),
                        tags: "javascript",
                    },
                },
            },
        })
    }
    await prisma.$disconnect()
}
