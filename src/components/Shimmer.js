const Shimmer = (props) => {
  return props.name === "details" ? (
    <div className="restaurant-details-shimmer">
      {[...Array(2)].map((x, i) => (
        <div key={i} className="shimmer-cards-details"></div>
      ))}
    </div>
  ) : (
    <>
      <div className="restaurant-list">
        {[...Array(18)].map((x, i) => (
          <div key={i} className="shimmer-cards"></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
