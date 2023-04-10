
import Head from "next/head"
function Reviews({reviews}) {
  return (
    <>
        <Head>
        <title>Reviews | reviews users</title>
        <meta name='title' content='usersReviews'/>
        </Head>
        <div>
            <h1>reviews clients</h1>
            <div className="reviews">
                {!!reviews.length && reviews?.slice(0,50)?.map(item => {
                    return(
                        <div key={item?.id}>
                            {item?.id} {' '}
                            {`${item?.body.slice(0, 50)}...`}
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()

    return{
        props:{
            reviews: data.slice(0, 30)
        }
    }
}

export default Reviews