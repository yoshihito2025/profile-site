import Link from "next/link";
import styles from "./styles/Breadcrumbs.module.css";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <ul className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <li key={index}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className={styles.separator}>&gt;</span>
          )}
        </li>
      ))}
    </ul>
  );
}
