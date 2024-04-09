import React, { useContext } from "react";
import "../blocks/toggleSwitch/toggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        className="toggleSwitch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggleSwitch__slider toggleSwitch__slider-F"
            : "toggleSwitch__slider toggleSwitch__slider-C"
        }
      ></span>
      <p
        className={`toggleSwitch__temp-F ${
          currentTemperatureUnit === "F" && "toggleSwitch_active"
        }`}
      >
        F
      </p>
      <p
        className={`toggleSwitch__temp-C ${
          currentTemperatureUnit === "C" && "toggleSwitch_active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
