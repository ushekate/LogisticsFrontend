'use client';

import { Button } from "@/components/ui/button";
import { Trash2, Upload } from "lucide-react";

export default function EditTicket() {
    return (
        <div className="p-8 border-0 rounded bg-accent shadow-lg">
            <div>
                <form action="">
                    <div className="grid mb-4">
                        <label htmlFor="" className="mb-2">Customer/Client Name</label>
                        <input type="text" className="border rounded h-10 p-2 bg-[#B1CDB3]" placeholder="ABC Logistics" />
                    </div>
                    <div className="grid mb-4">
                        <label htmlFor="" className="mb-2">CFS Location</label>
                        {/* <input type="text" className="border rounded h-8 p-2 bg-[#B1CDB3]" placeholder="CFS Location" /> */}
                        <select className="border rounded h-10 p-2 bg-[#B1CDB3]">
                            {/* <option value="" disabled>CFS Location</option> */}
                            <option value="">Nava Sheva</option>
                            <option value="">Mundra</option>
                            <option value="">Chennai</option>
                        </select>
                    </div>
                    <div className="grid mb-4">
                        <label htmlFor="" className="mb-2">Issue Title</label>
                        <input type="text" className="border rounded h-10 p-2 bg-[#B1CDB3]" placeholder="Delay Unload" />
                    </div>
                    <div className="grid mb-4">
                        <label htmlFor="" className="mb-2">Type</label>
                        {/* <input type="text" className="border rounded h-10 p-2 bg-[#B1CDB3]" placeholder="Delay" /> */}
                        <select className="border rounded h-10 p-2 bg-[#B1CDB3]">
                            {/* <option value="" disabled>Type</option> */}
                            <option value="">Delay</option>
                            <option value="">Damage</option>
                            <option value="">Query</option>
                        </select>
                    </div>
                    <div className="grid mb-4">
                        <label htmlFor="" className="mb-2">Status</label>
                        {/* <input type="text" className="border rounded h-10 p-2 bg-[#B1CDB3]" placeholder="" /> */}
                        <select className="border rounded h-10 p-2 bg-[#B1CDB3]">
                            <option value="">Pending</option>
                            <option value="">Resolved</option>
                            <option value="">Closed</option>
                        </select>
                    </div>
                    <div className="grid mb-4">
                        <label htmlFor="" className="mb-2">Description</label>
                        <textarea className="border rounded p-2 h-30 bg-[#B1CDB3]"></textarea>
                    </div>
                    <div className="grid mb-4">
                        <label htmlFor="" className="mb-2">Uploaded Files</label>
                        <div className="flex justify-between border rounded h-10 p-1 bg-[#B1CDB3]">
                            <input type="file" className="p-1" />
                            <button className="flex text-white bg-red-700 rounded p-1 px-2 mx-3"><Trash2 size={16} className="mt-1 mr-2" />Remove</button>
                        </div>
                    </div>
                    <div className="grid mb-4">
                        <label htmlFor="" className="mb-2">Replace File</label>
                        <Button className="flex items-center justify-center text-white h-10"><Upload size={16} className="mr-2" />Upload New</Button>
                    </div>
                    <div className="mb-4">
                        <hr className="text-green-800 font-bold" />
                    </div>
                    <div className="flex justify-end gap-4">
                        <Button className="bg-red-700 text-white">Cancel</Button>
                        <Button className="text-white">Save Changes</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}