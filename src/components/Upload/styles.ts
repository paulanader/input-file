import styled, { css } from "styled-components";

export const dragActive = css`
  border-color: #78e5d5;
  color: #78e5d5;
`;

export const dragReject = css`
  border-color: #e57878;
  color: #e57878;
`;

export const notDragActive = css`
  border-color: #ddd;
  color: #ddd;
`;

export const DropContainer = styled.div`
  border: 1px dashed;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;
`;

export const UploadMessage = styled.div``;
