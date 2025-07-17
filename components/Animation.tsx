import Lottie from "lottie-react";
import robot from "@mikalyh/assets/animations/Robot-3D.json";
import waving from "@mikalyh/assets/animations/Waving Character.json";
import startup from "@mikalyh/assets/animations/Startup.json";
import Button from "./Button";

export default function Animation({
  animationType,
  description,
  action,
  actionText,
}: {
  animationType: "error" | "loading" | "success";
  description?: string;
  action?: () => void;
  actionText?: string;
}) {
  const getAnimationData = () => {
    let animationData;
    switch (animationType) {
      case "loading":
        animationData = startup;
        break;
      case "success":
        animationData = waving;
        break;
      default:
        animationData = robot;
    }

    return animationData;
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Lottie
        animationData={getAnimationData()}
        loop
        style={{ width: 350, height: 350 }}
      />
      <p className="text-gray-600 text-base">{description}</p>

      {action && (
        <div className="justify-center mb-8">
          <Button title={actionText || "-"} onClick={action} />
        </div>
      )}
    </div>
  );
}
