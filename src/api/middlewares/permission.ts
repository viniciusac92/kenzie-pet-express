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

    console.log(user);

    const { is_superuser } = user as UserPayload;
    console.log('dentro do permission >>', is_superuser);
    if (!is_superuser) {
        console.log('entrou dentro do if');
        return res.status(403).send();
    }

    return next();
};
