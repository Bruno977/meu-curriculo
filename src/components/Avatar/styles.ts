import styled from 'styled-components';

export const ContentImage = styled.div`
  line-height: 0;
  background-color: ${(props) => props.theme.colors.gray800};
  position: relative;
  img {
    max-width: 500px;
    width: 400px;
    height: 400px;

    object-fit: cover;
    /* border-radius: 1000px; */
  }
  &:before {
    display: inline-block;
    border: 6px solid ${(props) => props.theme.colors.green500};
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transform: translate3d(26px, 26px, -26px);
  }
`;
