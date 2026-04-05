import React from "react";
import Link from "next/link"
export default function Navbar() {
  return (
    <nav>
        <ul className="flex gap-6 font-semibold  mr-[70px]">
          <li>
            <Link href="/Categories">Menu</Link>
          </li>
          <li>
            <Link href="/User_profile">My Orders</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
        </ul>
        </nav>
  );
}