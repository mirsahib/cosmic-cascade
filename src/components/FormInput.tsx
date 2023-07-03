import React, { PropsWithoutRef, ReactNode, forwardRef } from "react";

interface IFormInput extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
	label?: ReactNode;
	containerclassname: string;
	type: "text" | "email" | "password" | "hidden";
	inputclassname: string;
}

const FormInput = forwardRef<HTMLInputElement, IFormInput>(
	({ children, ...props }, ref) => {
		const { label, containerclassname, type, inputclassname } = props;
		return (
			<div className={containerclassname}>
				{label}
				<input
					{...props}
					ref={ref}
					type={type}
					className={inputclassname}
				/>
			</div>
		);
	}
);
FormInput.displayName = "FormInput";

export default FormInput;


