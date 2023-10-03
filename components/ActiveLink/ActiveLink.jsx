"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ children, href, className }) {
  const pathname = usePathname();

  const style = { color: pathname === href && "#FF0336" };

  return (
    <Link href={href} style={style} className={className}>
      {children}
    </Link>
  );
}
