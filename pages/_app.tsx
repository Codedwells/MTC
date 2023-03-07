import '@/styles/globals.css';
import { Montserrat } from "next/font/google";
import type { AppProps } from 'next/app';
import {Layout} from './components/layout/index';

const font = Montserrat({ weight: '500' });
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={font.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</main>
	);
}
