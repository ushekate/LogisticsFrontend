'use client';
import { useState } from 'react';
import { Eye } from 'lucide-react';

export default function UserVerificationMobile() {
  const [userType, setUserType] = useState('CFS');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const users = [
    { firstName: 'Blue', lastName: 'Star CFS', role: 'CFS', status: 'Pending' },
    { firstName: 'Vishal', lastName: 'Its', role: 'Customer', status: 'Approved' },
    { firstName: 'Green', lastName: 'Logs CFS', role: 'CFS', status: 'Rejected' },
    { firstName: 'Fname', lastName: 'Customer', role: 'Customer', status: 'Pending' },
    { firstName: 'FirstName', lastName: 'Star CFS', role: 'CFS', status: 'Approved' },
    { firstName: 'Green', lastName: 'Star', role: 'Customer', status: 'Rejected' },
  ];

  const filteredUsers = users.filter(user => {
    return (
      user.role === (userType === 'Customer' ? 'Customer' : 'CFS') &&
      user.firstName.toLowerCase().includes(search.toLowerCase()) &&
      (status === '' || user.status === status)
    );
  });

  return (
    <div className="p-4 bg-[var(--background)] min-h-screen text-green-950">


      <div className="bg-accent shadow-xl p-4 rounded-lg mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="userType"
              value="CFS"
              checked={userType === 'CFS'}
              onChange={(e) => setUserType(e.target.value)}
            />
            CFS
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="userType"
              value="Customer"
              checked={userType === 'Customer'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Customer
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <input
            type="text"
            placeholder="Search Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md border text-sm"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 rounded-md border text-sm"
          >
            <option value="">Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="p-2 rounded-md border text-sm"
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="p-2 rounded-md border text-sm"
          />
        </div>
      </div>


      <div className="space-y-4">
        {filteredUsers.length === 0 && (
          <div className="text-center text-gray-500">No users found</div>
        )}

        {filteredUsers.map((user, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 border border-green-100">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-base">{user.firstName} {user.lastName}</h3>
              <button className="flex items-center gap-1 bg-[#2563EB2B] text-[#2563EB] px-3 py-1 rounded-full text-sm">
                <Eye className="w-4 h-4" />
                View
              </button>
            </div>
            <div className="text-sm mb-1">
              <span className="font-medium">Role: </span>
              <span className={`px-2 py-1 rounded-full text-xs ${user.role === 'CFS' ? 'bg-[#DBEAFE] text-[#1E40AF]' : 'bg-[#DCFCE7] text-[#166534]'}`}>
                {user.role}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium">Status: </span>
              <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Pending' ? 'bg-[#FEF9C3] text-[#854D0E]' : user.status === 'Approved' ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#991B1B]'}`}>
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



















// 'use client'
// import { useState } from 'react'
// import { Eye } from 'lucide-react'

// export default function UserVerificationMobile() {
//   const [userType, setUserType] = useState('CFS')
//   const [search, setSearch] = useState('')
//   const [status, setStatus] = useState('')
//   const [fromDate, setFromDate] = useState('')
//   const [toDate, setToDate] = useState('')

//   const users = [
//     { firstName: 'Blue', lastName: 'Star CFS', role: 'CFS', status: 'Pending' },
//     { firstName: 'Vishal', lastName: 'Its CFS', role: 'Merchant', status: 'Approved' },
//     { firstName: 'Green', lastName: 'Logs CFS', role: 'CFS', status: 'Rejected' },
//     { firstName: 'Fname', lastName: 'Merchant CFS', role: 'Merchant', status: 'Pending' },
//     { firstName: 'FirstName', lastName: 'Star CFS', role: 'CFS', status: 'Approved' },
//     { firstName: 'Green', lastName: 'Star CFS', role: 'Merchant', status: 'Rejected' },
//   ]

//   const filteredUsers = users.filter(user => {
//     return (
//       user.firstName.toLowerCase().includes(search.toLowerCase()) &&
//       (status === '' || user.status === status)
//     )
//   })

//   return (
//     <div className="p-4 sm:p-6 bg-[var(--background)] min-h-screen text-green-950">


//       <div className="bg-accent shadow-2xl p-4 rounded-md mb-6 border-0">
//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4">
//           <label className="flex items-center gap-2 text-sm">
//             <input
//               type="radio"
//               name="userType"
//               value="CFS"
//               checked={userType === 'CFS'}
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             CFS
//           </label>
//           <label className="flex items-center gap-2 text-sm">
//             <input
//               type="radio"
//               name="userType"
//               value="Customer"
//               checked={userType === 'Customer'}
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             Customer
//           </label>
//         </div>


//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//           <input
//             type="text"
//             placeholder="Search Name"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="p-2 rounded-md border text-sm bg-accent"
//           />
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="p-2 rounded-md border text-sm bg-accent"
//           >
//             <option value="">Status</option>
//             <option value="Pending">Pending</option>
//             <option value="Approved">Approved</option>
//             <option value="Rejected">Rejected</option>
//           </select>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             className="p-2 rounded-md border text-sm bg-accent"
//           />
//           <input
//             type="date"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             className="p-2 rounded-md border text-sm bg-accent"
//           />
//         </div>
//       </div>


//       <div className="bg-accent shadow-2xl p-4 rounded-md border-0">
//         <h2 className="text-md sm:text-lg font-semibold mb-3">
//           Container Freight Station (CFS)
//         </h2>


//         <div className="space-y-4 sm:hidden">
//           {filteredUsers.map((user, idx) => (
//             <div key={idx} className="bg-accent rounded-md p-3 shadow border">
//               <p className="text-sm font-medium">
//                 {user.firstName} {user.lastName}
//               </p>
//               <p className="text-sm mt-1">
//                 <span className="font-semibold">Role: </span>
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs text-[#1E40AF] ${user.role === 'CFS' ? 'bg-[#DBEAFE]' : 'bg-[#DCFCE7] text-[#166534]'}`}
//                 >
//                   {user.role}
//                 </span>
//               </p>
//               <p className="text-sm mt-1">
//                 <span className="font-semibold">Status: </span>
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs ${
//                     user.status === 'Pending'
//                       ? 'bg-[#FEF9C3] text-[#854D0E]'
//                       : user.status === 'Approved'
//                       ? 'bg-[#DCFCE7] text-[#166534]'
//                       : 'bg-[#FEE2E2] text-[#991B1B]'
//                   }`}
//                 >
//                   {user.status}
//                 </span>
//               </p>
//               <div className="mt-2">
//                 <button className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
//                   <Eye className="w-4 h-4" />
//                   View
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>


//         <table className="hidden sm:table w-full text-left">
//           <thead>
//             <tr className="bg-green-100 border-b border-green-300 text-sm">
//               <th className="p-2">First Name</th>
//               <th className="p-2">Last Name</th>
//               <th className="p-2">Role</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, idx) => (
//               <tr key={idx} className="border-b border-green-300 text-sm">
//                 <td className="p-2 font-medium">{user.firstName}</td>
//                 <td className="p-2">{user.lastName}</td>
//                 <td className="p-2">
//                   <span className={`px-2 py-1 rounded-full text-xs text-white ${user.role === 'CFS' ? 'bg-blue-400' : 'bg-green-500'}`}>
//                     {user.role}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span className={`px-2 py-1 rounded-full text-xs ${
//                     user.status === 'Pending'
//                       ? 'bg-yellow-100 text-yellow-800'
//                       : user.status === 'Approved'
//                       ? 'bg-green-200 text-green-800'
//                       : 'bg-red-200 text-red-800'
//                   }`}>
//                     {user.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <button className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
//                     <Eye className="w-4 h-4" />
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
