export default function GlobalStyle({ children }) {
    return (
        <style global jsx>{`
            body {
                font-family: sans-serif;
                font-size: 30px;
            }
        `}
        </style>
    );
}