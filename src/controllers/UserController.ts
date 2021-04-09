import { Request, Response } from 'express'
import User from '../models/User'
import Company from '@/models/Company'

export default class UserController {
	static async index(req: Request, res: Response): Promise<Response> {
		const users = await User.find({ relations: ['company'] })
		return res.status(200).json(users)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const { name, login, password, profile, companyId } = req.body
		const company = await Company.findOneOrFail({ id: companyId })
		const user = User.create({ name, login, password, profile, company })
		await user.save()
		return res.status(201).json(user)
	}

	static async update(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const { name, login, password, profile, companyId } = req.body

		const user = await User.findOneOrFail({ id })
		const company = await Company.findOneOrFail({ id: companyId })
		user.name = name
		user.login = login
		user.password = password
		user.profile = profile
		user.company = company

		await User.save(user)
		return res.status(201).json(user)
	}
}
