// import { Button } from "antd";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   let user = JSON.parse(localStorage.getItem("user"));
//   let navigate = useNavigate();

//   function Logout() {
//     localStorage.clear();
//     navigate("/");
//   }
//   return (
//     <div>
//       <div>
//         <h2>Name : {user.fullname}</h2>
//         <h2>email : {user.email}</h2>
//       </div>

//       <Button onClick={Logout} type="default">
//         Log out
//       </Button>
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`https://nt-devconnector.onrender.com/api/profile/${id}`, { timeout: 10000 })
      .then((res) => setProfile(res.data))
      .catch((err) => console.error("API xatosi:", err));
  }, [id]);

  if (!profile || !profile.user)
    return <p className="text-center text-gray-500">Yuklanmoqda...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <img
          src={profile.user.avatar || "https://via.placeholder.com/150"}
          alt={profile.user.name}
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold">{profile.user.name}</h2>
        <p className="text-gray-600 mb-2">{profile.bio || "Bio mavjud emas"}</p>
        <p className="text-gray-800">
          <strong>Joylashuvi:</strong> {profile.location || "Ko'rsatilmagan"}
        </p>
        <h3 className="text-lg font-semibold mt-4">Ko'nikmalar:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {profile.skills && profile.skills.length > 0 ? (
            profile.skills.map((skill, index) => <li key={index}>{skill}</li>)
          ) : (
            <li>Ko'nikmalar mavjud emas</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
