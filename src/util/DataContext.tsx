import React, { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import {fetchData} from './fetchData'
import {FinancialData} from '../types/data'


const DataContext = createContext<FinancialData | undefined>(undefined);

export const DataProvider = ({ children }: {children: React.ReactNode}) => {
    const { data, isLoading, isError } = useQuery<FinancialData>({
        queryKey: ['data'],
        queryFn: fetchData,
    });

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>Failed to load data</p>;

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
