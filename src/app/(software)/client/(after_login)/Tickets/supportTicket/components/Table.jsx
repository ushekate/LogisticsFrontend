'use client';

import { Pencil, PencilLine, Trash2 } from "lucide-react";
import React, {useState} from "react";
import { useRouter } from "next/navigation";


const initialTickets = [
    {
        id: 1,
        customerName: 'ABC Logistics',
        location: 'Mundra',
        issueTitle: 'Delay in Upload',
        type: 'Delay',
        status: 'Pending',
        date: '2025-06-12',
    },
    {
        id: 2,
        customerName: 'XYZ Shipping',
        location: 'Nava Sheva',
        issueTitle: 'Damage Report',
        type: 'Damage',
        status: 'Resolved',
        date: '2025-06-11',
    },
    {
        id: 3,
        customerName: 'MoveFast co.',
        location: 'Chennai',
        issueTitle: 'Container Query',
        type: 'Query',
        status: 'Closed',
        date: '2025-06-10',
    },
];

const statusColorMap = {
    pending: 'bg-yellow-100 text-yellow-800',
    resolved: 'bg-green-100 text-green-800',
    closed: 'bg-gray-200 text-gray-800',
};

export default function TicketPage() {
    const [activeTab, setActiveTab] = useState('customer');
    const [tickets, setTickets] = useState(initialTickets);
    const router = useRouter();

    const handleDelete = (id) => {
        const updatedTickets = tickets.map(ticket => 
            ticket.id === id ? { ...ticket, date: '' } : ticket
        );
        setTickets(updatedTickets);
    };

    const handleEdit = (id) => {
        router.push(`/client/Tickets/supportTicket/editTicket?id=${id}`);
    }

    return(
        <div className="p-4 bg-accent rounded shadow-lg text-sm">

            {/* Tabs */}
            <div className="flex bg-[#B1CCB4] w-fit p-2 rounded mb-4">
                <div className="flex">
                    <button
                        className={`px-4 py-2 rounded ${activeTab === 'customer' ? 'bg-green-800 text-white' : 'bg-[#B1CCB4] border-0 text-green-700'}`}
                        onClick={() => setActiveTab('customer')}
                    >
                        Customer Tickets
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeTab === 'client' ? 'bg-green-800 text-white' : 'bg-[#B1CCB4] border-0 text-green-700'}`}
                        onClick={() => setActiveTab('client')}
                    >
                        Client Tickets
                    </button>
                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="w-full border border-green-700 rounded-md overflow-hidden">
                    <thead className="bg-[#d7eadc] text-left border-b border-green-700">
                        <tr className="text-gray-800">
                            <th className="p-3">No</th>
                            <th className="p-3">Customer Name</th>
                            <th className="p-3">CFS Location</th>
                            <th className="p-3">Issue Title</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket, index) => (
                            <tr key={ticket.id} className="border-b border-green-700 hover:bg-green-50 transition">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 font-semibold">{ticket.customerName}</td>
                                <td className="p-3">{ticket.location}</td>
                                <td className="p-3">{ticket.issueTitle}</td>
                                <td className="p-3">{ticket.type}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColorMap[ticket.status]}`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="p-3">{ticket.date || '-'}</td>
                                <td className="p-3 flex gap-2 items-center">
                                    <button
                                        className="text-green-700 hover:text-green-900"
                                        onClick={() => handleEdit(ticket.id)}
                                    >
                                        <Pencil size={16} />
                                    </button>
                                    <button
                                        className="text-red-700 hover:text-red-900"
                                        onClick={() => handleDelete(ticket.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}