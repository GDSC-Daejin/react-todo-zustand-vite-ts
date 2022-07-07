import styled, { keyframes } from 'styled-components';
//빙글빙글 돌아가는 모션
const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 30px;
`;
export const StackTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.colors.grey50};
`;
export const StackSubtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.grey50};
`;
export const StackButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grey50};
  font-size: ${({ theme }) => theme.fontSize.body2};
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.googleBlue};
  }
`;
export const StackInput = styled.input`
  padding: 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grey50};
  font-size: ${({ theme }) => theme.fontSize.body2};
  background: transparent;
  flex: 1;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.googleYellow};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey300};
  }
`;
export const StackInputButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 400px;
`;
//Todo Card 가 반복되므로 section을 사용해야합니다.
export const TodoSection = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
export const TodoWrapper = styled.div`
  width: 100%;
`;

export const StackImage = styled.img`
  height: 200px;
  padding: 50px;
  will-change: filter;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  &.react {
    animation: ${LogoSpin} infinite 20s linear;
  }
`;
