import { useCallback, useEffect, useMemo, useState } from 'react';
import React from 'react';

function removeNullParams(params = {}) {
  let validParam = {};
  for (let key in params) {
    if (params[key] !== null) {
      validParam[key] = params[key];
    }
  }
  return validParam;
}

export function useFetchFun(fn = () => {}, params = { page: 0, per_page: 2000 }, realtime = false) {
  const options = removeNullParams(params);
  const queryInit = useMemo(() => {
    return { ...options };
  }, [options]);

  const [queryObject, updateQueryObject] = useState(queryInit);

  let fetcher = useCallback(
    (parm) => {
      return fn({ ...parm });
    },
    [fn]
  );

  useEffect(() => {
    fetcher(queryObject);
    let event = 0;
    if (realtime) {
      event = setInterval(() => {
        fetcher(queryObject);
      }, 3000);
    }
    return () => clearInterval(event);
  }, [queryObject, fetcher, realtime]);

  const resetQuery = React.useCallback(() => {
    updateQueryObject(queryInit);
  }, [queryInit]);

  return [queryObject, updateQueryObject, resetQuery];
}
