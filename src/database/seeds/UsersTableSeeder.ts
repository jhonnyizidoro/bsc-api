import Company from '@/models/Company'
import User from '@/models/User'

const runUsersTableSeeder = async (): Promise<void> => {
	const companies = await Company.find()

	await User.create({
		name: 'admin',
		company: companies[0],
		login: 'admin',
		profile: 'admin',
		password: 'admin',
	}).save()

	await User.create({
		name: 'user',
		company: companies[1],
		login: 'user',
		profile: 'user',
		password: 'user',
	}).save()

	await User.create({
		name: 'ghost',
		company: companies[2],
		login: 'ghost',
		profile: 'ghost',
		password: 'ghost',
	}).save()
}

export default runUsersTableSeeder
