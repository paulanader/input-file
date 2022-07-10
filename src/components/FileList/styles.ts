import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: "#444";

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: "#999";
      margin-top: 5px;

      button {
        border: 0;
        background-color: transparent;
        color: "#e57878";
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  border-radius: 5px;
  margin-right: 10px;
`;
