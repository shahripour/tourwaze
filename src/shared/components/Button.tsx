import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  href,
  className = "",
}: Props) {

  const style =
    `premium-btn px-6 py-3 rounded-xl font-semibold ${className}`;

  if (href) {
    return (
      <Link href={href} className={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={style}>
      {children}
    </button>
  );
}