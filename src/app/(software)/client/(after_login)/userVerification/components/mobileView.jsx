'use client';
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { Tabs } from '@/components/ui/Tabs';

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
        <div className="flex gap-4 mb-4">
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
              <span className={`px-2 py-1 rounded-full text-xs ${user.role === 'CFS' ? 'bg-[#DBEAFE] text-[#1E40AF]' : 'bg-[#DBEAFE] text-[#1E40AF]'}`}>
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
