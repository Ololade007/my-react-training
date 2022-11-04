import './ExpenseItem.css';

function Expenseitem(props) {
    const month = props.date.toLocaleString('en-US' , {month: 'Long'})

    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div></div>
                <div></div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'> ${props.amount} </div>
            </div>
        </div>
    );
}

export default Expenseitem;