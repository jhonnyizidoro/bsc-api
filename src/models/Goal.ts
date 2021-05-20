import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'
import Model from '@/models/Model'

import Prospect from '@/models/Prospect'
import Indicator from '@/models/Indicator'

@Entity('goals')
export default class Goal extends Model {
	@Column()
	name: string

	@ManyToOne(() => Prospect)
	prospect: Prospect

	@JoinColumn()
	@OneToOne(() => Goal)
	predecessor: Goal

	@OneToMany(() => Indicator, indicator => indicator.goal)
	indicators: Indicator[]
}
