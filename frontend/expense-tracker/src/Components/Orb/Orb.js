import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../Utils/useWindowSize';

export default function Orb() {
  const {width,height}=useWindowSize();
  
  const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width/1.2}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    ` 
  
  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(400px);
    animation: ${moveOrb} 15s alternate linear infinite;
`;
  
  
    return (
    
      <OrbStyled>

      </OrbStyled>
    
  )
}





/*NOTES
1)The transform: translate(0, 0) property means the element will not be moved from its initial position. It stays at the origin (0, 0) on the X and Y axes.
2)Start (0%): The element begins at its initial position (0, 0).
Middle (50%): The element moves to a new position at (width, height/2)—a certain distance to the right (width pixels) and down (height / 2 pixels).
End (100%): The element moves back to its original position (0, 0)
*/