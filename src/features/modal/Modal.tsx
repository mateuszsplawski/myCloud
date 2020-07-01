import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import { StyledModal } from "./Modal.styled";
import { Button } from "components/Button/Button";
import { setErrorStatus } from "./duck/modalDuck";

interface ModalInterface {
  errorMessage: string;
  setErrorStatus: ({ status: boolean }) => void;
}

const Modal: React.FC<ModalInterface> = ({ errorMessage, setErrorStatus }) => {
  return (
    <StyledModal>
      <div>
        <header>
          <h1>
            Wystąpił błąd <FontAwesomeIcon icon={faExclamationCircle} />
          </h1>
        </header>
        <p>{errorMessage}</p>
        <Button
          secondary
          text={"Zamknij okno"}
          handleClick={() => setErrorStatus({ status: false })}
        />
      </div>
    </StyledModal>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.modal.errorMessage,
});

const mapDispatchToProps = { setErrorStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
