import useSWR from 'swr'
import CustomMarkdown from '../components/CustomMarkdown'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    const {data, error} = useSWR('/api/summary', fetcher)

    console.log(data, error)

    if (error) {
        return null
    }

    if (!data) {
        return null
    }
    return (
        <div>
            <CustomMarkdown
                markdown={data.body}
            />
        </div>
    )
}
