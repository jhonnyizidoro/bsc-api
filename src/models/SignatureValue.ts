import { Column, Entity, ManyToOne } from 'typeorm'
import Model from '@/models/Model'

import Signature from '@/models/Signature'

@Entity('signatureValues')
export default class SignatureValue extends Model {
	@Column('float')
	value: number

	@Column()
	day: number

	@Column({ nullable: true })
	month: number

	@Column({ nullable: true })
	year: number

	@ManyToOne(() => Signature)
	signature: Signature
}
