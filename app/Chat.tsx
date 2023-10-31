import messages from "./messages"
import me from "./messages";
interface PropsChat{
  username:string,
}
type UserMessage = keyof typeof messages;

export default function Chat({username}:PropsChat) {
  const userRef=username as UserMessage;
  const actualChatUser=messages[userRef];
  return (
    <div className="w-full bg-black flex justify-center">
        <div className="bg-slate-500 w-5/6 flex flex-col justify-start gap-12">
          <div className="w-full h-20 bg-slate-100 flex justify-center items-center">
            <h1 className="text-xl font-semibold">{username}</h1>
          </div>
          {actualChatUser.map(message =>{
            return(
            message.sender==username?
              //Messaggi in entrata
              <div className="bg-red-500 self-start rounded-lg p-2 ml-2" key={message.date.toLocaleTimeString()}>
                <p>{message.message}</p>
                <p className="text-xs">{message.date.toLocaleTimeString()}</p>
              </div>
            :
              //Messaggi in uscita
              <div className="bg-red-500 self-end rounded-lg p-2 mr-2" key={message.date.toLocaleTimeString()}>
              <p>{message.message}</p>
              <p className="text-xs text-end">{message.date.toLocaleTimeString()}</p>
            </div>     
          )}
          )}
        </div>
        <div>
          
        </div>
    </div>
  )    
}
