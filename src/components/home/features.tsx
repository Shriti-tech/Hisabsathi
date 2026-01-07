import FeatureOne from "./featureOne";
import FeatureTwo from "./featureTwo";
import FeatureThree from "./featureThree";
function Features() {
  return (
    <div className="py-2 bg-background" id="features">
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </div>
  );
}
export default Features;
