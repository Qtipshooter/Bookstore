export default async function BookTile(props) {
  const title = props.title;

  return(
    <div className="border-2 rounded-full p-2">
      <div>{title}</div>
    </div>
  );
}