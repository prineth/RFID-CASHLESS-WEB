import React from 'react'

const Dashboard = () => {
    const userDetails = {
        name: "Saman kumara",
        email: "sman.gmail.com",
        phone: "+94725489908"
    };

    const balance = 2500.75; // Example balance

    const transactions = [
        { id: 1, date: '2023-10-01', description: 'Payment Received', amount: 100.00 },
        { id: 2, date: '2023-10-02', description: 'Payment Sent', amount: -50.00 },
        { id: 3, date: '2023-10-03', description: 'Payment Received', amount: 200.00 },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">User  Dashboard</h1>

            {/* User Details Section */}
            <section className="mt-6 p-4 border rounded-lg shadow">
                <h2 className="text-xl font-semibold">User  Details</h2>
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <p><strong>Phone:</strong> {userDetails.phone}</p>
            </section>

            {/* Balance Section */}
            <section className="mt-6 p-4 border rounded-lg shadow">
                <h2 className="text-xl font-semibold">Account Balance</h2>
                <p className="text-lg">Balance: RS{balance.toFixed(2)}</p>
            </section>

            {/* Transaction History Section */}
            <section className="mt-6 p-4 border rounded-lg shadow">
                <h2 className="text-xl font-semibold">Transaction History</h2>
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-200 p-2">Date</th>
                            <th className="border border-gray-200 p-2">Description</th>
                            <th className="border border-gray-200 p-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td className="border border-gray-200 p-2">{transaction.date}</td>
                                <td className="border border-gray-200 p-2">{transaction.description}</td>
                                <td className={`border border-gray-200 p-2 RS{transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                    {transaction.amount < 0 ? '-' : '+'}RS{Math.abs(transaction.amount).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Dashboard;
