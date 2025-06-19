import React from "react";
import "../CSS/Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    name: "Sadiya Khanam",
    email: "sadiya@example.com",
    phone: "+91 9876543210",
    address: "Mumbai, Maharashtra, India",
    joined: "April 2024",
  };

  const orders = [
    { id: "OD1234", item: "Kurti", date: "2024-05-10", status: "Delivered" },
    { id: "OD1235", item: "Jumpsuit", date: "2024-05-22", status: "Shipped" },
    { id: "OD1236", item: "T-Shirt", date: "2024-06-01", status: "Cancelled" },
  ];

  const handleLogout = () => {
    // clear auth tokens if needed
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>
      <div className="profile-card">
        <div className="profile-avatar">
       
          <img src="https://i.pravatar.cc/150?img=47" alt="Profile" />

        </div>
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Joined:</strong> {user.joined}</p>
          <div className="profile-buttons">
            <button className="edit-btn">Edit Profile</button>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      <div className="order-history">
        <h3>My Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.item}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
