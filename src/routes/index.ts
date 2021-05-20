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
import DatabaseController from '@/controllers/DatabaseController'

router.post('/login', AuthController.login)

router.get('/users', validateToken, UserController.index)
router.post('/users', validateToken, UserController.store)
router.put('/users/:id', validateToken, UserController.update)

router.get('/companies', validateToken, CompanyController.index)
router.post('/companies', validateToken, CompanyController.store)
router.put('/companies/:id', validateToken, CompanyController.update)

router.get('/prospects', validateToken, ProspectController.index)
router.post('/prospects', validateToken, ProspectController.store)
router.put('/prospects/:id', validateToken, ProspectController.update)

router.get('/goals', validateToken, GoalController.index)
router.post('/goals', validateToken, GoalController.store)
router.put('/goals/:id', validateToken, GoalController.update)

router.get('/indicators', validateToken, IndicatorController.index)
router.post('/indicators', validateToken, IndicatorController.store)
router.put('/indicators/:id', validateToken, IndicatorController.update)
router.put('/indicators/formula/:id', validateToken, IndicatorController.updateFormula)

router.get('/signatures', validateToken, SignatureController.index)
router.post('/signatures', validateToken, SignatureController.store)
router.get('/signatures/:id', validateToken, SignatureController.show)
router.put('/signatures/:id', validateToken, SignatureController.update)

router.post('/signature-values', validateToken, SignatureValueController.store)

router.get('/seed', DatabaseController.store)

export default router
