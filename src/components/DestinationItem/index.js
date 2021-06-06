import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="destination-div">
      <img src={imgUrl} className="destination-image" alt={`${name}-avatar`} />
      <h1 className="destination-name">{name}</h1>
    </li>
  )
}

export default DestinationItem
