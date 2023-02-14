// Write your code here.
import './index.css'

const Card = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} className="pic" />
    </li>
  )
}

export default Card
