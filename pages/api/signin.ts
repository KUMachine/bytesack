import { NextApiHandler } from 'next'
import prisma from 'lib/prisma'
import { sign } from 'jsonwebtoken'

const Signin: NextApiHandler = async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email,
            },
            select: {
                firstname: true,
                lastname: true,
                username: true,
                email: true,
                role: true,
                avatar: true,
                account: { select: { password: true } },
            },
        })
        if (user && user.account.password === req.body.password) {
            const token = sign(
                JSON.stringify({
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    avatar: user.avatar,
                }),
                process.env.NEXT_PRIVATE_JWT_KEY as string
            )
            res.json({ token })
        } else {
            res.status(400).json({ message: 'Invalid email or password.' })
        }
    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Unknown error occured.',
        })
    }
}

export default Signin
