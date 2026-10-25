import Button from "./Button";

function Input({ placeholder, text, btnClassName }) {
  const buttonData = [
    {
      text: text,
      className: btnClassName,
    },
  ];
  return (
    <div className="inline-flex border border-gray-300/80 rounded-full">
      <input
        className="outline-none text-sm px-4"
        type="text"
        placeholder={placeholder}
      />
      <Button text={buttonData[0].text} className={buttonData[0].className} />
    </div>
  );
}

export default Input;
