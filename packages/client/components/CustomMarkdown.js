import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const renderers = {
    code: ({language, value}) => {
        return <SyntaxHighlighter language={language} children={value} style={vscDarkPlus} />
    }
}

const CustomMarkdown = (props) => (
    <ReactMarkdown className="markdown-body" renderers={renderers} children={props.markdown} />
)

export default CustomMarkdown
