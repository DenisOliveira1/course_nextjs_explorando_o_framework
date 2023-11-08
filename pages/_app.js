import GlobalStyle from '../src/theme/GlobalStyle'

function MyApp({Component, props}) {
    return (
        <>
            Middleware
            <GlobalStyle/>
            <Component {...props} />
        </>
    )
}

export default MyApp;