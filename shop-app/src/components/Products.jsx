import ProductBox from "./ProductBox";

function Products({ title, products }) {
  return (
    <section className="container flex flex-col gap-y-15 pt-20">
      <h2 className="text-center text-5xl font-extrabold max-sm:text-4xl">
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductBox {...product} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="px-23 py-3.5 cursor-pointer border border-gray-300 rounded-full text-lg"
        >
          View All
        </a>
      </div>
    </section>
  );
}

export default Products;
