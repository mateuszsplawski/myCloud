import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div``;

export interface AirPollutionInfoProps {
  airPollutionData: any;
}

const AirPollutionInfo: React.SFC<AirPollutionInfoProps> = ({
  airPollutionData
}) => {
  return (
    <StyledWrapper>
      <ul>data</ul>
      {console.log(airPollutionData)}
    </StyledWrapper>
  );
};

export default AirPollutionInfo;
