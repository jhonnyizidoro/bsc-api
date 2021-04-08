import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import Model from '@/models/Model'

import Company from '@/models/Company'
import Goal from '@/models/Goal'

@Entity('prospects')
export default class Prospect extends Model {
	@Column()
	name: string

	@ManyToOne(() => Company)
	company: Company

	@OneToMany(() => Goal, goal => goal.prospect)
	goals: Goal[]
}
