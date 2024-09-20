import { Layer } from "../models/Layer";
import "./CakeLayer.css";
interface Props {
  layer: Layer;
}
const CakeLayer = ({ layer }: Props) => {
  return (
    <div
      className={`CakeLayer ${layer.flavor}`}
      style={{ height: `${layer.height}px`, width: `${layer.width}px` }}
    >
      {layer.flavor}
    </div>
  );
};

export default CakeLayer;
