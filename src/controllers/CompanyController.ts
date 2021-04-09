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

	static async update(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const { name, mission, vision, values } = req.body

		const company = await Company.findOneOrFail({ id })
		company.name = name
		company.mission = mission
		company.vision = vision
		company.values = values

		await Company.save(company)
		return res.status(201).json(company)
	}
}
