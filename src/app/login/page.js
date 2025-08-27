import TextField from "@/components/textfield";

export default async function Login() {
  return(
    <div className="flex justify-evenly mx-[10vw] h-[80vh]">
      <div className="mt-16">
        <div>Login Label</div>
        <TextField className="" label="Username or Email" placeholder="Username" type="default"></TextField>
        <TextField className="" label="Password" type="default"></TextField>
        <div>forgot Password button</div>
        <div>Login Button</div>
      </div>
      <div className="border"></div>
      <div className="mt-16">
        <div>Signup Label</div>
        <div>User Name</div>
        <div>User Name label</div>
        <div>email</div>
        <div>email label</div>
        <input type="text">password</input>
        <div>password label</div>
        <div>confirm password</div>
        <div>confirm password label</div>
        <div>Signup</div>
      </div>
    </div>
  );
}