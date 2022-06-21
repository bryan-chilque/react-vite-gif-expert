import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    /*Una función async puede contener una expresión await, la cual pausa la ejecución de la función 
asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de 
la función async y devuelve el valor resuelto. */
    //const [images, setImages] = useState([]);
    //data:images =>renombra data por images
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__flipInY">{category}</h3>
            {isLoading&& <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                    {
                        images.map((image) => (
                            <GifItem key={image.id} {...image} />
                        ))
                    }
                
            </div>
        </>
    )
}
