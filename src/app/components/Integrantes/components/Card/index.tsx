type CardProps = {
    title: string;
    names: string[];
    onlyDescription?: boolean 
}

export default function Card({title, names, onlyDescription}: CardProps) {
 return (
   <div className={`w-72 md:w-full flex flex-col justify-start items-start ${onlyDescription ? "my-0" : "my-2 mt-5"}`}>
    {!onlyDescription && <h1 className="bg-blue-600 text-white px-5 py-2 rounded rounded-bl-none">{title}</h1>}
    <div className={`text-blue-600 bg-white flex flex-col justify-center items-center w-full gap-y-2 py-4 rounded ${!onlyDescription ? "rounded-tl-none" : ""}`}>
        {names.map(name => <p key={name} className={`${onlyDescription ? "mx-auto w-11/12 text-justify" : "w-full text-center uppercase"}`}>{name}</p>)}
    </div>
   </div>
 );
}