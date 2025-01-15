'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useState} from 'react'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

type ProviderProps = {
    children: React.ReactNode
}

export default function ReactQueryProvider({children}: ProviderProps) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            {children}
        </QueryClientProvider>
    )
}