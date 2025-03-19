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


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Profile = () => {
//   const { id } = useParams();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://nt-devconnector.onrender.com/api/profile/${id}`, { timeout: 10000 })
//       .then((res) => {
//         console.log("API Response:", res.data);
//         setProfile(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("API xatosi:", err);
//         setError("Ma'lumot yuklanmadi");
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p className="text-center text-gray-500">Yuklanmoqda...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;
//   if (!profile || !profile.user) return <p className="text-center text-gray-500">Profil topilmadi</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
//         <img
//           src={profile?.user?.avatar || "https://via.placeholder.com/150"}
//           alt={profile?.user?.name || "Foydalanuvchi"}
//           className="w-32 h-32 rounded-full mb-4"
//         />
//         <h2 className="text-2xl font-bold">{profile?.user?.name || "Ism mavjud emas"}</h2>
//         <p className="text-gray-600 mb-2">{profile?.bio || "Bio mavjud emas"}</p>
//         <p className="text-gray-800">
//           <strong>Joylashuvi:</strong> {profile?.location || "Ko'rsatilmagan"}
//         </p>
//         <h3 className="text-lg font-semibold mt-4">Ko'nikmalar:</h3>
//         <ul className="list-disc list-inside text-gray-700">
//           {profile?.skills?.length > 0 ? (
//             profile.skills.map((skill, index) => <li key={index}>{skill}</li>)
//           ) : (
//             <li>Ko'nikmalar mavjud emas</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.get("https://nt-devconnector.onrender.com/api/auth", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (error) {
        console.error("Xato:", error.response?.data?.msg || "Xatolik yuz berdi");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
};

export default Profile;
