export function matchEmail(email: string): boolean {
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

export function matchURL(url: string): boolean {
  const regex = /https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*/;
  return regex.test(url);
}

export function matchIPAddress(ip: string): boolean {
  const regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  return regex.test(ip);
}

export function matchDate(date: string): boolean {
  const regex = /\b\d{4}-\d{2}-\d{2}\b/;
  return regex.test(date);
}

export function matchHexColor(color: string): boolean {
  const regex = /#?([a-fA-F\d]{6}|[a-fA-F\d]{3})/;
  return regex.test(color);
}

export function matchUsername(username: string): boolean {
  const regex = /^[a-zA-Z0-9_]{3,16}$/;
  return regex.test(username);
}

export function matchPassword(password: string): boolean {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

export function matchPhoneNumber(phone: string): boolean {
  const regex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return regex.test(phone);
}

export function matchHTMLTag(tag: string): boolean {
  const regex = /<[^>]+>/;
  return regex.test(tag);
}

export function matchDigitsOnly(input: string): boolean {
  const regex = /^\d+$/;
  return regex.test(input);
}

export function matchNonDigits(input: string): boolean {
  const regex = /^\D+$/;
  return regex.test(input);
}

export function matchAlphanumeric(input: string): boolean {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(input);
}

export function matchNonAlphanumeric(input: string): boolean {
  const regex = /^[^\w]+$/;
  return regex.test(input);
}

export function matchWhitespace(input: string): boolean {
  const regex = /\s+/;
  return regex.test(input);
}

export function matchNonWhitespace(input: string): boolean {
  const regex = /\S+/;
  return regex.test(input);
}

export function matchLowercaseLetters(input: string): boolean {
  const regex = /^[a-z]+$/;
  return regex.test(input);
}

export function matchUppercaseLetters(input: string): boolean {
  const regex = /^[A-Z]+$/;
  return regex.test(input);
}

export function matchCreditCardNumber(cardNumber: string): boolean {
  const regex = /^(?:\d{4}[-\s]?){3}\d{4}$/;
  return regex.test(cardNumber);
}

export function matchTime24Hour(time: string): boolean {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(time);
}

export function matchMACAddress(mac: string): boolean {
  const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return regex.test(mac);
}
