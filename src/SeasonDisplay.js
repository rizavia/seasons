import "./SeasonDisplay.css";
const SeasonConfig = {
  summer: {
    text: "Let's head to the Beach",
    icon: "sun",
  },
  winter: {
    text: "Brr... Its chilly",
    icon: "snowflake",
  },
};

function fetchSeason(lat, month) {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat < 0 ? "summer" : "winter";
}

function SeasonDisplay(props) {
  const season = fetchSeason(props.lat, new Date().getMonth());
  const { text, icon } = SeasonConfig[season];
  console.log(season);
  //console.log(propps.lat, props.long);

  return (
    <div className={`season-display ${season}`}>
      <i className={`top-left massive ${icon} icon`} />

      <h1 className="text-display">{text}</h1>

      <i className={`bottom-right massive ${icon} icon`} />
    </div>
  );
}
export default SeasonDisplay;
