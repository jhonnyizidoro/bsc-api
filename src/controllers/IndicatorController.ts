import { Request, Response } from 'express'
import Goal from '@/models/Goal'
import Indicator from '@/models/Indicator'

export default class IndicatorController {
	static async index(req: Request, res: Response): Promise<Response> {
		const indicators = await Indicator.find({ relations: ['goal'] })
		return res.status(200).json(indicators)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const {
			name,
			description,
			polarity,
			target,
			targetType,
			frequency,
			formula,
			goalId,
		} = req.body
		const goal = await Goal.findOneOrFail({ id: goalId })
		const indicator = Indicator.create({
			name,
			description,
			polarity,
			target,
			targetType,
			frequency,
			formula,
			goal,
		})
		await indicator.save()
		return res.status(201).json(indicator)
	}
}
