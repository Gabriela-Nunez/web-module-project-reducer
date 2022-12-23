import { useReducer } from 'react';
import React from 'react';

import './App.css';

import reducer, { initialState } from '../reducers/index';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { applyNumber, changeOperation, clearDisplay } from '../actions';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

 const handleApplyNumberClick = (number) => {
    dispatch(applyNumber(number));
  }

 const handleChangeOperationClick = (operation) => {
  dispatch(changeOperation(operation));
 } 

 const handleClearDisplay = () => {
  dispatch(clearDisplay());
 }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumberClick(1)}/>
              <CalcButton value={2} onClick={() => handleApplyNumberClick(2)}/>
              <CalcButton value={3} onClick={() => handleApplyNumberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumberClick(4)}/>
              <CalcButton value={5} onClick={() => handleApplyNumberClick(5)}/>
              <CalcButton value={6} onClick={() => handleApplyNumberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumberClick(7)}/>
              <CalcButton value={8} onClick={() => handleApplyNumberClick(8)}/>
              <CalcButton value={9} onClick={() => handleApplyNumberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleChangeOperationClick("+")}/>
              <CalcButton value={"*"} onClick={() => handleChangeOperationClick("*")}/>
              <CalcButton value={"-"} onClick={() => handleChangeOperationClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClearDisplay()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
