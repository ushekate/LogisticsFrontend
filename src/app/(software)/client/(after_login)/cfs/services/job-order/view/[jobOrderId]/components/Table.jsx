'use client';
import React, { useState } from 'react';
import { Eye, Download, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const JobDetails = ({ jobData, onBack, onUpload, onEdit, onUpdateStatus }) => {

    // const router = useRouter();


    const {
        jobId,
        orderNumber,
        customerName,
        service,
        status,
        fromDate,
        toDate,
        createdOn,
        updatedOn,
        remarks,
        documents,
        assignedPersonnel,
    } = jobData;

    // const [showUploadModal, setShowUploadModal] = useState(false);
    // const [showStatusModal, setShowStatusModal] = useState(false);

    const getStatusClass = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-100 text-green-800 border border-green-500';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800 border border-yellow-500';
            case 'Cancelled':
                return 'bg-red-100 text-red-800 border border-red-500';
            default:
                return 'bg-gray-300 text-gray-800 border border-gray-800';
        }
    };

    return (
        <div>
            {/* Job Info */}
            <div className='border-0 bg-accent shadow-md rounded-lg p-4'>
                <h1 className='text-lg font-semibold mb-4'>Job Information</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>Job ID:<div><strong>{jobId}</strong></div></div>
                    <div>Order Number:<div><strong>{orderNumber}</strong></div></div>
                    <div>Customer Name:<div><strong>{customerName}</strong></div></div>
                    <div>Service:<div><strong>{service}</strong></div></div>
                    <div className='col-span-2'>
                        Status
                        <div>
                            <strong>
                                <span className={`inline-block mt-1 ${getStatusClass(status)} text-sm text-bold px-3 py-1 rounded-full`}>
                                    {status}
                                </span>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className='border-0 rounded-lg shadow-md p-5 bg-accent mt-4'>
                <h2 className='text-lg font-semibold mb-4'>Timeline</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <div>From Date<div><strong>{fromDate}</strong></div></div>
                    <div>To Date<div><strong>{toDate}</strong></div></div>
                    <div>Created On<div><strong>{createdOn}</strong></div></div>
                    <div>Last Updated<div><strong>{updatedOn}</strong></div></div>
                </div>
            </div>

            {/* Remarks */}
            <div className='border-0 rounded-lg p-5 bg-accent shadow-md mt-4'>
                <h2 className='text-lg font-semibold mb-2'>Remarks / Notes</h2>
                <p>{remarks}</p>
            </div>


            {/* Uploaded Documents */}
            <div className='border-0 rounded-lg p-5 bg-accent shadow-md mt-4'>
                <h2 className='text-lg font-semibold mb-2'>Uploaded Documents</h2>
                <div className='space-y-3'>
                    {documents.map((doc, i) => (
                        <div key={i} className='px-4 py-2 rounded flex items-center justify-between'>
                            <span>{doc.name}</span>
                            <div className='flex space-x-2'>
                                {/* Download button using <a> tag */}
                                <a
                                    href={doc.url}
                                    download={doc.name}
                                    className='bg-green-700 text-white text-sm px-3 py-1 rounded hover:bg-green-800 flex items-center space-x-1'
                                >
                                    <Download size={15} /><span>Download</span>
                                </a>

                                {/* Preview (open in new tab) */}
                                <a
                                    href={doc.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-green-700 text-white text-sm px-3 py-1 rounded hover:bg-green-800 flex items-center space-x-1'
                                >
                                    <Eye size={15} /><span>Preview</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Uploaded Documents */}
            {/* <div className='border-0 rounded-lg p-5 bg-accent shadow-md mt-4'>
                <h2 className='text-lg font-semibold mb-2'>Uploaded Documents</h2>
                <div className='space-y-3'>
                    {documents.map((doc, i) => (
                        <div key={i} className='px-4 py-2 rounded flex items-center justify-between'>
                            <span>{doc.name}</span>
                            <div className='flex space-x-2'>
                                <Button className='text-white text-sm px-3 py-1 rounded flex items-center space-x-1'>
                                    <Download size={15} /><span>Download</span>
                                </Button>
                                <Button className='text-white text-sm px-3 py-1 rounded flex items-center space-x-1'>
                                    <Eye size={15} /><span>Preview</span>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Assigned Personnel */}
            <div className='border-0 rounded-lg p-5 bg-accent shadow-md mt-4'>
                <h2 className='text-lg font-semibold mb-4'>Assigned Personnel</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div>
                        <div>Assigned By</div>
                        <div><strong>{assignedPersonnel.assignedBy}</strong></div>
                    </div>
                    <div>
                        <div>Contact Number</div>
                        <div className='flex items-center space-x-2'>
                            <Phone size={16} />
                            <span><strong>{assignedPersonnel.contact}</strong></span>
                        </div>
                    </div>
                    <div>
                        <div>Email</div>
                        <div className='flex items-center space-x-2'>
                            <Mail size={16} />
                            <span><strong>{assignedPersonnel.email}</strong></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-wrap justify-end space-x-2 pt-4 mt-4'>
                <Button onClick={onBack} className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'>Back</Button>
                <Button onClick={onUpload} className='text-white px-4 py-2 rounded'>Upload File</Button>
                <Button onClick={onEdit} className='text-white px-4 py-2 rounded'>Edit Job</Button>
                <Button onClick={onUpdateStatus} className='text-white px-4 py-2 rounded'>Update Status</Button>
            </div>
        </div>
    );
};

export default JobDetails;


