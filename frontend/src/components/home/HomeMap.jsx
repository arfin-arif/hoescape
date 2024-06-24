import Map from "./Map";

export default function HomeMap() {
  return (
    <div className="home-btm-item map">
      <div className="map-top">
        <div className="map-top-left">
          <h3>Top Request Places</h3>
          <p>You’ve invested 21 country business to boost up</p>
        </div>
        {/* <DateLine
          data={["Italy", "Bangladesh"]}
          defaultText="Country:"
          icon={<RiEarthFill />}
        /> */}
      </div>
      <div className="map-body">
        <Map />
      </div>
    </div>
  );
}
