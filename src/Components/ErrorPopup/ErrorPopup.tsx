import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);

  .errorModal {
    width: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px;
    border-radius: 35px;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;

    p {
      font-size: 18px;
    }

    button {
      margin: 20px 0 0 0;
    }
  }
`;

interface ErrorPopupInterface {
  message: String;
}

export const ErrorPopup: React.FunctionComponent<ErrorPopupInterface> = ({
  message
}) => {
  return (
    <StyledWrapper>
      <div className="errorModal">
        <p>{message}</p>
        <button>Spróbuj ponownie</button>
      </div>
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopup);
