import './Feed.css'

const Feed = ({ imageUrl, title, description }) => {
  return (
    <div className="feed-item">
       {imageUrl && <img src={imageUrl} alt={title} className="feed-item-image" />}
      <h3 className="feed-item-title">{title}</h3>
      <p className="feed-item-description">{description}</p>
    </div>
  )
}

export default Feed
