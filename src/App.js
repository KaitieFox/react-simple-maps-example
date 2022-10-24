import ButterflyMap from "./maps/ButterflyMap";
import MapChart from "./maps/MapChart";
import Usa from "./maps/Usa";
import UsaWithMarkers from "./maps/UsaWithMarkers";

function App() {
  return (
    <div>
      <div className="flex items-center p-8">
        <div>
          <p className="text-xl font-bold">WORLD MAP</p>
          <p>Documentation first example</p>
        </div>
        {/* interestingly, cannot wrap the chart in a div */}
        <MapChart />
      </div>
      <div className="flex items-center p-8">
        <div>
          <p className="text-xl font-bold">USA WITH MARKERS</p>
          <p>Documentation example</p>
        </div>
        <UsaWithMarkers />
      </div>
      <div className="flex items-center p-8">
        <div>
          <p className="text-xl font-bold">USA WITH... MARKERS?</p>
          <p>Documentation example</p>
        </div>
        <Usa />
      </div>

      <div className="flex items-center p-8">
        <div>
          <p className="text-xl font-bold">BUTTERFLY MAP</p>
          <p>Documentation example</p>
        </div>
        <ButterflyMap />
      </div>
    </div>
  );
}

export default App;
