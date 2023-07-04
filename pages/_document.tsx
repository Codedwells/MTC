import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta
					name='keywords'
					content='Tech-community,community,meetup,meet-up'
				/>
				<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
				<meta
					name='description'
					content='Join a community near you. We offer you a simple way to find a community closest to you'
				/>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Inter:wght@500;600;700;800;900&family=Poppins:wght@200;300;400;500;600;700;800&family=Manrope:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&family=Nunito:wght@300;400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
