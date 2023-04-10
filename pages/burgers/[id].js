import Image from 'next/image';
import styles from '../../styles/burgers.module.css';

export const getStaticPaths = async()=> {
    const response = await fetch('http://localhost:5000/items')
    const data = await response.json()

    const paths = data.map(item => {
        return{
            params: {id: item.id}
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async({params}) => {
    const {id} = params
    const response = await fetch(`http://localhost:5000/items/${id}`)
    const burger = await response.json()

    return{
        props: {burger}
    }
}
const Details = ({burger}) => {
    console.log('details >>',burger);
    return(
        <div className={styles.singleBurger}>
        <h1>{ burger.name }</h1>
          <div className={styles.imageContainer}>
            <Image 
              src={`${burger.image}`} 
              alt={`${burger.name}`} 
              width="100" 
              height="100" 
              layout="responsive" 
              objectFit="cover"
            />
          </div>
          <div>
            <p>{ burger.desc }</p>
        </div>
      </div>
    )
}

export default Details