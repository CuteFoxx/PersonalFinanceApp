import axios, { type AxiosRequestConfig, type Method } from "axios";
import { useEffect, useState } from "react";

interface useFetchProps<D = unknown> {
  url: string;
  method?: Method;
  data?: D;
  config?: Omit<AxiosRequestConfig<D>, "url" | "method" | "data">;
}

export default function useFetch<R = unknown, D = unknown>({
  url,
  method,
  data,
  ...config
}: useFetchProps<D>) {
  const [result, setResult] = useState<R | null>(null);
  const [err, setErr] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .request<R>({
        url,
        method,
        data,
        ...config,
      })
      .then((res) => setResult(res.data))
      .catch((e) => setErr(e))
      .finally(() => setIsLoading(false));
  }, [config, data, method, url]);

  return { result, err, isLoading };
}
