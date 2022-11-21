import Head from 'next/head';
import { Header } from './Header';

export function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
                { children }
            </main>
        </div>
    );
}
