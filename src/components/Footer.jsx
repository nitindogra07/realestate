export default function Footer() {
  const data = ["Home", "About", "Services", "Contact"];

  return (
    <div className="px-5 py-5 text-white ">
        <div className="flex font-manrope rounded-lg">

      <div className="w-1/2  p-10 border-b bg-gray rounded-tl-lg pl-25 py-10 rounded-bl-lg border-neutral-500">
        <h1 className="text-3xl font-bold">Realbizz</h1>
        <p className="text-neutral-400 mt-3">
          Building modern web experiences.
        </p>
      </div>


      <div className="w-1/2 flex justify-end border-b bg-gray pr-25 py-10 rounded-tr-lg rounded-br-lg border-neutral-300">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl mb-2">Quick Links</h1>

          {data.map((ele, idx) => (
            <a
              key={idx}
              href="#"
              className="text-neutral-400 hover:text-white transition"
            >
              {ele}
            </a>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
