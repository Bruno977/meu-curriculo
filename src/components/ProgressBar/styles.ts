import styled from 'styled-components';

export const Container = styled.div`
  p {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    font-size: 0.875rem;
  }
`;

interface BarProps {
  progress: string;
}

export const Bar = styled.div<BarProps>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray800};
  position: relative;
  margin: 1.25rem 0;
  &:before {
    content: '';
    display: block;
    background-color: ${(props) => props.theme.colors.green500};
    position: absolute;
    top: 0;
    width: ${(props) => props.progress};
    height: 1px;
    z-index: 99;
  }
  span {
    border: 1px solid ${(props) => props.theme.colors.green500};
    position: absolute;
    top: -40px;
    left: calc(${(props) => props.progress} - 25px);
    padding: 0.3rem 0.5rem;
    border-radius: ${(props) => props.theme.borderRadius.roundedMd};
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.green500};

    &:before {
      content: '';
      display: inline-block;
      padding: 4px;
      transform: translateY(33.5px) rotate(45deg) skew(3deg, 3deg)
        translateX(-27px);
      left: 37px;
      background-color: ${(props) => props.theme.colors.gray900};
      bottom: 8px;
      position: absolute;
      border: 1px solid ${(props) => props.theme.colors.green500};
      border-width: 0 1px 1px 0;
    }
  }
`;
