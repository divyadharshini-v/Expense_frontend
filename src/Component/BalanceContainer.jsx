import React from 'react'
import CurrentItem from './CurrencyItem';

function BalanceContainer(props) {
    const {expense}=props;
    let income=0;
    let expenses=0;
    expense.forEach((item)=> {
        let{amount}=item;
        if(amount>0){
            income+=parseInt(amount)
        }else{
            expenses+=parseInt(amount)
        }
    })
  return (
    <div className='balance-container'>
        <CurrentItem title="income" amount={income} type="income"/>
        <CurrentItem title="Expense" amount={expenses} type="expense"/>
        <CurrentItem title="Balance" amount={income + expenses}/>

    </div>
  )
}

export default BalanceContainer