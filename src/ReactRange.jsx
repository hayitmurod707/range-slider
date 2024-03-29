import { array, func } from 'prop-types';
import { Range as RangeSlider, getTrackBackground } from 'react-range';
import styled from 'styled-components';
const StyledTrack = styled.div`
   align-items: center;
   display: flex;
   height: 24px;
   justify-content: center;
   width: 100%;
   & .react-range-track {
      border-radius: 3px;
      height: 5px;
      width: 100%;
   }
`;
const StyledThumb = styled.div`
   background-color: #ffffff;
   border-radius: 50%;
   box-shadow: #cacaca 0px 2px 8px;
   height: 24px;
   outline: none;
   width: 24px;
   & .value {
      align-items: center;
      bottom: 34px;
      display: flex;
      height: 24px;
      justify-content: center;
      left: 0px;
      position: absolute;
      width: 24px;
      &:before {
         background-color: #5254f1;
         border-radius: 0 0 2px 0;
         bottom: -6px;
         content: '';
         height: 8px;
         position: absolute;
         transform: rotate(45deg);
         width: 8px;
         z-index: -1;
      }
      & div {
         align-items: center;
         background-color: #5254f1;
         border-radius: 8px;
         color: #ffffff;
         display: flex;
         font-size: 15px;
         font-weight: 500;
         justify-content: center;
         padding: 5px 8px;
      }
   }
`;
const defaultOptions = {
   // allowOverlap: false, // boolean
   // direction: Direction.Right //  one of ['to right', 'to left', 'to bottom', 'to top'] string
   // disabled: false, // boolean
   // draggableTrack: false, // boolean
   // max: 100, // number
   // min: 0, // number
   // onChange: required // function
   // onFinalChange: required // function
   // renderMark: - // React Node
   // renderThumb: required // React Node
   // renderTrack: required // React Node
   // rtl: false, // boolean
   // step: 1, // number
   // values: required [0, 100] // array
   renderThumb: ({ props, value, isDragged }) => (
      <StyledThumb {...props}>
         {isDragged && (
            <div className='value'>
               <div>{value}</div>
            </div>
         )}
      </StyledThumb>
   ),
   renderTrack: ({ props, children }) => {
      const values = children.map(child => child?.props['aria-valuenow']);
      const colors =
         values.length === 1
            ? ['#5254f1', '#f6f6f6']
            : [
                 '#f6f6f6',
                 ...[...Array(values.length - 1)].fill('#5254f1'),
                 '#f6f6f6',
              ];
      const background = getTrackBackground({
         colors,
         max: 100,
         min: 0,
         values,
      });
      return (
         <StyledTrack>
            <div
               {...props}
               className='react-range-track'
               style={{ background }}
            >
               {children}
            </div>
         </StyledTrack>
      );
   },
};
const ReactRange = props => <RangeSlider {...defaultOptions} {...props} />;
ReactRange.defaultProps = {
   values: [0, 100],
};
ReactRange.propTypes = {
   onChange: func.isRequired,
   values: array.isRequired,
};
export default ReactRange;
