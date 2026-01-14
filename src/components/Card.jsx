export default function Card({ele}){
    return(
        <div className="flex flex-col gap-3 font-manrope max-w-60 ">
            <h1 className="text-6xl">{ele.number}</h1>
            <h1 className="text-lg font-medium">{ele.heading}</h1>
            <p className="font-[300]">{ele.description}</p>
        </div>
    )
}