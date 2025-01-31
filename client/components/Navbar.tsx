// components/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-xl font-bold text-gray-800">VandyCV</span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                href="/"
                                className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/' ? 'text-gray-900 bg-gray-100' : ''
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/resume"
                                className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${router.pathname === '/resume' ? 'text-gray-900 bg-gray-100' : ''
                                    }`}
                            >
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;