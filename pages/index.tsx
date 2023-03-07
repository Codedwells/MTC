import Head from 'next/head';
import Image from 'next/image';

import bannerImage from '../public/banner.png'

export default function Home() {
	return (
		<>
			<Head>
				<title>MTC</title>
			</Head>
			<section className='flex justify-center space-x-[6rem] text-[#15202b] mt-[6rem]'>
				<div className=''>
					<Image
						src={bannerImage}
						alt='A 3d illustration of a person writing code'
						width={500}
						height={500}
					/>
				</div>
				<div className=''>
					<p className='font-700 text-[3em] whitespace-normal max-w-[18rem] pt-[3rem]'>Welcome to the community</p>
				</div>
			</section>
		</>
	);
}
