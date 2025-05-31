import * as React from "react"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return (
		(<input
			type={type}
			className={`flex h-9 w-full rounded-md border border-input text-[var(--foreground)] px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:text-sm file:font-medium file:text-[var(--foreground)] placeholder:text-[var(--secondary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${className}`}
			ref={ref}
			{...props} />)
	);
})
Input.displayName = "Input"

export default Input;
