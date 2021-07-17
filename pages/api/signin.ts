import { NextApiHandler } from 'next'

const Signin: NextApiHandler = async (req, res) => {
    // const prisma = new PrismaClient()
    // try {
    //     //@ts-ignore
    //     const user = await prisma.user.findUnique({
    //         where: {
    //             email: req.body.email,
    //         },
    //         select: { email: true, password: true, role: true },
    //     })
    //     prisma.$disconnect()
    //     if (user && user.password === req.body.password) {
    //         const token = jwt.sign(
    //             JSON.stringify({
    //                 email: req.body.email,
    //                 role: user.role,
    //             }),
    //             process.env.NEXT_PRIVATE_JWT_KEY as string
    //         )
    //         res.json({ token })
    //     } else {
    //         res.status(400).json({ message: 'invalid email or password.' })
    //     }
    // } catch (error) {
    //     res.status(500).json({
    //         message: 'internal server error(authentication failed).',
    //         error,
    //     })
    // }
}

export default Signin
