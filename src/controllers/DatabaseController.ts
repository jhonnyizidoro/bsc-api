import { Request, Response } from 'express'
import runCompaniesTableSeeder from '@/database/seeds/CompaniesTableSeeder'
import runUsersTableSeeder from '@/database/seeds/UsersTableSeeder'

export default class ProspectController {
	static async store(req: Request, res: Response): Promise<Response> {
		await runCompaniesTableSeeder()
		await runUsersTableSeeder()

		return res.status(201).send('Seed executado com sucesso!')
	}
}
