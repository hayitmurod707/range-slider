import { array, func } from 'prop-types';
import Slider from 'react-slider';
import styled from 'styled-components';
const StyledSlider = styled(Slider)`
   border-radius: 3px;
   height: 5px;
   width: 100%;
`;
const StyledThumb = styled.div`
   background-color: #ffffff;
   border-radius: 50%;
   box-shadow: #cacaca 0px 2px 8px;
   cursor: grab;
   height: 24px;
   outline: none;
   top: -10px;
   width: 24px;
   &:active {
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
   }
   & .value {
      display: none;
   }
`;
const StyledTrack = styled.div`
   border-radius: 999px;
   bottom: 0;
   top: 0;
   &[data-active='active'] {
      background-color: #5254f1;
   }
   &[data-active='inactive'] {
      background-color: #f6f6f6;
   }
`;
const Thumb = (props, { valueNow }) => (
   <StyledThumb {...props} className={null}>
      <div className='value'>
         <div>{valueNow}</div>
      </div>
   </StyledThumb>
);
const Track = (props, { index, value }) => (
   <StyledTrack
      {...props}
      className={null}
      data-active={
         index === 0 || index === value.length ? 'inactive' : 'active'
      }
      index={index}
   />
);
const defaultOptions = {
   // areaLabel: array, // one of type string
   // areaLabelledBy: array, // one of type string
   // ariaValuetext
   // className: 'slider', // string slider
   // disabled: false, boolean false
   // invert: false, // boolean false
   // markClassName: 'mark', // string 'mark'
   // marks: array, []
   // max: 100, number
   // min: 0, number
   // onAfterChange: function,
   // onBeforeChange: function,
   // onChange: function, // required
   // onSliderClick: function,
   // orientation: string, // one of type horizontal vertical
   // pageFn: function,
   // pearling: boolean, false
   // renderMark: function jsx,
   // renderThumb: function jsx,
   // renderTrack: function jsx,
   // snapDragDisabled: boolean, // false
   // step: number, // 1
   // thumbActiveClassName: 'active', // string 'active'
   // thumbClassName: 'thumb', // string 'thumb'
   // trackClassName: 'track', // string 'track'
   // value: array, // required
   // withTracks: false, // true
   defaultValue: [0, 100], // 0
   minDistance: 1, // number 0
};
const ReactSlider = props => (
   <StyledSlider
      {...defaultOptions}
      {...props}
      renderThumb={Thumb}
      renderTrack={Track}
   />
);
ReactSlider.defaultProps = {
   value: [0, 100],
};
ReactSlider.propTypes = {
   onChange: func.isRequired,
   value: array.isRequired,
};
export default ReactSlider;
