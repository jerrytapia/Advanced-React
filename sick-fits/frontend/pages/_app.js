import Page from '../components/Page';

// disabling the ESlint errors that highlight Component and pageProps bc it wants prop types
// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
