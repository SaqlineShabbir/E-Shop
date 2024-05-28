import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);

  return (
    <div className=" min-h-[80vh] py-8 bg-white shadow-lg text-center">
      <header className="mb-8">
        <div className="mb-4">
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold">{user.displayName}</h1>
      </header>

      <main>
        <section className="text-lg">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">User Details</h2>
            <p>
              <span className="font-semibold">Name:</span> {user.displayName}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UpdateProfile;
