import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl as syntaxTheme } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const codeString = `
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
  <script src="js/scripts.js"></script>
</body>
</html>>
    `

interface CodeBlockProps {
    className?: string
}
const CodeBlock = ({ className }: CodeBlockProps) => {
    return (
        <div>
            <SyntaxHighlighter
                className="rounded-lg font-bold border border-gray-400 max-w-xl"
                language="html"
                style={syntaxTheme}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeBlock
