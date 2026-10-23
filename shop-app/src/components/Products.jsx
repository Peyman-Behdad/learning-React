import ProductBox from "./ProductBox";

function Products({ title, products }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col  gap-y-15 pt-20">
        <h2 className="text-center text-5xl font-extrabold">{title}</h2>
        <div className="flex items-center justify-between">
          {products.map((product) => (
            <ProductBox key={product.id} {...product} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="px-23 py-3.5 cursor-pointer border border-gray-300 rounded-full text-lg"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
}

export default Products;
