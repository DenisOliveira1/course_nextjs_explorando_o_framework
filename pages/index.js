import Link from '../src/components/Link'
import Title from '../src/components/Title'

export default function HomePage() {
    return (
        <div>
            <Title as="h1">Alura Cases - Home</Title>
            <Link href="/faq">
                Ir para o FAQ
            </Link>
        </div>
    )
}