export async function postData(
  data: object,
  url: string,
  callback: (res: any) => void,
  headers: any = { "Content-Type": "application/json" }
): Promise<any> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    callback(await response.json());
  } catch (error) {
    console.log("fetch error");
    throw error;
  }
}
