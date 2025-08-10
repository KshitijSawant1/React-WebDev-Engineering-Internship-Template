// src/pages/Dashboard.jsx
const Dashboard = ({
  totals = { balance: 0, income: 0, expense: 0 },
  recent = [],
}) => {
  const cards = [
    {
      title: "Total Balance",
      value: totals.balance,
      color: "border-blue-500",
      text: "text-blue-700",
    },
    {
      title: "Total Income",
      value: totals.income,
      color: "border-green-500",
      text: "text-green-700",
    },
    {
      title: "Total Expense",
      value: totals.expense,
      color: "border-red-500",
      text: "text-red-600",
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Dashboard
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${c.color}`}
          >
            <h3 className="text-sm text-gray-500">{c.title}</h3>
            <p className={`text-2xl font-bold mt-2 ${c.text}`}>
              ₹{Number(c.value).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Transactions
        </h4>
        <ul className="divide-y divide-gray-200">
          {recent.length === 0 ? (
            <li className="py-4 text-center text-gray-600">
              <p className="font-medium text-base">No transactions yet.</p>
              <p className="text-sm mt-1 text-blue-600">
                You're all set! Start by{" "}
                <span className="font-semibold">adding a transaction</span>.
              </p>
            </li>
          ) : (
            recent.map((t) => (
              <li
                key={t.id}
                className="py-2 flex justify-between text-sm text-gray-700"
              >
                <div>
                  <p className="font-medium">{t.description}</p>
                  <p className="text-xs text-gray-400">{t.date}</p>
                </div>
                <div
                  className={`font-bold ${
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}₹
                  {Number(t.amount).toFixed(2)}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
