import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .air {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    li {
      list-style: none;
    }

    &__quality {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-transform: uppercase;
      color: grey;
      font-size: 14px;

      span {
        font-size: 22px;
        font-weight: bolder;
        display: block;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100px;
        line-height: 100px;
        color: ${({ theme }) => theme.colors.white};
        height: 100px;
        margin: 15px;
        border-radius: 50%;
        background: green;
      }
    }

    div {
      display: flex;

      li {
        margin: 10px;
        text-transform: uppercase;
        color: grey;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        text-align: center;

        span {
          font-size: 18px;
          color: ${({ theme }) => theme.colors.black};
          margin: 5px;
          font-weight: bolder;
        }
      }
    }
  }
`;

export interface AirPollutionInfoProps {
  airPollutionData: {
    status: Object;
    data: any;
  };
}

const AirPollutionInfo: React.FC<AirPollutionInfoProps> = ({
  airPollutionData
}) => {
  const { status, data } = airPollutionData;
  return (
    <StyledWrapper>
      {status !== "error" ? (
        <ul className="air">
          <li className="air__quality">
            Jakość powietrza <span>{data.aqi} AQI</span>
          </li>
          <div>
            {data.iaqi.co ? (
              <li>
                CO
                <span>{data.iaqi.co.v}</span>
              </li>
            ) : (
              undefined
            )}
            {data.iaqi.no2 ? (
              <li>
                NO2
                <span>{data.iaqi.no2.v}</span>
              </li>
            ) : (
              undefined
            )}
          </div>
        </ul>
      ) : (
        <h1>Nie ma danych XD</h1>
      )}
    </StyledWrapper>
  );
};

export default AirPollutionInfo;
