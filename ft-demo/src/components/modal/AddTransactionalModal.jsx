import { useState, useEffect } from "react";

const AddTransactionModal = ({ onClose }) => {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    type: "income",
    date: "",
  });
  const [balance, setBalance] = useState(0);

  const getStoredTransactions = () =>
    JSON.parse(localStorage.getItem("transactions") || "[]");

  const calcBalance = () => {
    const txns = getStoredTransactions();
    const initial = parseFloat(localStorage.getItem("initialBalance") || 0);
    const income = txns
      .filter((t) => t.type === "income")
      .reduce((a, t) => a + t.amount, 0);
    const expense = txns
      .filter((t) => t.type === "expense")
      .reduce((a, t) => a + t.amount, 0);
    setBalance(initial + income - expense);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount || !form.date) return;

    const parsedAmount = parseFloat(form.amount);
    if (form.type === "expense" && parsedAmount > balance) {
      alert("Insufficient balance!");
      return;
    }

    const updated = [
      ...getStoredTransactions(),
      { ...form, id: Date.now(), amount: parsedAmount },
    ];
    localStorage.setItem("transactions", JSON.stringify(updated));
    onClose();
  };

  useEffect(() => {
    calcBalance();
    const escClose = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", escClose);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", escClose);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-blue-700">
          Add Transaction
        </h2>
        <div className="mb-4 text-sm text-gray-700">
          Current Balance:{" "}
          <span className="font-semibold text-blue-600">
            ₹{balance.toFixed(2)}
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["description", "amount", "date"].map((field, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-600 capitalize">
                {field === "amount" ? "Amount (₹)" : field}
              </label>
              <input
                type={
                  field === "amount"
                    ? "number"
                    : field === "date"
                    ? "date"
                    : "text"
                }
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Type
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
