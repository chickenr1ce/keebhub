// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link href="/inventory">Inventory</Link> |{' '}
      <Link href="/social">Social</Link>
    </nav>
  );
}
