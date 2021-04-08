import { Column, Entity, ManyToOne } from 'typeorm'
import Model from '@/models/Model'

import Company from '@/models/Company'

enum UserProfile {
	ADMIN = 'admin',
	USER = 'user',
	GHOST = 'ghost',
}

@Entity('users')
export default class User extends Model {
	@Column()
	name: string

	@Column({ unique: true })
	login: string

	@Column()
	password: string

	@Column({ type: 'enum', enum: UserProfile })
	profile: string

	@ManyToOne(() => Company)
	company: Company
}
