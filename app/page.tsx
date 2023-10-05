import Image from "next/image";

const users = [
  {
    username: "Momo",
    pic: "",
  },
  {
    username: "Fuego",
    pic: "",
  },
  {
    username: "Tony",
    pic: "",
  },
  {
    username: "Maio",
    pic: "",
  },
  {
    username: "Modasdamo",
    pic: "",
  },
  {
    username: "Momgfewo",
    pic: "",
  },
  {
    username: "Moqdfmo",
    pic: "",
  },
  {
    username: "Moqdfmo",
    pic: "",
  },
  {
    username: "Moqdfmo",
    pic: "",
  },
  {
    username: "Moqdfmo",
    pic: "",
  },
  {
    username: "Moqdfmo",
    pic: "",
  },
  {
    username: "Moqdfmo",
    pic: "",
  },
  {
    username: "Moqdfmo",
    pic: "",
  },
];

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-slate-500 w-1/3 h-screen flex flex-col items-center gap-4 py-4 overflow-auto">
        {users.map((user) => (
          <Friend key={user.username}>{user.username}</Friend>
        ))}
        <Friend>Momo</Friend>
      </div>
      <div className="bg-slate-900 w-2/3 h-screen"></div>
    </div>
  );
}

function Friend({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-4/5 h-20 rounded-full flex items-center gap-8 py-8">
      <div className=" bg-black w-16 aspect-square rounded-full ml-4"></div>
      <div>{children}</div>
    </div>
  );
}
