interface PropsChat{
  username:string,
}
const messages= [
  {
    sender: "Fuego",
    message: "Lorem ipsum vaffanculem drogatum di mierda",
    date: new Date("2023-10-06T03:24:00"),
  },
  {
    sender: "Fuego",
    message: "Sono fuego weeeee",
    date: new Date("2023-10-06T03:25:00"),
  },
  {
    sender: "Tony",
    message: "Sono Tony il top student, STUDIA IL CAZZO DI REACT",
    date: new Date("2023-10-06T03:26:00"),
  },
  {
  sender: "Fuego",
    message: "NON MI VAAAAAAAAA",
    date: new Date("2023-10-06T03:27:00"),
  }
]

export default function Chat({username}:PropsChat) {
  return (
    <div className="w-full bg-black flex justify-center">
        <div className="bg-slate-500 w-5/6 flex flex-col justify-start gap-12">
          <div className="w-full h-20 bg-slate-100 flex justify-center items-center">
            <h1 className="text-xl font-semibold">{username}</h1>
          </div>
          { messages.map(message =>{
            return(
            message.sender==username ?
              <div className="bg-red-500 self-start">
                <p>{message.message}</p>
                <p className="text-xs">{message.date.toLocaleTimeString()}</p>
              </div>
              :
              <div className="bg-red-500 self-end">
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
