import TextField from "@/components/textfield";

export default async function Test({}) {
  
  const item1 = <TextField identifier="alpha" type="email" placeholder="email@domain.com" label="Email"></TextField>;
  const item2 = <TextField identifier="bravo" type="text" placeholder="NameIUse" label="Username"></TextField>;
  const item3 = <TextField identifier="charlie" type="password" placeholder="WordtoPass" label="Password"></TextField>;


  return (
    <div className="h-[70vh] w-full border-2 border-red-500 rounded p-10 flex justify-evenly align-center">
      {item1}
      <div className="flex align-center justify-evenly flex-col">
        {item2}
        {item3}
      </div>
    </div>
  );
}