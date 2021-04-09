import { Column, Entity, ManyToOne } from 'typeorm'
import Model from '@/models/Model'

import Signature from '@/models/Signature'

@Entity('signatureValues')
export default class SignatureValue extends Model {
	@Column('float')
	value: number

	@Column()
	day: number

	@Column()
	month: number

	@Column()
	year: number

	@ManyToOne(() => Signature)
	signature: Signature
}
