import { createPortal } from "react-dom";
import { useAppDispatch } from "@/redux/hooks";
import { useAppSelector } from "@/redux/hooks";
import { modalActions } from "@/redux/features/modalSlice";
import SignUpForm from "@/app/(site)/components/SignUpForm";
import { useEffect } from "react";

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  const element = document.querySelector("#modal-root");
  return element && children
    ? createPortal(<div className="fixed inset-0 w-full h-full flex justify-center items-center z-50">{children}</div>, element)
    : null;
};

const Modal = () => {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector((state) => state.modal.activeModal);

  // 모달 오픈 시 배경 고정
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full bg-black/50 z-40" onClick={() => dispatch(modalActions.CLOSE_MODAL())}>
      <ModalContainer>
        {activeModal === "signUp" && <SignUpForm />}
      </ModalContainer>
    </div>
  );
};

export default Modal;
