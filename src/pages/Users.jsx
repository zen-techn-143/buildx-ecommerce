import React from "react";
import "../styles/Users.css";

function Users() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Alex Kumar",
      email: "alex@example.com",
      role: "User",
      status: "Blocked",
    },
  ];

  return (
    <div className="users-page">
      <h1>User Management</h1>
      <p className="users-subtitle">
        View and manage registered users.
      </p>

      <div className="users-table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span
                    className={
                      user.status === "Active"
                        ? "status active"
                        : "status blocked"
                    }
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;