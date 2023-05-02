import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
  const balance = useSelector(state => state);
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);

  return (
    <div className='container mt-3'>
    <h2>Withdraw/diposit Statement</h2>
      {/* <button className="btn btn-dark mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(50))}>-</button>
      Update Balance
      <button className="btn btn-dark mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(50))}>+</button> */}
      <button className="btn btn-dark mx-2" onClick={()=>withdrawMoney(50)}>-</button>
      Update Balance {balance}
      <button className="btn btn-dark mx-2" onClick={()=>depositMoney(50)}>+</button>
    </div>
  )
}

export default Shop
