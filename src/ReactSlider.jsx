import { array, bool, func, number } from 'prop-types';
import React from 'react';
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
	height: 22px;
	outline: none;
	top: -10px;
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
		}
	}
`;
const StyledTrack = styled.div`
	border-radius: 999px;
	bottom: 0;
	top: 0;
	&[data-active='active'] {
		background-color: #0000ff;
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
	disabled: false,
	max: 100,
	min: 0,
	step: 1,
	value: [0, 100],
};
ReactSlider.propTypes = {
	disabled: bool,
	max: number,
	min: number,
	onChange: func.isRequired,
	step: number,
	value: array.isRequired,
};
export default ReactSlider;
