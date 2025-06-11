'use client';
import { useRef, useState } from "react";
import { Upload, Edit, Trash2, Plus, Mail, Phone, IdCard, Earth, Building2, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/Tabs";

export default function UserVerificationViewDesktop() {
	const [activeTab, setActiveTab] = useState("CFS");
	const [status, setStatus] = useState("approved");
	const [uploadedImages, setUploadedImages] = useState([]);

	const fileInputRef = useRef(null);

	const handleImageUpload = (e) => {
		const files = Array.from(e.target.files);
		const imagePreviews = files.map(file => URL.createObjectURL(file));
		setUploadedImages(prev => [...prev, ...imagePreviews]);
	};

	const triggerFileUpload = () => {
		if (fileInputRef.current) fileInputRef.current.click();
	};

	const services = ['Priority Movement', 'Re-scanning'];
	const facilities = ['Forklift, Cranes, Scanner'];
	const transports = ['Vehicle No, Route, Driver, Track Button'];
	const warehouse = ['Location, Type, Space'];
	const uploadedDocs = ['doc1.pdf', 'doc2.png', 'doc3.jpg'];

	return (
		<div className="bg-[var(--background)] min-h-screen text-green-900 px-3 py-4 space-y-4">

			<div className="flex flex-wrap gap-2 sm:justify-start">
				<Tabs>
					<input
						type="button"
						value="CFS"
						onClick={() => setActiveTab("CFS")}
					/>
				</Tabs>
				<Tabs>
					<input
						type="button"
						value="Customer"
						onClick={() => setActiveTab("Customer")}
					/>
				</Tabs>
			</div>


			<div className="flex flex-wrap gap-2 sm:justify-start">
				<Button onClick={() => setStatus('approved')} className={`px-4 py-1 rounded text-white text-sm ${status === 'approved' ? 'bg-blue-600' : 'bg-blue-300'}`}>Approved</Button>
				<Button onClick={() => setStatus('rejected')} className={`px-4 py-1 rounded text-white text-sm ${status === 'rejected' ? 'bg-red-600' : 'bg-red-300'}`}>Rejected</Button>
			</div>


			<div className="bg-accent shadow-md p-4 rounded-md space-y-4">
				<h2 className="text-md font-semibold">{activeTab} Details View</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
					<div>
						<div className="flex items-start gap-2">
							<User size={20} className="mt-1" />
							<p><span className="font-semibold">Name:</span> {activeTab === 'CFS' ? 'John Doe' : 'Jane Customer'}</p>
						</div>
						<div className="flex items-start gap-2">
							<Mail size={20} className="mt-1" />
							<p><span className="font-semibold">Email:</span> {activeTab === 'CFS' ? 'john.doe@example.com' : 'jane.cust@example.com'}</p>
						</div>
						<div className="flex items-start gap-2">
							<Phone size={20} className="mt-1" />
							<p><span className="font-semibold">Phone:</span> +1 234 567 8900</p>
						</div>
					</div>
					<div>
						<div className="flex items-start gap-2">
							<Building2 size={20} className="mt-1" />
							<p><span className="font-semibold">Company:</span> {activeTab === 'CFS' ? 'ABC Logistics Ltd.' : 'Customer Pvt Ltd.'}</p>
						</div>
						<div className="flex items-start gap-2">
							<Earth size={20} className="mt-1" />
							<p><span className="font-semibold">Location:</span> {activeTab === 'CFS' ? 'New York, USA' : 'Mumbai, India'}</p>
						</div>
						<div className="flex items-start gap-2">
							<IdCard size={20} className="mt-1" />
							<p><span className="font-semibold">ID Proof:</span> {activeTab === 'CFS' ? 'DL123456789' : 'Aadhar 1234-5678-9012'}</p>
						</div>
					</div>
				</div>


				<div className="text-sm">
					<p className="font-semibold mb-2">Uploaded Documents:</p>
					<div className="flex flex-wrap gap-2">
						{uploadedDocs.map((doc, idx) => (
							<span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{doc}</span>
						))}
					</div>
				</div>


				<div className="text-sm">
					<p className="font-semibold mb-2">Gallery Upload:</p>
					<Button onClick={triggerFileUpload} className="mb-3 bg-green-700 text-white px-4 py-1 rounded text-sm">
						<Upload className="mr-1" size={16} />
						Upload Images
					</Button>
					<input type="file" accept="image/*" multiple ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
					<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
						{uploadedImages.map((src, idx) => (
							<div key={idx} className="h-20 border rounded overflow-hidden">
								<img src={src} alt={`Uploaded ${idx}`} className="w-full h-full object-cover" />
							</div>
						))}
					</div>
				</div>
			</div>


			{[
				{ title: 'Services', items: services },
				{ title: 'Facility Details', items: facilities },
				{ title: 'Transport Details', items: transports },
				{ title: 'Warehouse Info', items: warehouse },
			].map((section, i) => (
				<div key={i} className="bg-accent shadow-md p-4 rounded-md space-y-2">
					<div className="flex justify-between sm:flex-row sm:justify-between sm:items-center gap-2">
						<h3 className="font-semibold text-sm">{section.title}</h3>
						<div className="flex gap-2 flex-wrap">
							<Button className="text-xs text-green-600 flex items-center gap-1 border bg-green-100"><Plus size={12} />Add</Button>
							<Button className="text-xs text-blue-600 flex items-center gap-1 border bg-blue-100"><Edit size={12} />Edit</Button>
							<Button className="text-xs text-red-600 flex items-center gap-1 border bg-red-100"><Trash2 size={12} />Delete</Button>
						</div>
					</div>
					<ul className="list-disc ml-4 text-sm text-green-900">
						{section.items.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

