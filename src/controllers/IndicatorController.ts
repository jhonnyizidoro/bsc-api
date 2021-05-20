import { Request, Response } from 'express'
import Goal from '@/models/Goal'
import Indicator from '@/models/Indicator'

export default class IndicatorController {
	static async index(req: Request, res: Response): Promise<Response> {
		const indicators = await Indicator.find({ relations: ['goal'] })
		return res.status(200).json(indicators)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const { name, description, polarity, target, targetType, frequency, goalId } =
			req.body
		const goal = await Goal.findOneOrFail({ id: goalId })
		const indicator = Indicator.create({
			name,
			description,
			polarity,
			target,
			targetType,
			frequency,
			goal,
		})
		await indicator.save()
		return res.status(201).json(indicator)
	}

	static async update(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const { name, description, polarity, target, targetType, frequency, goalId } =
			req.body

		const indicator = await Indicator.findOneOrFail({ id })
		const goal = await Goal.findOneOrFail({ id: goalId })
		indicator.name = name
		indicator.description = description
		indicator.polarity = polarity
		indicator.target = target
		indicator.targetType = targetType
		indicator.frequency = frequency
		indicator.goal = goal

		await Indicator.save(indicator)
		return res.status(201).json(indicator)
	}

	static async updateFormula(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const { formula } = req.body

		const indicator = await Indicator.findOneOrFail({ id })
		indicator.formula = formula

		await Indicator.save(indicator)
		return res.status(201).json(indicator)
	}
}
