import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
