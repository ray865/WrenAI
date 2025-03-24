import * as crypto from 'crypto';

export const getEncryptedDBName = async (appKey: string): Promise<string> => {
  // Generate SHA256 hash for appId
  const hasher = crypto.createHash('sha256');
  hasher.update(`matchID_app_${appKey.replace(/-/g, '_')}`);
  const hashStr = hasher.digest('hex');

  // Use last 40 characters of the hash
  return `app_${hashStr.slice(-40)}`;
};
