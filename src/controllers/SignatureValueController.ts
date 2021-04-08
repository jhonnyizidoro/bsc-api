import { Request, Response } from 'express'
import Signature from '@/models/Signature'
import SignatureValue from '@/models/SignatureValue'

export default class SignatureValueController {
	static async index(req: Request, res: Response): Promise<Response> {
		const signatureValues = await SignatureValue.find({
			relations: ['signature'],
		})
		return res.status(200).json(signatureValues)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const { value, day, month, year, signatureId } = req.body
		const signature = await Signature.findOneOrFail({ id: signatureId })
		const signatureValue = SignatureValue.create({ value, day, month, year, signature })
		await signatureValue.save()
		return res.status(201).json(signatureValue)
	}
}
