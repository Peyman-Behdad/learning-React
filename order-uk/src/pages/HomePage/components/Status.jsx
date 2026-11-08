const statusItems = [
  {
    id: 1,
    num: "546+",
    text: "Registered Riders",
  },
  {
    id: 2,
    num: "789,900+",
    text: "Orders Delivered",
  },
  {
    id: 3,
    num: "690+",
    text: "Restaurants Partnered",
  },
  {
    id: 4,
    num: "17,457+",
    text: "Food items",
  },
];

function Status() {
  return (
    <div className="container mx-auto">
      <div className="bg-orange-400 flex flex-col lg:flex-row justify-between items-center max-lg:gap-y-15 px-10 py-6 rounded-xl">
        {statusItems.map((item) => (
          <div key={item.id} className="text-white text-center space-y-1">
            <p className="text-4xl md:text-5xl font-thin">{item.num}</p>
            <p className="text-base md:text-lg font-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Status;
