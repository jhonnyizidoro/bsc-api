import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import User from '@/models/User'

interface TokenPayload {
	iat: number
	exp: number
	user: User
}

export const validateToken = (
	req: Request,
	res: Response,
	next: NextFunction
): void | Response => {
	const { authorization } = req.headers

	if (!authorization) {
		return res.sendStatus(401)
	}

	const token = authorization.replace('Bearer', '').trim()

	try {
		const session = verify(token, 'TEST') as TokenPayload
		req.user = session.user
		return next()
	} catch {
		return res.sendStatus(401)
	}
}
