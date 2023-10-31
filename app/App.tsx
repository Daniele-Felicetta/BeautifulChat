

import React from 'react'
import Friend from "./Friend";
import Chat from "./Chat";
import { useState } from "react";

function App(personsData:any) {
    const [user, setUser]=useState("Fuego");
    return (
        <div className="flex" >
          <div className="bg-slate-500 w-32 aspect-square md:w-1/3  max-w-md h-screen flex flex-col items-center gap-4 py-4 overflow-auto">
            {personsData.map((user:any, index:number) => (
              <Friend onClick={()=>{setUser(personsData[index].username)}} key={user.username}>
                <div className="hidden xl:block">{user.username}</div>
                <div className="hidden md:block xl:hidden font-semibold">{user.username.slice(0,3)}...</div>
                <div className="md:hidden font-semibold">{user.username[0]}</div>
              </Friend>
            ))}
          </div>
          <Chat username={user}/>
        </div>
      );
}

export default App