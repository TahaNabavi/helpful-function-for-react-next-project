"use client";
import axios, { AxiosRequestHeaders, Method } from "axios";
import { CookGet } from "./cookie";

// setup cookie for bearer auth
// add env NEXT_PUBLIC_API_BASE_URL for base url

export async function Fetch<D>(
  onSuccess: (data: {
    data: D;
    message: string;
    success: boolean;
    status_code: number;
  }) => void,
  onError: (error: {
    data: D;
    message: string;
    success: boolean;
    status_code: number;
  }) => void,
  config: {
    method: "post" | "get" | "put" | "delete" | "patch";
    url: string;
    data?: any;
    params?: any;
    headers?: AxiosRequestHeaders;
    base?: boolean;
    auth?: boolean;
  }
) {
  const { method, url, data, params, headers, base = true, auth } = config;

  const resHeaders = auth
    ? { authorization: `Bearer ${CookGet("jwt")}`, ...headers }
    : headers;

  try {
    const response = await axios({
      method: method as Method,
      url: base ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}` : url,
      data,
      params,
      headers: resHeaders,
    });

    console.log(response)

    const resData = response.data as {
      data: D;
      message: string;
      success: boolean;
      status_code: number;
    };
    if (resData.success) {
      onSuccess(resData);
    } else {
      onError(resData);
    }
  } catch (error: any) {
    console.error("Axios error:", error);
    onError(error);
  }
}
