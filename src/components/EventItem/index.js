// Write your code here
const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img className={eventImageClassName} src={imageUrl} alt="event" />
      </button>

      <p className="item-name">{name}</p>
      <p className="item-location">{location}</p>
    </li>
  )
}
export default EventItem
