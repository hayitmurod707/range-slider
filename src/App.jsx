import { Fragment, useState } from 'react';
import styled from 'styled-components';
import RCSlider from './RCSlider';
import ReactInputRange from './ReactInputRange';
import ReactRange from './ReactRange';
import ReactSlider from './ReactSlider';
const StyledElement = styled.div`
   align-items: center;
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 300px;
   justify-content: center;
   width: 100%;
   & h1 {
      text-align: center;
      margin: 0;
   }
   & h4 {
      text-align: center;
      margin: 10px 0;
   }
   & h2 {
      text-align: center;
      margin: 0 0 50px 0;
   }
   & .content {
      width: 400px;
   }
`;
const App = () => {
   const [value, setValue] = useState([20, 30, 50, 80]);
   const [val, setVal] = useState({ min: 30, max: 80 });
   return (
      <Fragment>
         <StyledElement>
            <h1>Range sliders with react libraries</h1>
            <h4>
               <a href='https://github.com/hayitmurod707/range-slider'>
                  Github
               </a>
            </h4>
            <h2>RC Slider</h2>
            <div className='content'>
               <RCSlider onChange={setValue} value={value} />
            </div>
         </StyledElement>
         <StyledElement>
            <h2>React Range</h2>
            <div className='content'>
               <ReactRange onChange={setValue} values={value} />
            </div>
         </StyledElement>
         <StyledElement>
            <h2>React Slider</h2>
            <div className='content'>
               <ReactSlider onChange={setValue} value={value} />
            </div>
         </StyledElement>
         <StyledElement>
            <div className='content'>
               <ReactInputRange onChange={setVal} value={val} />
            </div>
         </StyledElement>
      </Fragment>
   );
};
export default App;
