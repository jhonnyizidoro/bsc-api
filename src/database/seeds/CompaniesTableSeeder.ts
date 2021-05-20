import Company from '@/models/Company'

const runCompaniesTableSeeder = async (): Promise<void> => {
	await Company.create({
		name: 'Nome da company 1',
		mission:
			'Aliquam lobortis. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nam adipiscing. Etiam feugiat lorem non metus. Nam pretium turpis et arcu.',
		vision:
			'Aliquam lobortis. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nam adipiscing. Etiam feugiat lorem non metus. Nam pretium turpis et arcu.',
		values:
			'Aliquam lobortis. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nam adipiscing. Etiam feugiat lorem non metus. Nam pretium turpis et arcu.',
	}).save()

	await Company.create({
		name: 'Nome da company 2',
		mission:
			'Nam pretium turpis et arcu. Maecenas vestibulum mollis diam. Curabitur a felis in nunc fringilla tristique. Nunc interdum lacus sit amet orci. Nunc interdum lacus sit amet orci.',
		vision:
			'Nam pretium turpis et arcu. Maecenas vestibulum mollis diam. Curabitur a felis in nunc fringilla tristique. Nunc interdum lacus sit amet orci. Nunc interdum lacus sit amet orci.',
		values:
			'Nam pretium turpis et arcu. Maecenas vestibulum mollis diam. Curabitur a felis in nunc fringilla tristique. Nunc interdum lacus sit amet orci. Nunc interdum lacus sit amet orci.',
	}).save()

	await Company.create({
		name: 'Nome da company 3',
		mission:
			'Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Proin faucibus arcu quis ante. Sed in libero ut nibh placerat accumsan. Donec venenatis vulputate lorem. Sed libero.',
		vision:
			'Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Proin faucibus arcu quis ante. Sed in libero ut nibh placerat accumsan. Donec venenatis vulputate lorem. Sed libero.',
		values:
			'Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Proin faucibus arcu quis ante. Sed in libero ut nibh placerat accumsan. Donec venenatis vulputate lorem. Sed libero.',
	}).save()
}

export default runCompaniesTableSeeder
