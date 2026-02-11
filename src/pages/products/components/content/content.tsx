import { ContentLayout } from './content-layout/content-layout';
import { Pagination } from './pagination/pagination';
import { Table } from './table/table';
import { Title } from './title/title';

export const Content = () => {
    return (
        <ContentLayout>
            <Title />
            <Table />
            <Pagination />
        </ContentLayout>
    );
};
