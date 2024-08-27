import ErrorImg from "../assets/images/Error.svg";

const Error = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-3xl text-center text-black font-extrabold my-10">
        {" "}
        No results found...
      </h1>
      <img
        className="size-5/12 max-w-150 flex m-auto"
        src={ErrorImg}
        alt="Not Found"
      />
    </div>
  );
};
export default Error;
