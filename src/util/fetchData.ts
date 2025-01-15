export const fetchData = async () => {
    const response = await fetch('/data.json');
    if (!response.ok) {
        throw new Error('Failed to fetch local data');
    }
    return response.json();
};