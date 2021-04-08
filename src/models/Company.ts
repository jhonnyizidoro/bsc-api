import Model from '@/models/Model'
import { Column, Entity, OneToMany } from 'typeorm'

import User from '@/models/User'
import Prospect from '@/models/Prospect'
import Signature from '@/models/Signature'

@Entity('companies')
export default class Company extends Model {
	@Column({ unique: true })
	name: string

	@Column('mediumtext')
	mission: string

	@Column('mediumtext')
	vision: string

	@Column('mediumtext')
	values: string

	@OneToMany(() => User, user => user.company)
	users: User[]

	@OneToMany(() => Prospect, prospect => prospect.company)
	prospects: Prospect[]

	@OneToMany(() => Signature, signature => signature.company)
	signatures: Signature[]
}
