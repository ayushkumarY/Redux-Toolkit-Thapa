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
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
