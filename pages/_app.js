import GlobalStyle from '../src/theme/GlobalStyle'

function MyApp({Component, pageProps }) {
    return (
        <>
            Middleware
            <GlobalStyle/>
            <Component {...pageProps } />
        </>
    )
}

export default MyApp;