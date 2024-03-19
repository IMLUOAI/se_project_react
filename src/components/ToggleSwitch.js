import React, { useState } from "react";
import "../blocks/toggleSwitch/toggleSwitch.css";

const ToggleSwitch = () => {
  const [currentTemperatureUnit, handleToggleSwitchChange] = useState("F");
  const handleChange = () => {
    if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
    if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
  };
  console.log(currentTemperatureUnit);
  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        className="toggleSwitch__box"
        onChange={handleChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggleSwitch__slider toggleSwitch__slider-F"
            : "toggleSwitch__slider toggleSwitch__slider-C"
        }
      ></span>
      <p
        className={
          "toggleSwitch__temp-F ${ currentTempertureUnit === 'F' && 'toggleSwitch_active'}"
        }
      >
        F
      </p>
      <p
        className={
          "toggleSwitch__temp-C ${ currentTemperatureUnit === 'C' && 'toggleSwitch_active'}"
        }
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
