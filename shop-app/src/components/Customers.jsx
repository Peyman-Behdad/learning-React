import CustomersBox from "./CustomersBox";

function Customers({ customers }) {
  return (
    <div className="container mx-auto mt-20 space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-extrabold">OUR HAPPY CUSTOMERS</h2>
        <div className="flex items-center gap-3">
          <i className="ri-arrow-left-line text-2xl cursor-pointer"></i>
          <i className="ri-arrow-right-line text-2xl cursor-pointer"></i>
        </div>
      </div>
      <div className="flex items-center justify-between">
        {customers.map((customer) => (
          <CustomersBox key={customer.id} {...customer} />
        ))}
      </div>
    </div>
  );
}

export default Customers;
