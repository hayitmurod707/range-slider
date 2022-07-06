import { useState } from 'react';
import styled from 'styled-components';
import RCSlider from './RCSlider';
import ReactInputRange from './ReactInputRange';
import ReactRange from './ReactRange';
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	height: 300px;
	justify-content: center;
	width: 100%;
	& .content {
		width: 400px;
	}
`;
const App = () => {
	const [value, setValue] = useState([20, 30, 50, 80]);
	const [val, setVal] = useState({ min: 30, max: 80 });
	return (
		<>
			<StyledElement>
				<div className='content'>
					<RCSlider onChange={setValue} value={value} />
				</div>
			</StyledElement>
			<StyledElement>
				<div className='content'>
					<ReactRange onChange={setValue} values={value} />
				</div>
			</StyledElement>
			<StyledElement>
				<div className='content'>
					<ReactInputRange onChange={setVal} value={val} />
				</div>
			</StyledElement>
		</>
	);
};
export default App;
