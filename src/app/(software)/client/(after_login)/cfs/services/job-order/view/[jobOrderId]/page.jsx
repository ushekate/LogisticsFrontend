'use client';

import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect, useState } from "react";
import JobDetails from "./components/Table";
import { useRouter } from "next/navigation";

const Page = () => {
    const { setTitle } = useSidebar();
    useEffect(() => {
        setTitle('Job Order View Details')
    }, []);
    const router = useRouter();

    const job = {
        jobId: "1234",
        orderNumber: "ORD5678",
        customerName: "John Doe",
        service: "Transport",
        status: "Completed",
        fromDate: "2025-06-01",
        toDate: "2025-06-10",
        createdOn: "2025-06-01",
        updatedOn: "2025-06-09",
        remarks: "All operations completed successfully.",
        documents: [
            { name: "invoice.pdf", url: "/dummy.pdf" },
            { name: "report.pdf", url: "/dummy.pdf" }
        ],
        assignedPersonnel: {
            assignedBy: "Manager A",
            contact: "1234567890",
            email: "manager@example.com"
        }
    };

    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showStatusModal, setShowStatusModal] = useState(false);



    return (
        <div className="p-4">
            <JobDetails
                jobData={job}
                onBack={() => router.push('/jobs')}
                onUpload={() => setShowUploadModal(true)}
                onEdit={() => router.push(`/jobs/edit/${jobData.jobId}`)}
                onUpdateStatus={() => setShowStatusModal(true)}
            />

            {showUploadModal && (
                <div className="modal">
                    <div className="model-content">
                        <p>Upload Modal</p>
                        <button onClick={() => setShowUploadModal(false)}>Close</button>
                    </div>
                </div>
            )}

            {showStatusModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Status Update Modal</p>
                        <button onClick={() => setShowStatusModal(false)}>Close</button>
                    </div>
                </div>
            )}

        </div>
    )
};

export default Page;

