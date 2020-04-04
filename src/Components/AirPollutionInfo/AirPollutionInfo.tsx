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
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: ${({ theme }) => theme.fonts.m};

      span {
        font-size: ${({ theme }) => theme.fonts.xl};
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
        color: ${({ theme }) => theme.colors.darkGrey};
        font-size: ${({ theme }) => theme.fonts.s};
        display: flex;
        flex-direction: column;
        text-align: center;

        span {
          font-size: ${({ theme }) => theme.fonts.l};
          color: ${({ theme }) => theme.colors.black};
          margin: 5px;
          font-weight: bolder;
        }
      }
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tablet} {
    margin: 45px 0 0 0;
    width: 100%;
  }
`;

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
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

export default AirPollutionInfo;
