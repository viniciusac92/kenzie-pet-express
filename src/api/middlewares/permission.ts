import { NextFunction, Request, Response } from 'express';
import { UserPayload } from '../../interfaces';

export const isSuperUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const user = req.user;
    if (!user) {
        return res.status(401).send();
    }

    const { is_superuser } = user as UserPayload;
    if (!is_superuser) {
        return res.status(403).send();
    }

    return next();
};
