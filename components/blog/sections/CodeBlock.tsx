import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveLight as syntaxTheme } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Copy } from 'react-feather'
import { useState } from 'react'

interface CodeBlockProps {
    codeString: string
    language?: string
    showLanguage?: boolean
}
const CodeBlock = ({
    codeString,
    language = 'javascript',
    showLanguage = true,
}: CodeBlockProps) => {
    const [copied, setCopied] = useState<boolean>(false)
    return (
        <div className="relative w-full" dir="ltr">
            <SyntaxHighlighter
                className="mx-2 rounded-md text-base leading-8"
                language={language}
                style={{ ...syntaxTheme }}
            >
                {codeString}
            </SyntaxHighlighter>
            <div
                className="absolute top-4 right-8 cursor-pointer"
                onClick={async () => {
                    navigator.clipboard?.writeText(codeString)
                    setCopied(true)
                    await new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(setCopied(false))
                        }, 3000)
                    })
                }}
            >
                {copied ? (
                    <span className="text-lightblue-600">Copied!</span>
                ) : (
                    <Copy className="text-gray-500" />
                )}
            </div>
            {showLanguage && (
                <div className="absolute bottom-1 right-8 font-mono text-xs uppercase text-gray-400">
                    {language}
                </div>
            )}
        </div>
    )
}

export default CodeBlock
