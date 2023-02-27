import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>MTC</title>
			</Head>
			<h3 className='text-3xl text-center'>Home</h3>
			<div className='bg-orange-400'>Hello there</div>
		</>
	);
}
