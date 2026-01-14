import Card from "./Card";
export default function CardsContainer() {
  const data = [
    {
      number: "8",
      heading: "Years experience",
      description: "Improving homes with expert craftsmanship for years",
    },
    {
      number: "26",
      heading: "Projects completed",
      description:
        "Over 250 successful projects delivered with quality and care",
    },
    {
      number: "30",
      heading: "Skilled Tradespeople",
      description: "Our team of 30 experts ensures top-quality results",
    },
    {
      number: "100%",
      heading: "Client satisfaction",
      description: "All of our clients are satisfied with our work and service",
    },
  ];
  return (
    <div className="px-30 py-10 flex justify-between">
     {data.map((ele , idx) =>{
        return <Card ele = {ele}/>
     })}
    </div>
  );
}
