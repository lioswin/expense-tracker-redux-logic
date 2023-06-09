import React, { useState, type ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../actions/actionTypes";

export const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number | undefined | string>(0);
  const dispatch = useDispatch();

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim() || amount === 0) {
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount!
    };
    dispatch(addTransaction(newTransaction));
    setAmount(0);
    setText("");
    // console.log(amount,text,newTransaction)
  };
  return (
    <>
      <h3>Add new transaction </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"> Text </label>
          <input
            type="text"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            {" "}
            Amount <br />
            (negative - expense, positive - income){" "}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn"> Add transaction </button>
      </form>
    </>
  );
};
