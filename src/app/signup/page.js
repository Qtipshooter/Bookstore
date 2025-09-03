import TextField from "@/components/textfield";
import Form from "next/form";

export default async function Login() {
  
  return(
    <div className="flex justify-evenly mx-[10vw] h-[80vh]">
      <Form className="mt-16 flex flex-col gap-2 m-auto p-20 px-50 bg-linear-to-r from-secondary-bg via-primary-bg to-secondary-bg" action="/signup-post">
        <div className="text-5xl border-b-3 pb-2">Signup</div>
        <TextField id="signup-user" type="" placeholder="" label="Username" autofocus/>
        <TextField id="signup-email" type="" placeholder="" label="Email Address"/>
        <TextField id="signup-password" type="password" placeholder="" label="Password"/>
        <TextField id="signup-verify-password" type="password" placeholder="" label="Verify Password"/>
        <button type="submit" className="bg-white/60 px-2 py-1 border-4 border-double rounded-lg mx-auto">Signup</button>
      </Form>
    </div>
  );
}