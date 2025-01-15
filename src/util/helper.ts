export const formatCurrency = (value: number | undefined, useDecimal: boolean = false): string => {
    if (value === undefined) {
        return '';
    }

    if (value < 0 && useDecimal) {
        return `-$${value.toFixed(2).slice(1)}`
    }

    if (value < 0 && !useDecimal) {
        return `-$${value.toString().slice(1)}`
    }

    if (useDecimal) {
        return `$${value.toFixed(2)}`;
    }

    return `$${value}`;
};

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}