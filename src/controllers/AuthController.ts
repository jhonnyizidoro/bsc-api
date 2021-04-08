import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

import User from '@/models/User'

export default class AuthController {
	static async login(req: Request, res: Response): Promise<Response> {
		const { login, password } = req.body
		const user = await User.findOne({ login, password })

		if (!user) {
			return res.sendStatus(401)
		}

		const token = sign({ id: user.id }, 'TEST', { expiresIn: '1y' })

		return res.status(200).json({ user, token })
	}
}
