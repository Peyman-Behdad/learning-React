import CustomersBox from "./CustomersBox";

function Customers({ customers }) {
  return (
    <div className="container mx-auto mt-20 space-y-10">
      <div className="flex justify-between items-center">
        <p className="text-5xl font-extrabold">OUR HAPPY CUSTOMERS</p>
        <div className="flex items-center gap-3">
          <i class="ri-arrow-left-line text-2xl cursor-pointer"></i>
          <i class="ri-arrow-right-line text-2xl cursor-pointer"></i>
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
