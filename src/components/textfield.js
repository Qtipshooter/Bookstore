'use client';

export default function TextField({label, placeholder, id, type}){

  return (
    <div className=" flex justify-between gap-2 p-1 align-center">
      <label htmlFor={id} className="text-wrap w-1/3">{label}</label>
      <input id={id} className="w-2/3 border-1 rounded-sm h-fit m-auto" type={type} placeholder={placeholder}></input>
    </div>
  );
}
