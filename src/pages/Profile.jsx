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



import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, notification } from "antd";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    notification.info({
      message: "Chiqish bajarildi",
      description: "Siz tizimdan chiqdingiz!",
    });
    navigate("/");
  }

  return (
    <div>
      {user ? (
        <div>
          <h2>Name: {user.fullname}</h2>
          <h2>Email: {user.email}</h2>
          <Button onClick={handleLogout} type="default">
            Chiqish
          </Button>
        </div>
      ) : (
        <div>
          <h2>Profil ma’lumotlari yuklanmadi</h2>
          <Button onClick={() => navigate("/")} type="primary">
            Kirish
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
