import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 5px 10px;
  order: 1;
  width: calc(100% / 3);
`;

export interface AirPollutionInfoProps {
  airPollutionData: any;
}

const AirPollutionInfo: React.SFC<AirPollutionInfoProps> = ({
  airPollutionData
}) => {
  const {
    data: { aqi, iaqi, idx }
  } = airPollutionData;
  return (
    <StyledWrapper>
      <ul>
        <li>jakość: {aqi}</li>
      </ul>
      {console.log(iaqi)}
    </StyledWrapper>
  );
};

export default AirPollutionInfo;
