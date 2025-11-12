import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail({ data }) {
  const { ID } = useParams();
  const navigate = useNavigate();
  const user = data.find(u => u.id === parseInt(ID));
  console.log(user);

  if (!user) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">User not found</h2>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate('/about')}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-[700px] h-[400px] rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Image Section */}
        <div className="w-1/2 bg-gray-100">
          <img
            src={user.img}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{user.name}</h1>
            <p className="text-gray-600 leading-relaxed">{user.description}</p>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={() => navigate('/about')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
