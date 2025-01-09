type ButtonProps = {
    children: React.ReactNode;
    fullWidth?: boolean;
    type: "button-primary" | "button-secondary" | "button-transparent" | "button-destroy";
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
};

const buttonStyles: Record<string, string> = {
    "button-primary": "p-4 bg-grey-900 text-white hover:bg-grey-500 active:bg-grey-500 disabled:bg-grey-100 disabled:bg-grey-300",
    "button-secondary": "p-4 bg-beige-100 text-grey-900 hover:bg-white hover:border-beige-500 disabled:bg-grey-100 disabled:bg-grey-300",
    "button-destroy": "p-4 bg-primary-red text-white hover:bg-hover-red active:bg-hover-red disabled:bg-hover-red disabled:text-grey-500",
    "button-transparent": "p-0 bg-transparent text-grey-500 hover:text-grey-900 active:text-grey-900 disabled:text-grey-300",
};

export default function Button({children, type = "button-primary", fullWidth = false, onClick, disabled}: ButtonProps) {
    return (
        <button
            disabled={disabled}
            className={`inline-flex items-center justify-center text-4-bold rounded-lg transition duration-200 gap-2 border border-solid border-transparent 
            ${buttonStyles[type]} ${fullWidth ? "w-full" : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
