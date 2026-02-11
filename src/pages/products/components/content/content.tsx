import { useState } from 'react';
import { ContentLayout } from './content-layout/content-layout';
import { Pagination } from './pagination/pagination';
import { Table } from './table/table';
import { Title } from './title/title';
import { selectQuantityElements } from '../../../../entites/product/store/selectors';
import { useAppSelector } from '../../../../shared/store/hooks';

export const Content = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const quantity = useAppSelector(selectQuantityElements);
    const ITEMS_PER_PAGE = 5;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1; // первый элемент страницы
    const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, quantity);
    return (
        <ContentLayout>
            <Title />
            <Table currentPage={currentPage} ITEMS_PER_PAGE={ITEMS_PER_PAGE} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                startIndex={startIndex}
                endIndex={endIndex}
            />
        </ContentLayout>
    );
};
