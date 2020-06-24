import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosGet(url) {
  const [obj, setObj] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setObj({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setObj({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch((error) => {
        setObj({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return obj;
}
