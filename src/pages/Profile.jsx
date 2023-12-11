import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/profile.scss'; 
import MyBooks from '../components/MyBook';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); // Fetch userId from localStorage
  const token = localStorage.getItem('token');

  // Handle logout
  const handleLogout = () => {
    console.log('Logging out');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('jwtToken');
    sessionStorage.removeItem();

    alert('Successfully logged out!');
    navigate('/');
  };

  // Fetch user profile and books
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Fetching data for userId : "+userId);
        const response = await axios.get(
          `http://localhost:5000/api/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const { userProfile } = response.data; // Add .data here
          setUserProfile(userProfile);
        } else {
          console.error('Error fetching profile data:', response.status);
        }
      } catch (error) {
        console.error('Error during data fetch:', error);
      }
    };

    fetchData();
  }, [token, userId]);

  // Render user profile and books
  return (
    <div className="profilee">
      <div className="firstdiv">
        <h1>Full Name: {userProfile.name}</h1>
        <h2>Email: {userProfile.email}</h2>
      </div>

      {/* <MyBook /> */}
      <MyBooks userId={userId} token={token} />

      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
