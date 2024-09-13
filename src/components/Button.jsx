function Button({ value, href, bg }) {
  return (
    <button
      className={`
                py-1 w-[100%] rounded-full 
                md:w-[240px] md:text-[3.4vw]
                lg:text-[1vw] lg:py-2
        `}
      style={{
        background: bg
      }}
    >
      <a href={href} className="inline">
      {value}
      </a>
    </button>
  );
}

export default Button;
