import { useCallback, useState } from 'react';

export const useModal = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
