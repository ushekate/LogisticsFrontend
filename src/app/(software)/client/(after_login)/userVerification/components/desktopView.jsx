'use client';
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/button';

export default function UserVerificationDesktop() {
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
    <div className="p-6 bg-[var(--background)] min-h-screen text-green-950">

      <div className="bg-accent shadow-2xl p-4 rounded-md mb-6 border-0">

          <div className='flex gap-4 mb-4'>
            <Tabs>
              <input 
                  type="button"
                  name="userType"
                  value="CFS"
                  checked={userType === 'CFS'}
                  onClick={(e) => setUserType(e.target.value)} />
            </Tabs>
            <Tabs>
              <input 
                  type="button"
                  name="userType"
                  value="Customer"
                  checked={userType === 'Customer'}
                  onClick={(e) => setUserType(e.target.value)} />
            </Tabs>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md border"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 rounded-md border"
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
            className="p-2 rounded-md border"
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="p-2 rounded-md border"
          />
        </div>
      </div>


      <div className="bg-accent shadow-2xl p-4 rounded-md border-0">
        <h2 className="text-lg font-semibold mb-3">
          {userType === 'CFS' ? 'Container Freight Station (CFS)' : 'Customers'}
        </h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-green-300">
              <th className="p-2">First Name</th>
              <th className="p-2">Last Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, idx) => (
              <tr key={idx} className="border-b border-green-300">
                <td className="p-2 font-medium">{user.firstName}</td>
                <td className="p-2">{user.lastName}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-sm text-[#1E40AF] ${user.role === 'CFS' ? 'bg-[#DBEAFE]' : 'bg-[#DBEAFE] text-[#1E40AF]'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${user.status === 'Pending' ? 'bg-[#FEF9C3] text-[#854D0E]' : user.status === 'Approved' ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#991B1B]'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-2">
                  <button className="flex items-center gap-1 bg-[#2563EB2B] text-[#2563EB] px-3 py-1 rounded-full">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}