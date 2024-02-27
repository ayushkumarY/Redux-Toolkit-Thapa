import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { clearAllUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearAll = () => {
    return dispatch(clearAllUsers());
  };

  return (
    <Wrapper>
      <>
        <button className="clear-btn" onClick={clearAll}>
          Clear All Users
        </button>
      </>
    </Wrapper>
  );
};

export default DeleteAllUser;

const Wrapper = styled.section`
  .clear-btn {
    font-size: 2rem;
    padding: 8px;
    text-transform: capitalize;
    background: linear-gradient(135deg, #7f6de3 0%, #11aaf1 100%);
    margin-top: 2rem;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 4px;
    opacity: 0.9;
  }
`;
