import type { AppProps } from 'next/app';
import '../styles/styles.css';     // ✅ Add your global styles here
import '../styles/global.css';     // ✅ Also include global.css if not already

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
