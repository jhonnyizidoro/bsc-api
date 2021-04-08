import 'express-async-errors'
import * as express from 'express'
import * as logger from 'morgan'
import * as cors from 'cors'
import router from '@/routes'
import { createConnection } from 'typeorm'

createConnection().then(() => {
	const app = express()

	app.use(logger('dev'))
	app.use(cors())
	app.use(express.json())
	app.use(router)

	app.listen(2500, () => console.log('Listening on http://localhost:2500'))
})
