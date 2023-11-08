import Link from '../src/components/Link'
import Title from '../src/components/Title'

export default function Page404() {
    return (
        <div>
            <Title as="h1">404 - Não Encontrado</Title>
            <Link href="/">
                Ir para a Home
            </Link>
        </div>
    )
}