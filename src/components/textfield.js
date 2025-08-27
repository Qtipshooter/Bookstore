export default async function TextField(props){
  const label = props.label;
  const placeholder = props.placeholder;

  return (
    <div className="border-[3px]">
      <label htmlFor="">{label}</label>
      <input className="w-full border-1" type="text"></input>
    </div>
  );

}