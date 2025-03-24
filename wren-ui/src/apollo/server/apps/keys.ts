const APP_KEYS = [
  'h31tx1inchlk6xku',
  'MID-E53wKKWTqNzK7ccC',
  'u7unpdh6ehtvrt4b',
  'hzpzvyztoqsxchve',
  'tpi2xy2tg04r2yih',
  'MID-otzQVokbxhN3U9KB',
  'MID-D-RRLYBHrmPPOmm3jL',
  'MID-D-4VMFnTg0xmwfIE1W',
  'MID-MQZcupsb0vaJneBC',
  'MID-w04hXgbIjqQRuVSa',
];

export const checkValidAppKey = async (appKey: string): Promise<boolean> => {
  return APP_KEYS.includes(appKey);
};
