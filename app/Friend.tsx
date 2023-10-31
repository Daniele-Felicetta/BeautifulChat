interface PropsFriend{
  children:React.ReactNode,
  onClick:()=>void
}



export default function Friend({children,onClick}:PropsFriend) {
  return (
    <div className="bg-white md:w-4/5 w-20 h-20 rounded-full flex justify-center md:justify-start items-center gap-8 py-8">
      <div className="hidden md:block bg-black w-8 aspect-square rounded-full ml-4"></div>
      <div >{children}</div>
    </div>
  );
}
