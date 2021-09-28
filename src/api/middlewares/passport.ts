import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { getRepository } from 'typeorm';
import config from '../../config/passport';
import { User } from '../../entity';

export default () => {
    const optionsStrat: StrategyOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secret,
    };

    const verify = async (jwt_payload: any, done: any) => {
        const repo = getRepository(User);
        const user = await repo.findOne({
            where: { username: jwt_payload.username },
        });
        done(null, user ? user : false);
    };

    return new Strategy(optionsStrat, verify);
};
