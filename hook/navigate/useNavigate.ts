import { useRouter } from "next/navigation";

export default function useNavigate() {
  const router = useRouter();

  return (href: string) => {
    router.push(href);
  };
}
