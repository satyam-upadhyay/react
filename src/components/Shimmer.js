const Shimmer = (props) => {
  return props.name === "details" ? (
    <div className="restaurant-details-shimmer flex flex-wrap">
      {[...Array(2)].map((x, i) => (
        <div key={i} className="shimmer-cards-details bg-gray-100 w-[500px] h-[450px] m-5"></div>
      ))}
    </div>
  ) : (
    <>
      <div className="restaurant-list flex flex-wrap ">
        {[...Array(18)].map((x, i) => (
          <div key={i} className="shimmer-cards bg-gray-100 w-52 h-64 m-5"></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
