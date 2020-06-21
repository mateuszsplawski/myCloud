import React from "react";

import { StyledAirPollution } from "./AirPollution.styled";
import { airPollutionDataInterface } from "./Card";
import { constants } from "./constants";

export interface AirPollutionInterface {
  airPollutionData: airPollutionDataInterface;
}

export const AirPollution: React.FC<AirPollutionInterface> = ({
  airPollutionData,
}) => {
  const {
    status,
    data: {
      iaqi: {
        no2: { v: no2Value },
        co: { v: coValue },
      },
      aqi,
    },
  } =
    airPollutionData.status !== "error"
      ? airPollutionData
      : constants.airPollutionDataDefault;
  return (
    <StyledAirPollution>
      {status !== "error" ? (
        <ul className="air">
          <li className="air__quality">
            Jakość powietrza <span>{aqi} AQI</span>
          </li>
          <div>
            <li className="air__co">
              CO
              <span>{coValue}</span>
            </li>
            <li className="air_no2">
              NO2
              <span>{no2Value}</span>
            </li>
          </div>
        </ul>
      ) : (
        <h1>Nie ma danych</h1>
      )}
    </StyledAirPollution>
  );
};
