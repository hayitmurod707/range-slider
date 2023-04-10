import { array, func } from 'prop-types';
import Slider from 'rc-slider';
import styled from 'styled-components';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   height: 24px;
   justify-content: center;
   width: 100%;
   & .rc-slider {
      height: 5px;
      padding: 0;
      & .rc-slider-rail {
         background: #f6f6f6;
         border-radius: 3px;
         cursor: pointer;
         height: 5px;
      }
      & .rc-slider-track {
         cursor: pointer;
         background: #5254f1;
         height: 5px;
      }
      & .rc-slider-step {
         height: 5px;
      }
      & .rc-slider-handle {
         background-color: #ffffff;
         border-radius: 50%;
         border: none !important;
         box-shadow: #cacaca 0px 2px 8px !important;
         height: 24px;
         margin-top: -9px;
         opacity: 1;
         width: 24px;
      }
   }
`;
const ThumbElement = styled.div`
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
         opacity: 1;
         padding: 5px 8px;
      }
   }
`;
const Handle = ({ props }, { value, dragging }) => (
   <ThumbElement {...props}>
      {dragging && (
         <div className='value'>
            <div>{value}</div>
         </div>
      )}
   </ThumbElement>
);
const defaultOptions = {
   // activeDotStyle: {}, // object or function
   // className: 'rc-slider', // string
   // count: 1, // number
   // defaultValue: [0, 0], // array
   // disabled: false, // boolean
   // dotStyle: {}, // object or function
   // dots: false // boolean
   // draggableTrack: false, // boolean
   // handle: Component
   // handleStyle: [{}], // array or object
   // included: true, // boolean
   // keyboard: true, // boolean
   // marks: {} // object,
   // max: 100, // number
   // maximumTrackStyle: {}, // object
   // min: 0, // number
   // minimumTrackStyle: {}, // object
   // onAfterChange: required // function
   // onBeforeChange: required // function
   // onChange: required // function
   // railStyle: {}, // object
   // reverse: false, // boolean
   // step: 1, // number
   // tabIndex: [], // array
   // tipFormatter: function || null,
   // tipTransitionName: '', // string
   // trackStyle: [{}], // array or object
   // value: [], // array
   // vertical: false, // boolean
   allowCross: false, // boolean
   pushable: true,
   range: true, // boolean
};
const RCSlider = props => (
   <StyledElement>
      <Slider {...defaultOptions} {...props} handleRender={Handle} />
   </StyledElement>
);
RCSlider.defaultProps = {
   value: [0, 100],
};
RCSlider.propTypes = {
   onChange: func.isRequired,
   value: array.isRequired,
};
export default RCSlider;
