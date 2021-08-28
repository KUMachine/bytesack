import { NextApiHandler } from 'next'
const cloudinary = require('cloudinary').v2
import useAuth from '../../../utils/useAuth'

const Sign: NextApiHandler = async (req, res) => {
    const user = useAuth(req.cookies['bytesack-jwt-token'])
    if (!user) {
        res.status(401).json({ message: 'unauthorized request' })
        return
    } else {
        const timestamp = Math.round(new Date().getTime() / 1000)

        const signature = cloudinary.utils.api_sign_request(
            {
                timestamp: timestamp,
            },
            process.env.CLOUDINARY_SECRET
        )
        res.statusCode = 200
        res.json({ signature, timestamp })
    }
}
export default Sign
