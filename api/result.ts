import dataResult from '@/data/DB_RESULTS.json';

export const findResultById = (fpti: string) => {
  return dataResult.find(item => item.fpti === fpti) || null;
};
