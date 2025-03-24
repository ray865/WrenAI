import { IContext } from '../types/context';

export const getAppKeyFromContext = async (ctx: IContext): Promise<string> => {
  const appKeys = ctx.headers['x-app-key'];
  if (!appKeys) {
    throw new Error(
      'Missing app key, please set x-app-key header to your request',
    );
  }
  const appKey = Array.isArray(appKeys) ? appKeys[0] : appKeys;
  return appKey;
};
