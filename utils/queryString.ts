import { getGroupByKey } from '@/utils/calculateResult';

export const generateQueryStringFromNestedResult = (result: { [group: string]: { [type: string]: number } }) => {
  const queryParams = new URLSearchParams();

  Object.values(result).forEach(values => {
    Object.entries(values).forEach(([type, percentage]) => {
      queryParams.append(type, String(percentage));
    });
  });

  return queryParams.toString();
};

export const reconstructResultFromQueryString = (queryString: string) => {
  console.log('queryString', queryString);
  const params = new URLSearchParams(queryString);
  const finalResult: { [group: string]: IScaleValue } = {};

  console.log('params', params);
  console.log(finalResult);

  params.forEach((value, key) => {
    const group = getGroupByKey(key);
    const percentage = parseFloat(value);

    if (!finalResult[group]) {
      finalResult[group] = {};
    }

    finalResult[group][key] = percentage;
  });

  return finalResult;
};
