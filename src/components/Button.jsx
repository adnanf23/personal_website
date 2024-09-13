function Button({ value }) {
  return (
    <div className="flex">
      <button
        className="
                bg-blue py-1 w-[120px] rounded-full 
                  md:w-[170px] md:text-[3.4vw]
                  lg:text-[1vw] lg:py-2
        "
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
