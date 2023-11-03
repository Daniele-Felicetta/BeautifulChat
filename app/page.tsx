'use client'

import Friend from "./Friend";
import Chat from "./Chat";
import { useState } from "react";

interface PersonDataI{
  username:string;
}

export default  function Home() {
  const [personsData, setPersonsData]=useState<PersonDataI[]>([]);

  const dataFetching= async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const personsData = await response.json();
    setPersonsData(personsData);
  }

  dataFetching();
  const [currentUser, setCurrentUser]=useState("Fuego");


  return (
    <div className="flex">
      <div className="bg-slate-500 w-32 aspect-square md:w-1/3  max-w-md h-screen flex flex-col items-center gap-4 py-4 overflow-auto">
        {personsData.map((user:PersonDataI, index:number) => (
          <Friend user={user.username} setCurrentUser={setCurrentUser} key={user.username}>
            <div className="hidden xl:block">{user.username}</div>
            <div className="hidden md:block xl:hidden font-semibold">{user.username.slice(0,3)}...</div>
            <div className="md:hidden font-semibold">{user.username[0]}</div>
          </Friend>
        ))}
      </div>
      <Chat username={currentUser}/>
    </div>
  );
}


