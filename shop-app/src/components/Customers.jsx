import CustomersBox from "./CustomersBox";

function Customers({ customers }) {
  return (
    <section className="container mt-20 space-y-10">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-5xl font-extrabold max-sm:text-4xl">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex items-center gap-3">
          <i className="ri-arrow-left-line text-2xl cursor-pointer"></i>
          <i className="ri-arrow-right-line text-2xl cursor-pointer"></i>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {customers.map((customer) => (
          <li key={customer.id}>
            <CustomersBox {...customer} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Customers;
