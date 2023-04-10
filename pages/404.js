import Link from "next/link"

function NotFoundPage() {
  return (
    <div className='not-found'>
        <h1>ohh...</h1>
        <h2>Not found</h2>
        <p>go back <Link href='/'>increase one</Link></p>
    </div>
  )
}

export default NotFoundPage