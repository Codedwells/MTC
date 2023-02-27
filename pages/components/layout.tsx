import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<nav className='bg-red-200 p-2 flex justify-start space-x-8'>
				<Link href='/' className='hover:bg-teal-600 p-2 rounded-lg'>
					Home
				</Link>
				<Link href='/about' className='hover:bg-teal-600 p-2 rounded-lg'>
					About
				</Link>
			</nav>
			{children}
		</div>
	);
};

export default Layout;
