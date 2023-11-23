module.exports = {
    trailingSlash: true,
    async redirects(){
        return [
            {
                source: '/perguntas',
                destination: '/faq',
                permanent: true
            },
            {
                source: '/perguntas2',
                destination: '/faq',
                permanent: false
            }
        ]
    }
}