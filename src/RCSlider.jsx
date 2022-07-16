import { array, bool, func, number } from 'prop-types';
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
			background: #0000ff;
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
			height: 22px;
			margin-top: -8px;
			opacity: 1;
			width: 22px;
		}
	}
`;
const ThumbElement = styled.div`
	background-color: #ffffff;
	border-radius: 50%;
	box-shadow: #cacaca 0px 2px 8px;
	height: 22px;
	outline: none;
	width: 22px;
	& .value {
		align-items: center;
		bottom: 30px;
		display: flex;
		height: 22px;
		justify-content: center;
		left: 0px;
		position: absolute;
		width: 22px;
		&:before {
			background-color: #0000ff;
			bottom: -4px;
			content: '';
			height: 7px;
			position: absolute;
			transform: rotate(45deg);
			width: 7px;
			z-index: -1;
		}
		& div {
			align-items: center;
			background-color: #0000ff;
			border-radius: 6px;
			color: #ffffff;
			display: flex;
			font-size: 15px;
			justify-content: center;
			padding: 3px 6px;
			opacity: 1;
		}
	}
`;
const Handle = ({ props }, { value }) => (
	<ThumbElement {...props}>
		<div className='value'>
			<div>{value}</div>
		</div>
	</ThumbElement>
);
const defaultOptions = {
	// className: 'rc-slider', // string
	// disabled: false, // boolean
	// dots: false // boolean
	// handle: Component
	// included: true, // boolean
	// marks: object,
	// max: 100, // number
	// min: 0, // number
	// onAfterChange: required // function
	// onChange: required // function
	// step: 1, // number
	// tipFormatter: function || null,
	// tipTransitionName: '', // string
	// vertical: false, // boolean
	allowCross: false, // boolean
	defaultValue: [0, 100], // array
	pushable: true,
	range: true, // boolean
};
const RCSlider = props => (
	<StyledElement>
		<Slider {...defaultOptions} {...props} handleRender={Handle} />
	</StyledElement>
);
RCSlider.defaultProps = {
	disabled: false,
	max: 100,
	min: 0,
	step: 1,
	value: [0, 100],
	defaultValue: [0, 100],
};
RCSlider.propTypes = {
	disabled: bool,
	max: number,
	min: number,
	onChange: func.isRequired,
	step: number,
	value: array.isRequired,
	defaultValue: array.isRequired,
};
export default RCSlider;
