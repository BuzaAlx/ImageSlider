import styled from 'styled-components/macro';



export const Body = styled.section`
margin: 0 auto;
   max-width:${(props) => `${props.maxWidth}`};
  display: flex;
  position: relative;
  overflow: hidden;   
  height: ${(props) => props.height};
`;
export const SlideContainer = styled.article`
    opacity:${(props) => {
        if (props.position === "currentSlide") {
            return '1'
        } else { return '0' }
    }};
    transform:${(props) => {
        if (props.position === "currentSlide") {
            return 'translateX(0)'
        } else if (props.position === "previousSlide") { return 'translateX(-100%)' }
        else if (props.position === "nextSlide") { return 'translateX(100%)' }
    }};
  z-index: -1;
  height: ${(props) => props.height};
  width:100%;
  position: absolute;
  top:0;
  left:0;
  transition: all .5s ease-in-out;
`;

export const ControllButton = styled.button`
  display: flex;
  align-items: center;
  color:white;
  line-height: 40px;
  padding: 5px;
  background-color:black;
  border: 0;
  opacity: 0;
  transition: all .1s ease;
  width: 40px;
  height: ${(props) => props.height};
  position: absolute;
  justify-content: center;
  top:0;
  transition: all 0.5s ease;
  &:hover {
      opacity:0.4;
  }
  left: ${(props) => (props.prev ? "0" : "auto")};
  right:${(props) => (props.next ? "0" : "auto")};
  &:active > .chevron {
    transform: ${(props) => (props.prev ? "translateX(-5px)" : "auto")};
    transform: ${(props) => (props.next ? "translateX(5px)" : "auto")};
  }
`;


export const CirclesPanel = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: white;
  
`