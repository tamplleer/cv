import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

import { Modal } from "./Modal";

// Типы для модального окна
type ModalContent = React.ReactNode | null;

// Тип контекста
type ModalContextType = {
  showModal: boolean;
  content: ModalContent;
  openModal: (content: ModalContent, timeAutoClose?: number) => void;
  closeModal: () => void;
};

// Контекст
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Провайдер
export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState<ModalContent>(null);

  const openModal = (
    modalContent: ModalContent,
    timeAutoClose: number = 1000
  ) => {
    setContent(modalContent);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setContent(null);
    }, timeAutoClose);
  };

  const closeModal = useCallback(() => {
    setShowModal(false);
    // Небольшая задержка перед очисткой контента для анимации закрытия
    setTimeout(() => setContent(null), 300);
  }, []);

  return (
    <ModalContext.Provider
      value={{ showModal, content, openModal, closeModal }}
    >
      {children}
      {showModal ? <Modal>{content}</Modal> : null}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
