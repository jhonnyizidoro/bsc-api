import { Request, Response } from 'express'
import Prospect from '@/models/Prospect'

export default class ProspectController {
	static async index(req: Request, res: Response): Promise<Response> {
		const prospects = await Prospect.find()
		return res.status(200).json(prospects)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const { name } = req.body
		const prospect = Prospect.create({ name })
		await prospect.save()
		return res.status(201).json(prospect)
	}

	static async update(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const { name } = req.body

		const prospect = await Prospect.findOneOrFail({ id })
		prospect.name = name

		await Prospect.save(prospect)
		return res.status(201).json(prospect)
	}
}
