export default function useSound() {
  return (url:string) => {
    const audio = new Audio(url);
    audio.play()
  };
}