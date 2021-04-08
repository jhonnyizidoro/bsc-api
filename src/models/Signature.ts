import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import Model from '@/models/Model'

import SignatureValue from '@/models/SignatureValue'
import Company from '@/models/Company'

enum SignatureFrequency {
	YEARLY = 'yearly',
	MONTHLY = 'monthly',
	DAILY = 'daily',
}

@Entity('signatures')
export default class Signature extends Model {
	@Column()
	name: string

	@Column({ type: 'enum', enum: SignatureFrequency })
	frequency: string

	@ManyToOne(() => Company)
	company: Company

	@OneToMany(() => SignatureValue, signatureValue => signatureValue.signature)
	values: SignatureValue[]
}
