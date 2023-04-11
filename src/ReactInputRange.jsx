import { bool, func, number, shape } from 'prop-types';
import Slider from 'react-input-range';
import styled from 'styled-components';
const StyledElement = styled.div`
   & .input-range__slider-container,
   & .input-range__track {
      transition: none;
   }
`;
const defaultOptions = {
   // formatLabel
   // name
   // onChangeStart
   // onChangeComplete
};
// renderTrack
// renderThumb
const ReactInputRange = props => (
   <StyledElement>
      <Slider {...defaultOptions} {...props} />
   </StyledElement>
);
ReactInputRange.defaultProps = {
   disabled: false,
   minValue: 0,
   step: 1,
   value: { min: 0, max: 100 },
   maxValue: 100,
};
ReactInputRange.propTypes = {
   disabled: bool,
   onChange: func.isRequired,
   step: number,
   value: shape({ min: number.isRequired, max: number.isRequired }).isRequired,
   maxValue: number,
   minValue: number,
};
export default ReactInputRange;
