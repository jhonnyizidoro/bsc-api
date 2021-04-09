import { Column, Entity, ManyToOne } from 'typeorm'
import Model from '@/models/Model'

import Goal from '@/models/Goal'

enum IndicatorPolarity {
	POSITIVE = 'positive',
	NEGATIVE = 'negative',
}

enum IndicatorTargetType {
	PERCENTAGE = 'percentage',
	CURRENCY = 'currency',
	VALUE = 'value',
}

enum IndicatorFrequency {
	YEARLY = 'yearly',
	MONTHLY = 'monthly',
	DAILY = 'daily',
}

@Entity('indicators')
export default class Indicator extends Model {
	@Column()
	name: string

	@Column('mediumtext')
	description: string

	@Column({ type: 'enum', enum: IndicatorPolarity })
	polarity: string

	@Column('float')
	target: number

	@Column({ type: 'enum', enum: IndicatorTargetType })
	targetType: string

	@Column({ type: 'enum', enum: IndicatorFrequency })
	frequency: string

	@Column({ nullable: true })
	formula: string

	@ManyToOne(() => Goal)
	goal: Goal
}
