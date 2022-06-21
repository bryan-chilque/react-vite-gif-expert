
export const GifItem = ({title, url}) => {
  return (
    // alt= si la imagen no carga, se mostrara este titulo
    <div className="card animate__animated animate__flipInY">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
