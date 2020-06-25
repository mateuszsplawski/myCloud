import styled from "styled-components";

export const StyledSwitchButton = styled.label`
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  span {
    position: relative;
    display: inline-block;
    margin-right: 0.5rem;
    width: 46px;
    height: 26px;
    background-color: #e6e6e6;
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear;
  }

  span::before {
    content: "";
    position: absolute;
    left: 0;
    width: 42px;
    height: 22px;
    background-color: #fff;
    border-radius: 11px;
    transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
    transition: all 0.25s linear;
  }

  span::after {
    content: "";
    position: absolute;
    left: 0;
    width: 22px;
    height: 22px;
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
    transform: translate3d(2px, 2px, 0);
    transition: all 0.2s ease-in-out;
  }

  :active span::after {
    width: 28px;
    transform: translate3d(2px, 2px, 0);
  }

  :active input:checked + span::after {
    transform: translate3d(16px, 2px, 0);
  }

  input {
    display: none;
  }

  input:checked + span {
    background-color: #4bd763;
  }

  input:checked + span::before {
    transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
  }

  input:checked + span::after {
    transform: translate3d(22px, 2px, 0);
  }
`;
