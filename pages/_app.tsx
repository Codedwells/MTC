import '@/styles/globals.css';
import { Montserrat } from "next/font/google";
import type { AppProps } from 'next/app';
import {Layout} from './components/layout/index';
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>

		</main>
	);
}
