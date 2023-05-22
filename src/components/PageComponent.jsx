import {Pagination,PaginationItem, PaginationLink} from 'reactstrap'


const PageComponent = ({changePage}) => {
    return(

        <Pagination className='pagination'>
                
                <PaginationItem onClick={() => changePage(1)}>
                    <PaginationLink href="#">
                    1
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem onClick={() => changePage(2)}>
                    <PaginationLink href="#">
                    2
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem onClick={() => changePage(3)}>
                    <PaginationLink href="#">
                    3
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem onClick={() => changePage(4)}>
                    <PaginationLink href="#">
                    4
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem onClick={() => changePage(5)}>
                    <PaginationLink href="#">
                    5
                    </PaginationLink>
                </PaginationItem>
               
         </Pagination>
    )
}
export default PageComponent;