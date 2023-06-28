import './ItemDetail.css'

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="container">
      <h2>Nombre {nombre} </h2>
      <img className="detailImg" src={img} alt={nombre} />
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam deleniti ducimus aut rem omnis nihil corporis esse, minus, vitae, praesentium recusandae sunt earum eveniet. Cum repudiandae asperiores blanditiis esse illum.</p>
    </div>
  )
}

export default ItemDetail