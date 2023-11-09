import Link from '../src/components/Link'
import { useEffect, useState } from 'react'



export default function FAQPage() {

    const [faq, setFaq] = useState([]);
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

    useEffect(() => {

        fetch(FAQ_API_URL)
            .then((response) => response.json())
            .then((response) => {
                setFaq(response);
                console.log(response)
            })
    }, []);

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