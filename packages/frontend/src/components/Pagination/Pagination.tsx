import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";
import { FC } from "react";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  count: number;
}

const Pagination: FC<PaginationProps> = ({
  page,
  setPage,
  pageSize,
  count,
}) => {
  const totalPages = Math.ceil(count / pageSize);

  return (
    <ButtonGroup isAttached variant="outline">
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => setPage(1)}
        isDisabled={page === 1}
      >
        <FiChevronsLeft />
      </Button>
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => setPage(page - 1)}
        isDisabled={page === 1}
      >
        <FiChevronLeft />
      </Button>
      {page > 1 && (
        <>
          {page === totalPages && (
            <Button
              colorScheme="blue"
              variant="outline"
              onClick={() => setPage(page - 2)}
            >
              {page - 2}
            </Button>
          )}
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => setPage(page - 1)}
          >
            {page - 1}
          </Button>
        </>
      )}
      <Button colorScheme="blue" variant="solid">
        {page}
      </Button>
      {page < totalPages && (
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={() => setPage(page + 1)}
        >
          {page + 1}
        </Button>
      )}
      {page === 1 && (
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={() => setPage(page + 2)}
        >
          {page + 2}
        </Button>
      )}
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => setPage(page + 1)}
        isDisabled={page === totalPages}
      >
        <FiChevronRight />
      </Button>
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => setPage(totalPages)}
        isDisabled={page === totalPages}
      >
        <FiChevronsRight />
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
