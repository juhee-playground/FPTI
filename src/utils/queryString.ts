import { getGroupByKey } from '@/utils/calculateResult';

export const generateQueryStringFromNestedResult = (result: { [group: string]: { [type: string]: number } }) => {
  const queryParams = new URLSearchParams();

  Object.values(result).forEach(values => {
    Object.entries(values).forEach(([type, percentage]) => {
      queryParams.append(type, String(percentage));
    });
  });

  return queryParams.toString(); // 쿼리스트링 반환
};

// 쿼리스트링에서 결과를 다시 객체로 변환하는 함수
export const reconstructResultFromQueryString = (queryString: string) => {
  const params = new URLSearchParams(queryString);
  const finalResult: { [group: string]: IScaleValue } = {};

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
