import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
	id: string
	iat: number
	exp: number
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
		const { id } = verify(token, 'TEST') as TokenPayload
		req.userId = id
		return next()
	} catch {
		return res.sendStatus(401)
	}
}
