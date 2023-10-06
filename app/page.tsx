import Friend from "./Friend";
import Chat from "./Chat";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const personsData = await response.json()
  

  return (
    <div className="flex" >
      <div className="bg-slate-500 w-32 aspect-square md:w-1/3  max-w-md h-screen flex flex-col items-center gap-4 py-4 overflow-auto">
        {personsData.map((user:any) => (
          <Friend key={user.username}>
          <div className="hidden xl:block">{user.username}</div>
          <div className="hidden md:block xl:hidden font-semibold">{user.username.slice(0,3)}...</div>
          <div className="md:hidden font-semibold">{user.username[0]}</div>
        </Friend>
        ))}
        <Friend>Momo</Friend>
      </div>
      <Chat username="Fuego"/>
    </div>
  );
}


