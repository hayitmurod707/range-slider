import { func, number, shape } from 'prop-types';
import Slider from 'react-input-range';
import styled from 'styled-components';
const StyledElement = styled.div`
   & .input-range {
      height: 24px;
      & .input-range__label--max,
      & .input-range__label--min {
         display: none;
      }
      & .input-range__track--background {
         transition: none;
         height: 5px;
         background-color: #f6f6f6;
         & .input-range__track--active {
            background-color: #5254f1;
            transition: none;
            height: 5px;
         }
         & .input-range__slider-container {
            transition: none;
            & .input-range__slider {
               background-color: #ffffff;
               border: none;
               top: -1px;
               box-shadow: #cacaca 0px 2px 8px !important;
               &:active {
                  transform: scale(1);
               }
               &:focus {
                  box-shadow: none;
               }
            }
         }
      }
   }
`;
const defaultOptions = {
   // activeTrack: '', // string
   // ariaControls: '', // string
   // ariaLabelledby: '', // string
   // classNames: '', // string
   // disabled: false, // boolean
   // disabledInputRange: '', // string
   // draggableTrack: false, // boolean
   // formatLabel: (value: number, type: string): string, // function
   // inputRange: '', // string
   // labelContainer: '', // string
   // maxLabel: '', // string
   // maxValue: 100, // number
   // minLabel: '', // string
   // minValue: 0, // number
   // name: '', // string
   // onChange: (value: number || array) => void, // function required
   // onChangeComplete: (value: number || array) => void, // function
   // onChangeStart: (value: number || array) => void, // function
   // slider: '', // string
   // sliderContainer: '', // string
   // step: 1, // number
   // track: '', // string
   // value: required, // number || array
   // valueLabel: '', // string

   formatLabel: value => value,
   minValue: 0,
   step: 1,
   maxValue: 100,
};
const ReactInputRange = props => (
   <StyledElement>
      <Slider {...defaultOptions} {...props} />
   </StyledElement>
);
ReactInputRange.defaultProps = {
   value: { min: 0, max: 100 },
};
ReactInputRange.propTypes = {
   onChange: func.isRequired,
   value: shape({ min: number.isRequired, max: number.isRequired }).isRequired,
};
export default ReactInputRange;
