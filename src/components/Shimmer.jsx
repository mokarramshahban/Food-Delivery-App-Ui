function Shimmer() {
  return (
    <div className="p-4 flex flex-wrap h-full w-full">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-70 h-75 m-2 p-4 bg-amber-50 border rounded-lg"></div>
        ))}
    </div>
  );
}

export default Shimmer;