import { useEffect, useState } from "react";
import { fetchTransactions } from "../api/transactions";
import { Transaction } from "../types/Transaction";

export const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getTransactions = async () => {
    const data = await fetchTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <p>{transaction.amount}</p>
        </div>
      ))}
    </>
  );
};
