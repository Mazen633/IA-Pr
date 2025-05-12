import React, { useEffect, useState } from 'react';

const AdminAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({ email: '', password: '' });
  const [editingAccount, setEditingAccount] = useState(null);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = () => {
    const dummyData = [
      { id: 1, email: 'Zaid@gmail.com', password: 'zaid123' },
      { id: 2, email: 'Bassem@gmail.com', password: 'bassem123' },
    ];
    setAccounts(dummyData);
  };

  const handleCreate = () => {
    if (newAccount.email && newAccount.password) {
      // تأكد من عدم وجود حساب بنفس البريد الإلكتروني
      if (accounts.some(account => account.email === newAccount.email)) {
        alert('An account with this email already exists.');
        return;
      }

      const id = Date.now();
      setAccounts([...accounts, { id, ...newAccount }]);
      setNewAccount({ email: '', password: '' }); // تنظيف الحقول
    } else {
      alert('Please fill all fields.');
    }
  };

  const handleDelete = (id) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  const handleEdit = (account) => {
    setEditingAccount(account);
  };

  const handleUpdate = () => {
    if (editingAccount.email && editingAccount.password) {
      setAccounts(accounts.map(acc =>
        acc.id === editingAccount.id ? editingAccount : acc
      ));
      setEditingAccount(null);
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Accounts</h1>

      {/* Add New Account */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Account</h2>
        <input
          type="email"
          placeholder="Email"
          value={newAccount.email}
          onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={newAccount.password}
          onChange={(e) => setNewAccount({ ...newAccount, password: e.target.value })}
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={handleCreate}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create
        </button>
      </div>

      {/* List of accounts */}
      <div className="bg-white rounded shadow">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map(account => (
              <tr key={account.id} className="border-t">
                <td className="px-4 py-2">
                  {editingAccount?.id === account.id ? (
                    <input
                      value={editingAccount.email}
                      onChange={(e) =>
                        setEditingAccount({ ...editingAccount, email: e.target.value })
                      }
                      className="border p-1 rounded"
                    />
                  ) : (
                    account.email
                  )}
                </td>
                <td className="px-4 py-2">
                  {editingAccount?.id === account.id ? (
                    <input
                      value={editingAccount.password}
                      onChange={(e) =>
                        setEditingAccount({ ...editingAccount, password: e.target.value })
                      }
                      className="border p-1 rounded"
                    />
                  ) : (
                    account.password
                  )}
                </td>
                <td className="px-4 py-2">
                  {editingAccount?.id === account.id ? (
                    <button
                      onClick={handleUpdate}
                      className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(account)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(account.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {accounts.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No accounts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAccounts;


