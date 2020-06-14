import React from "react";

import { StyledAirPollutionInfo } from "./AirPollutionInfo.styled";

export interface AirPollutionInfoProps {
  airPollutionData: {
    status: string;
    data: {
      iaqi: {
        no2: {
          v: number;
        };
        c: {
          v: number;
        };
        co: {
          v: number;
        };
      };
      aqi: string;
    };
  };
}

const AirPollutionInfo: React.FC<AirPollutionInfoProps> = ({
  airPollutionData,
}) => {
  const { status, data } = airPollutionData;
  return (
    <StyledAirPollutionInfo>
      {status !== "error" ? (
        <ul className="air">
          <li className="air__quality">
            Jakość powietrza <span>{data.aqi} AQI</span>
          </li>
          <div>
            {data.iaqi.co ? (
              <li className="air__co">
                CO
                <span>{data.iaqi.co.v}</span>
              </li>
            ) : undefined}
            {data.iaqi.no2 ? (
              <li className="air_no2">
                NO2
                <span>{data.iaqi.no2.v}</span>
              </li>
            ) : undefined}
          </div>
        </ul>
      ) : (
        <h1>Nie ma danych</h1>
      )}
    </StyledAirPollutionInfo>
  );
};

export default AirPollutionInfo;
