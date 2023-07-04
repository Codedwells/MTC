import Link from 'next/link';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<nav className='text-[#15202b] p-5 flex justify-between px-[8rem]'>
				<Link href='/' className='font-bold text-3xl'>
					MTC
				</Link>

				<div className=' flex space-x-8 font-Nunito font-sm items-center px-4'>
					<Link href='/about'>About</Link>
					<Link href='/about'>Feed</Link>
					<Link href='/about'>Communities</Link>
					<Link href='/about'>login</Link>
				</div>
			</nav>
			{children}
		</>
	);
};
