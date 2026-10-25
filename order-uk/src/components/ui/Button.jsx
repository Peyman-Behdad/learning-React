function Button({ text, icon, className, iconClassName }) {
  return (
    <>
      <button
        className={`${className} flex items-center justify-center gap-x-2 text-sm py-2.5 px-6 rounded-full cursor-pointer`}
      >
        <span className={iconClassName}>{icon}</span> {text}
      </button>
    </>
  );
}

export default Button;
