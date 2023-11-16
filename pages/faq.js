import Link from '../src/components/Link'

// o getStaticProps roda uma vez, pega as informaçoes do GET e armazena antes do start no yarn dev ou
// antes do yarn export, que faz o build, logo se o build for reexecutado, mesmo que o retorno do GET mude,
// ele sera o mesmo do momento do build.
// ou seja, mesmo se o site do GET cair, o nosso serviço vai apresentar o conteudo que pass a ser de forma estatica
export async function getStaticProps() {
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

    const faq = await fetch(FAQ_API_URL)
        .then((response) => response.json())
        .then((response) => {
            console.log("1", response);
            return response;
        });
    console.log("2", faq);
    
    return {
        props: {
            faq
        }
    };
}

export default function FAQPage({ faq }) {
    console.log("3", faq);
    return (
        <div>
            <h1>Alura Cases - FAQ</h1>
            <Link href="/">
                Ir para a Home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}