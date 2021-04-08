import { Request, Response } from 'express'
import User from '../models/User'

export default class UserController {
	static async index(req: Request, res: Response): Promise<Response> {
		const users = await User.find({ relations: ['company'] })
		return res.status(200).json(users)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const { name, login, password, profile } = req.body
		const user = User.create({ name, login, password, profile })
		await user.save()
		return res.status(201).json(user)
	}

	show(): void {
		return
	}

	update(): void {
		return
	}

	delete(): void {
		return
	}
}
