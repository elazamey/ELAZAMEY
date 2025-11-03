تimport Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            CELIA FASHION DESIGN
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-600 hover:text-gray-800">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/store3d" className="text-gray-600 hover:text-gray-800">
                3D Store
              </Link>
            </li>
            <li>
              <Link href="/databases" className="text-gray-600 hover:text-gray-800">
                Databases
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-blue-600 hover:text-blue-800">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
