function StatusBox({ number, title }) {
  return (
    <div className="">
      <p className="md:text-4xl text-3xl font-semibold">{number}</p>
      <span className="text-xs text-black/60">{title}</span>
    </div>
  );
}

export default StatusBox;
