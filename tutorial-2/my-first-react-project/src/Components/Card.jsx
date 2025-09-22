export default function Card(props) {
  return (
    <div className="card-component">
      <img src={props.image} alt="" width={"100px"} />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
}
