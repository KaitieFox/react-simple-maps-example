import { geoPolyhedralWaterman } from "d3-geo-projection";
import { ComposableMap, Graticule, Sphere } from "react-simple-maps";

const width = 800;
const height = 600;

const projection = geoPolyhedralWaterman()
  .translate([width / 2, height / 2])
  .scale(98);

const ButterflyMap = () => {
  return (
    <ComposableMap width={width} height={height} projection={projection}>
      <Graticule stroke="#999" clipPath="url(#rsm-sphere)" />
      <Sphere stroke="#06F" strokeWidth={2} />
    </ComposableMap>
  );
};

export default ButterflyMap;
