import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta http-equiv='X-UA-Compatible' content='ie=edge' />
				<meta http-equiv='X-UA-Compatible' content='IE=7' />
				<meta
					name='keywords'
					content='Tech-community,community,meetup,meet-up'
				/>
				<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
				<meta
					name='description'
					content='Join a community near you. We offer you a simple way to find a community closest to you'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
