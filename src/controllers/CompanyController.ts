import { Request, Response } from 'express'
import Company from '@/models/Company'

export default class CompanyController {
	static async index(req: Request, res: Response): Promise<Response> {
		const companies = await Company.find()
		return res.status(200).json(companies)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const { name, mission, vision, values } = req.body
		const company = Company.create({ name, mission, vision, values })
		await company.save()
		return res.status(201).json(company)
	}
}
