import Head from 'next/head';
import Image from 'next/image';
import { Heading } from '@chakra-ui/react'

// @ts-ignore
import bannerImage from '../assets/banner.png'

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
					<p className='font-700 text-[3em] lgs:text-[4em] text-gray-700 leading-tight whitespace-normal font-Inter font-[900] max-w-[18rem] lgs:max-w-[25rem] lgs:text-center pt-[3rem]'>Welcome to the community</p>
				</div>
			</section>
		</>
	);
}
