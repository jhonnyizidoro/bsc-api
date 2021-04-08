import * as express from 'express'
const router = express.Router()

import { validateToken } from '@/middlewares/auth'

import AuthController from '@/controllers/AuthController'
import UserController from '@/controllers/UserController'
import CompanyController from '@/controllers/CompanyController'
import ProspectController from '@/controllers/ProspectController'
import GoalController from '@/controllers/GoalController'
import IndicatorController from '@/controllers/IndicatorController'
import SignatureController from '@/controllers/SignatureController'
import SignatureValueController from '@/controllers/SignatureValueController'

router.post('/login', AuthController.login)

router.get('/users', validateToken, UserController.index)
router.post('/users', validateToken, UserController.store)

router.get('/companies', validateToken, CompanyController.index)
router.post('/companies', validateToken, CompanyController.store)

router.get('/prospects', validateToken, ProspectController.index)
router.post('/prospects', validateToken, ProspectController.store)

router.get('/goals', validateToken, GoalController.index)
router.post('/goals', validateToken, GoalController.store)

router.get('/indicators', validateToken, IndicatorController.index)
router.post('/indicators', validateToken, IndicatorController.store)

router.get('/signatures', validateToken, SignatureController.index)
router.post('/signatures', validateToken, SignatureController.store)

router.get('/signature-values', validateToken, SignatureValueController.index)
router.post('/signature-values', validateToken, SignatureValueController.store)

export default router
