import { TransformArgumentsReply } from '.';
import { transformReplySortedSetWithScores } from './generic-transformers';
import { ZRangeByScoreOptions, transformArguments as transformZRangeByScoreArguments } from './ZRANGEBYSCORE';

export { FIRST_KEY_INDEX, IS_READ_ONLY } from './ZRANGEBYSCORE';

export function transformArguments(
    key: string,
    min: number | string,
    max: number | string,
    options?: ZRangeByScoreOptions
): TransformArgumentsReply {
    return [
        ...transformZRangeByScoreArguments(key, min, max, options),
        'WITHSCORES'
    ];
}

export const transformReply = transformReplySortedSetWithScores;