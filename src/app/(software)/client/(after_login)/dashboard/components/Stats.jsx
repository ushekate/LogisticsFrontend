import { useEffect, useState } from "react";

export default function Stats({ orders = [] }) {

	const [Stats, setStats] = useState({
		total: 0,
		approved: 0,
		rejected: 0,
		pending: 0,
	});

	//for Progress Bar
	// const total = 2;
	// const approved = 1;
	// const rejected = 1;

	const approvedPercent = (Stats.approved / Stats.total) * 100;
	const rejectedPercent = (Stats.rejected / Stats.total) * 100;

	useEffect(() => {
		let pending = 0, approved = 0, rejected = 0;

		if (orders.length === 0) {
			setStats((prev) => {
				if (prev.total === 0 && prev.approved === 0 && prev.rejected === 0 && prev.pending === 0) {
					return prev;
				}
				return {
					total: 0,
					approved: 0,
					rejected: 0,
					pending: 0,
				};
			});
			return;
		}

		orders.forEach((order) => {
			if (order.status === 'Accepted') approved++;
			else if (order.status === 'Rejected') rejected++;
			else if (order.status === 'Pending') pending++;
		});

		const newStats = {
			total: orders.length,
			approved,
			rejected,
			pending,
		};

		setStats((prev) => {
			if (
				prev.total === newStats.total &&
				prev.approved === newStats.approved &&
				prev.rejected === newStats.rejected &&
				prev.pending === newStats.pending
			) {
				return prev;
			}
			return newStats;
		});
	}, []);

	return (
		<div className="md:w-full w-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
			<div className=" bg-accent rounded-lg p-6 grid gap-2 shadow-2xl w-full">
				<h4 className="text-sm">Total Orders</h4>
				<h1 className="text-3xl font-semibold">{Stats.total}</h1>

				<div className="h-2 w-full bg-green-200 rounded-full mt-4 overflow-hidden">
					<div className="h-full bg-green-600" style={{width:`${approvedPercent}%`}}></div>
					<div className="h-full bg-red-600" style={{width:`${rejectedPercent}%`}}></div>
				</div>
				<div className="flex justify-between text-xs mt-1 text-green-900">
					<span>{approvedPercent.toFixed(0)}% Approved</span>
					<span>{rejectedPercent.toFixed(0)}% Rejected</span>
				</div>
			</div>


			<div className="bg-accent rounded-lg p-6 grid gap-2 shadow-2xl w-full">
				<h4 className="text-sm">Approved Orders</h4>
				<h1 className="text-3xl font-semibold">{Stats.approved}</h1>
				<div className="h-2 w-full bg-green-200 rounded-full mt-4">
					<div className="h-full bg-green-600 rounded-full" style={{width: `${approvedPercent}%`}}></div>
				</div>
				<p className="text-xs mt-1 text-green-900">{approvedPercent.toFixed(0)}% of Total</p>
			</div>

			<div className="bg-accent rounded-lg p-6 grid gap-2 shadow-2xl w-full">
				<h4 className="text-sm">Rejected Orders</h4>
				<h1 className="text-3xl font-semibold">{Stats.rejected}</h1>
				<div className="h-2 w-full bg-red-200 rounded-full mt-4">
					<div className="h-full bg-red-500 rounded-full" style={{width:`${rejectedPercent}%`}}></div>
				</div>
				<p className="text-xs mt-1 text-green-900">{rejectedPercent.toFixed(0)}% of Total</p>
			</div>
		</div>
	)
}
