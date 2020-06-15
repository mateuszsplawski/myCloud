import React from "react";

import { StyledAirPollution } from "./AirPollution.styled";

export interface AirPollutionInterface {
  airPollutionData: {
    status: string;
    data: {
      iaqi: {
        no2: {
          v: number;
        };
        co: {
          v: number;
        };
      };
      aqi: number;
    };
  };
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
  } = airPollutionData;
  return (
    <StyledAirPollution>
      {status !== "error" ? (
        <ul className="air">
          <li className="air__quality">
            Jakość powietrza <span>{aqi} AQI</span>
          </li>
          <div>
            {coValue && (
              <li className="air__co">
                CO
                <span>{coValue}</span>
              </li>
            )}
            {no2Value && (
              <li className="air_no2">
                NO2
                <span>{no2Value}</span>
              </li>
            )}
          </div>
        </ul>
      ) : (
        <h1>Nie ma danych</h1>
      )}
    </StyledAirPollution>
  );
};
