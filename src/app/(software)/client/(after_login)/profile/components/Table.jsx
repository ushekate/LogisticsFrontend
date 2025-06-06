'use client';
import { Building2, CircleCheckBig, CircleX, Download, Eye, LayoutGrid, MessageSquare, RefreshCcw, Upload, User, UserRound } from 'lucide-react';
import { DataTable } from '@/components/ui/Table';
import { orders } from '@/constants/orders';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';


const tabs = ['CFS', 'Transport', '3PL', 'Warehouse'];

export default function RequestList() {

    // const getStatusColor = (status) => {
    //     switch (status) {
    //         case 'Accepted':
    //             return 'bg-green-100 text-green-800';
    //         case 'Pending':
    //             return 'bg-yellow-100 text-yellow-800';
    //         case 'Rejected':
    //             return 'bg-red-100 text-red-800';
    //         default:
    //             return 'bg-gray-100 text-gray-800';
    //     }
    // };

    // const [profile, setProfile] = useState({
    //     name: 'John Doe',
    //     email: 'john@example.com',
    //     phone: '+91-9876543210',
    //     company: 'Acme Logistics Pvt. Ltd.',
    //     address: '123 street, City',
    //     joined: '14-Apr-2024',
    //     customerId: 'GOL-CUST-00321',
    // });

    const [profile, setProfile] = useState({
    name: 'Unnati',
    company: 'Acme Logistics Pvt Ltd',
    email: 'Unnati@example.com',
    address: '123 Street Name, City',
    phone: '+91-9876543210',
    joined: '14-Apr-2024',
    customerId: 'GOL-CUST-00321',
  });

  const [activeTab, setActiveTab] = useState('CFS');

  const [description, setDescription] = useState('Handles cargo movement and value-added services.');
  const [services, setServices] = useState(['Forklift', 'Reefer Plug']);

  const [images, setImages] = useState([
    '/gallery/warehouse1.jpg',
    '/gallery/warehouse2.jpg',
    '/gallery/warehouse3.jpg',
  ]);

    return (
        <div className="p-4 md:p-8 bg-[var(--background)] min-h-screen">
            <h1 className="text-2xl font-bold mb-4">CLIENT PROFILE</h1>
            <div className="bg-accent rounded-lg shadow p-4">
                {/* ProfileForm */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-2xl p-8 items-center">
                    <div className="col-span-full flex flex-col items-center">
                        <img src="/avatar.png" className="w-28 h-28 rounded-full mb-2" />
                        <button className="flex text-md bg-gray-200 px-3 py-1 rounded"><Upload size={30} className='p-1.5' />Upload / Change Photo <RefreshCcw size={30} className='p-1.5' /></button>
                    </div>

                    <div className='grid grid-cols-1'>
                        <label htmlFor="" className='flex mb-2'><UserRound size={20} className='mr-2 ' />Full Name :</label>
                        <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="input border rounded w-[80%] pl-2" placeholder="Full Name" />
                    </div>
                    <div>
                        <label htmlFor="" className='flex mb-2'><Building2 size={20} className='mr-2' />Company :</label>
                        <input value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value})} className="input border rounded w-[80%] pl-2" placeholder="Company" />
                    </div>
                    <input value={profile.email} className="input" placeholder="Email" readOnly />
                    <input value={profile.address} className="input" placeholder="Address" readOnly />
                    <input value={profile.phone} className="input" placeholder="Phone" readOnly />
                    <input value={profile.joined} className="input" placeholder="Joined On" readOnly />
                    <input value={profile.customerId} className="input" placeholder="Customer ID" readOnly />

                    <div className="col-span-full flex gap-4 mt-2">
                        <button className="bg-green-600 text-white px-4 py-2 rounded">Edit Info</button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded">Change Password</button>
                    </div>
                </div>


                {/* ServiceTabs */}
                <div className="mt-6">
                    <div className="flex gap-2 mb-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    {activeTab === 'CFS' &&
                        // CFSSection
                        <div className="bg-green-100 p-4 rounded">
                            <h2 className="text-lg font-bold mb-2">CFS Service Details</h2>

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Description:</label>
                                <textarea
                                    className="w-full border rounded p-2 bg-white"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <h3 className="text-sm font-semibold mb-1">Facility & Services Offered</h3>
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center justify-between bg-white px-2 py-1 mb-2 rounded border">
                                        {service}
                                        <button
                                            className="text-red-500 text-sm"
                                            onClick={() => setServices(services.filter((_, i) => i !== index))}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                                <button
                                    className="text-green-700 mt-2 text-sm"
                                    onClick={() => setServices([...services, 'New Service'])}
                                >
                                    + Add New Service
                                </button>
                            </div>

                            {/* ImageGallery */}
                            <div>
                                <h3 className="text-sm font-semibold mb-1">Gallery</h3>
                                <div className="flex gap-2 overflow-x-auto">
                                    {images.map((src, index) => (
                                        <img key={index} src={src} alt="Gallery" className="w-32 h-24 object-cover rounded" />
                                    ))}
                                    <div className="w-32 h-24 flex items-center justify-center bg-white border rounded cursor-pointer">
                                        + Add Photo
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>




        // <div className="min-h-screen text-gray-800 p-6 md:p-10">
        //   <div className='max-w-5xl mx-auto bg-accent rounded-lg shadow-2xl'>
        //     {/* <div className='flex justify-end items-center mb-6'>
        //         <h1 className='text-2xl font-bold text-green-800'>Client Profile</h1>
        //         <button variant='outline'>Back</button>
        //     </div> */}

        //     <div className='flex flex-col items-center mb-6'>
        //         <div className='w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-2'>
        //             <img src="/profileImage.png" alt="profile" className='object-cover w-full h-full' />
        //         </div>
        //         <button className='border flex rounded items-center gap-2 px-2'>
        //             <Upload className='h-4 w-4' /> Upload / Change Photo <RefreshCcw className='h-4 w-4' />
        //         </button>
        //     </div>

        //     <div className='mb-6'>
        //         <form action="">
        //         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
        //             <div className='col-span-1'>
        //                 <label htmlFor="" className='flex mb-2'><UserRound size={20} className='mr-2' />Full Name:</label>
        //                 <input
        //                     value={profile.name}
        //                     onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        //                     className='border w-[90%] p-2 h-8 rounded'
        //                 />
        //             </div>
        //             <div>
        //                 <label htmlFor="" className='flex mb-2'><Building2 size={20} className='mr-2' />Company:</label>
        //                 <input
        //                     value={profile.company}
        //                     onChange={(e) => setProfile({ ...profile, company: e.target.value })}
        //                     className='border w-[90%] p-2 h-8 rounded'
        //                 />
        //             </div>
        //             <div>
        //                 <label htmlFor="">Email:</label>
        //             <input
        //                 value={profile.email}
        //                 onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        //                 className='border w-[90%] p-2 h-8 rounded'
        //             />
        //             </div>
        //             <div>
        //                 <label htmlFor="">Address:</label>
        //             <input
        //                 value={profile.address}
        //                 onChange={(e) => setProfile({ ...profile, address: e.target.value })}
        //                 className='border w-[90%] p-2 h-8 rounded'
        //             />
        //             </div>
        //             <div>
        //                 <label htmlFor="">Phone No.:</label>
        //             <input
        //                 value={profile.phone}
        //                 onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
        //                 className='border w-[90%] p-2 h-8 rounded'
        //             />
        //             </div>
        //             <div>
        //                 <label htmlFor="">Joined:</label>
        //             <input
        //                 value={profile.joined}
        //                 onChange={(e) => setProfile({ ...profile, joined: e.target.value })}
        //                 className='border w-[90%] p-2 h-8 rounded'
        //             />
        //             </div>
        //             <div>
        //                 <label htmlFor="">Customer Id:

        //                 </label>
        //             <input
        //                 value={profile.customerId}
        //                 onChange={(e) => setProfile({ ...profile, customerId: e.target.value })}
        //                 className='border w-[90%] p-2 h-8 rounded'
        //             />
        //             </div>

        //         </div>
        //         </form>
        //         <div className='flex justify-end'>
        //             <button>Edit Info</button>
        //             <button>Change Password</button>
        //         </div>
        //     </div>
        //   </div>
        // </div>
    )
};