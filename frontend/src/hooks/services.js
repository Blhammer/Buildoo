import { useQuery } from '@tanstack/react-query';
import { findPage } from '../services/requester';

export const useData = (activePage) => {
    return useQuery(['cardsPaginate', activePage], async () => {
        const data = await findPage(activePage);

        return data;
    }, { keepPreviousData: true }
    );
};