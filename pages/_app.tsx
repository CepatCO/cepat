import '../styles/global.css';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import SEO from '../next-seo.config';
import MDXComponents from '../components/MDXComponents';
import { AuthProvider } from '../providers/Auth';

// TODO: Figure out prism styles

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </MDXProvider>
    </ThemeProvider>
  );
}
