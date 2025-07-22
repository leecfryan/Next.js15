import Link from "next/link";
import "@/styles/Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>Pet Treats</h2>
      <ul>
        <li>
          <Link href="/dashboard">Overview</Link>
        </li>
        <li>
          <Link href="/dashboard/treats">Treats</Link>
        </li>
        <li>
          <Link href="/dashboard/orders">Orders</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}
