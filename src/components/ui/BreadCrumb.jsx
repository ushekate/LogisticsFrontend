import * as React from "react"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef(
	({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => (
	<ol
		ref={ref}
		className={cn(
			"flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
			className
		)}
		{...props}
	/>
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn("inline-flex items-center gap-1.5", className)}
		{...props}
	/>
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
	return (
		<a
			ref={ref}
			className={cn("transition-colors hover:text-foreground", className)}
			{...props}
		/>
	)
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbSeparator = ({ className, ...props }) => (
	<li
		role="presentation"
		aria-hidden="true"
		className={cn("[&>svg]:size-3.5", className)}
		{...props}
	>
		<ChevronRight />
	</li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
}
