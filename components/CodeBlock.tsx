import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue as syntaxTheme } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface CodeBlockProps {
    codeString: string
    language?: string
}
const CodeBlock = ({ codeString, language = 'javascript' }: CodeBlockProps) => {
    return (
        <div className="w-full">
            <SyntaxHighlighter
                className="rounded-md mx-2 leading-8"
                language={language}
                style={{ ...syntaxTheme }}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeBlock
