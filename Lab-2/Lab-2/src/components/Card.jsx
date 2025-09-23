export default function Card(props) {
  return (
    <div className="resort-card">
      <img src={props.image} alt={props.name} />
      <div className="info">
        <h3 className="country">{props.country}</h3>
        <p className="name">{props.name}</p>
        <p
          className="rating"
          style={{ color: props.rating > 4 ? "#008000" : "#d32f2f" }}
        >
          ★ {props.rating}
        </p>
        <p className="price">${props.price}/night</p>
      </div>
    </div>
  );
}
