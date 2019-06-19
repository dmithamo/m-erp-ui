import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { ErrorOutline } from '@material-ui/icons';

const Select = ({
  id,
  icon,
  options,
  userAttrs,
  onChange,
  validationErrors,
  onFocus,
}) => {
  const valErrors = validationErrors.filter(err => err.errorID === id);
  const value = userAttrs[id];

  return (
    <Fragment>
      <StyledSelectContainer errors={valErrors}>
        <p>{valErrors.length <= 0 ? icon : <StyledErrorOutline />}</p>
        <StyledSelect
          id={id}
          onFocus={e => onFocus(e.target)}
          onChange={e => onChange(e.target)}
          value={value}
        >
          {options.map(option => (
            <option value={option.value}>{option.name}</option>
          ))}
        </StyledSelect>
      </StyledSelectContainer>
      <ErrorsContainer>
        <Fragment>
          {valErrors.map(error => (
            <p>{error.errorMessage}</p>
          ))}
        </Fragment>
      </ErrorsContainer>
    </Fragment>
  );
};

const StyledSelect = styled.select`
  box-sizing: border-box;
  border: none;
  outline: none;
  border-left: 1px solid rgba(239, 239, 239, 0.58);
  background-color: rgba(239, 239, 239, 0.58);
  width: 100%;
  padding: 0 0.5rem;
  font-family: 'Fira Mono', monospace;
  font-size: 12px;
  :focus {
    background-color: white;
  }
`;

const StyledSelectContainer = styled.div`
  border-radius: 3px;
  border: ${props =>
    props.errors.length > 0
      ? '1px solid red'
      : '1px solid rgba(220, 220, 220, 0.9)'};
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 6fr;
  margin-top: 0.5rem;
  p {
    background-color: white;
    border-radius: 3px;
  }
  :focus-within {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.38);
    border: none;
  }
`;

const ErrorsContainer = styled.div`
  color: red;
  font-size: 10px;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: left;
  width: 80%;
  height: 0.7rem;
`;

const StyledErrorOutline = styled(ErrorOutline)`
  color: red;
`;

// Reduxing!
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapDispatchToProps)(Select);
