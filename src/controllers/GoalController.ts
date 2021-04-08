import { Request, Response } from 'express'
import Goal from '@/models/Goal'
import Prospect from '@/models/Prospect'

export default class GoalController {
	static async index(req: Request, res: Response): Promise<Response> {
		const goals = await Goal.find({ relations: ['predecessor', 'prospect'] })
		return res.status(200).json(goals)
	}

	static async store(req: Request, res: Response): Promise<Response> {
		const { name, prospectId, predecessorId } = req.body
		const prospect = await Prospect.findOneOrFail({ id: prospectId })
		const goal = Goal.create({ name, prospect })

		if (predecessorId) {
			goal.predecessor = await Goal.findOneOrFail({ id: predecessorId })
		}

		await goal.save()
		return res.status(201).json(goal)
	}

	static async update(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const { name, prospectId, predecessorId } = req.body

		const goal = await Goal.findOneOrFail({ id })
		goal.name = name
		goal.prospect = await Prospect.findOneOrFail({ id: prospectId })
		if (predecessorId) {
			goal.predecessor = await Goal.findOneOrFail({ id: predecessorId })
		}

		await Goal.save(goal)
		return res.status(201).json(goal)
	}
}
