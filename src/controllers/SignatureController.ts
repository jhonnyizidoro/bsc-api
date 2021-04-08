import { Request, Response } from 'express'
import Signature from '@/models/Signature'

export default class SignatureController {
	static async index(req: Request, res: Response): Promise<Response> {
		const signatures = await Signature.find({ relations: ['values'] })
		return res.status(200).json(signatures)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const { name, frequency } = req.body
		const signature = Signature.create({ name, frequency })
		await signature.save()
		return res.status(201).json(signature)
	}

	static async show(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const signature = await Signature.findOneOrFail({ id }, { relations: ['values'] })
		return res.status(200).json(signature)
	}

	static async update(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const { name, frequency } = req.body

		const signature = await Signature.findOneOrFail({ id })
		signature.name = name
		signature.frequency = frequency

		await Signature.save(signature)
		return res.status(201).json(signature)
	}
}
