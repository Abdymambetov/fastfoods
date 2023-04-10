import Link from "next/link"
import classes from '../../styles/burgers.module.css'
import Image from "next/image"

export const getStaticProps =  async() => {
    const response = await fetch('http://localhost:5000/items')
    const data = await response.json()

    return{
        props: {
            burgers: data
        }
    }
}

const Burgers = ({burgers}) => {
    console.log('props >>', burgers);
    return(
        <div>
            <h1>Ours Burgers</h1>    
            {burgers.map(item => (
                <Link href={`/burgers/${item?.id}`} key={item?.id}>
                    <div className={classes.burgerCard}>
                        <div className={classes.imageContainer}>
                            <Image 
                                src={`${item?.image}`} 
                                alt={`${item?.name}`} 
                                width="100" 
                                height="100"
                                Layout="responsive" 
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <h3>{item?.name}</h3>
                            <p>{item?.desc}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Burgers