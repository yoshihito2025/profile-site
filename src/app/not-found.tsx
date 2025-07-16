import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
