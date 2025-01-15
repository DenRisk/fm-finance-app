export type FinancialData = {
    balance: {
        current: number;
        income: number;
        expenses: number;
    };
    transactions: {
        avatar: string;
        name: string;
        category: string;
        date: string;
        amount: number;
        recurring: boolean;
    }[];
    budgets: Budget[];
    pots: Pot[];
};

export type Budget = {
    category: string;
    maximum: number;
    theme: string;
}

export type Pot = {
    name: string;
    target: number;
    total: number;
    theme: string;
}
