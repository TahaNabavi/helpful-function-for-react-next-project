export default function Time(
  date: number | Date,
  tomili: boolean = true
): string {
  const now = new Date();
  if (tomili && typeof date === "number") date = date * 1000;
  const diff = now.getTime() - (date instanceof Date ? date.getTime() : date);

  if (diff < 60000) {
    return "new";
  } else if (diff < 3600000) {
    return `${Math.floor(diff / 60000)} minutes ago`;
  } else if (diff < 86400000) {
    return `${Math.floor(diff / 3600000)} hours ago`;
  } else if (diff < 604800000) {
    return `${Math.floor(diff / 86400000)} days ago`;
  } else if (diff < 2592000000) {
    return `${Math.floor(diff / 604800000)} weeks ago`;
  } else if (diff < 31536000000) {
    return `${Math.floor(diff / 2592000000)} months ago`;
  } else {
    return `${Math.floor(diff / 31536000000)} years ago`;
  }
}
