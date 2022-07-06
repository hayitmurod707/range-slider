import { array, bool, func, number } from 'prop-types';
import { getTrackBackground, Range } from 'react-range';
import styled from 'styled-components';
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	height: 24px;
	justify-content: center;
	width: 100%;
`;
const TrackElement = styled.div`
	border-radius: 3px;
	height: 5px;
	width: 100%;
	& .track {
		background-color: #0000ff;
		height: 5px;
		position: absolute;
		top: 0;
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
		}
	}
`;
const renderTrack = ({ props, children }, options) => {
	const values = options.values.length;
	const colors =
		values === 1
			? ['#0000ff', '#f6f6f6']
			: [
					'#f6f6f6',
					...[...Array(values - 1)].map(() => '#0000ff'),
					'#f6f6f6',
			  ];
	const background = getTrackBackground({
		...options,
		colors,
	});
	return (
		<TrackElement
			{...props}
			style={{
				...props.style,
				background,
			}}>
			{children}
		</TrackElement>
	);
};
const renderThumb = ({ props, value }) => (
	<ThumbElement {...props}>
		<div className='value'>
			<div>{value}</div>
		</div>
	</ThumbElement>
);
const defaultOptions = {
	// renderTrack: required // React.Component
	// renderThumb: required // React Component
	// renderMark: - // React Component
	// values: required // array
	// onChange: required // function
	// onFinalChange: required // function
	// min: 0, // number
	// max: 100, // number
	// step: 1, // number
	// allowOverlap: false, // boolean
	draggableTrack: true, // boolean
	// direction: Direction.Right
	// disabled: false, // boolean
	// rtl: false, // boolean
};
const ReactRange = options => (
	<StyledElement>
		<Range
			{...defaultOptions}
			{...options}
			renderThumb={renderThumb}
			renderTrack={props => renderTrack(props, options)}
		/>
	</StyledElement>
);
ReactRange.defaultProps = {
	disabled: false,
	max: 100,
	min: 0,
	step: 1,
	values: [0, 100],
};
ReactRange.propTypes = {
	disabled: bool,
	max: number,
	min: number,
	onChange: func.isRequired,
	step: number,
	values: array.isRequired,
};
export default ReactRange;
