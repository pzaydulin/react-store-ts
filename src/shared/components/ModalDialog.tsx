import * as React from "react";
import { Dialog } from "@base-ui-components/react/dialog";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface DialogButtonProps {
  title: string;
  onClick: () => void;
}

interface ModalDialogProps {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  title?: string;
  children: React.ReactNode;
  iconClose?: boolean;
  buttonClose?: DialogButtonProps;
  buttonConfirm?: DialogButtonProps;
}

const ModalDialog: React.FC<ModalDialogProps> = ({
  open = false,
  onOpenChange,
  title,
  children,
  iconClose = false,
  buttonClose,
  buttonConfirm,
}) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
      aria-describedby="dialog-description"
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="z-20 fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70" />
        <Dialog.Popup
          className="z-30 fixed top-1/2 left-1/2 min-w-96 max-w-[calc(100vw-2rem)]
            overflow-y-auto max-h-[calc(100vh-2rem)]
            -translate-x-1/2 -translate-y-1/2 
            rounded-lg bg-card p-6 outline outline-1 outline-secondary 
            transition-all duration-150 data-[ending-style]:scale-90 
            data-[ending-style]:opacity-0 data-[starting-style]:scale-90 
            data-[starting-style]:opacity-0"
        >
          {title && (
            <Dialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
              {title}
            </Dialog.Title>
          )}

          {/* Dialog.Description не используется из-за ошибки --> в <p> не может быть вложен <div> */}
          <div
            id="dialog-description"
            className="text-sm text-muted-foreground"
          >
            {children}
          </div>
          {iconClose ? (
            <Dialog.Close className="absolute top-2 right-2">
              <div className="rounded-lg p-2 text-base opacity-50 hover:opacity-100 active:opacity-50">
                <CloseOutlinedIcon />
              </div>
            </Dialog.Close>
          ) : (
            <div className="flex justify-end gap-4 mt-6">
              <Dialog.Close
                onClick={buttonClose?.onClick}
                className="items-center justify-center rounded-md text-sm font-medium  disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary_foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                {buttonClose?.title}
              </Dialog.Close>
              {buttonConfirm && (
                <button
                  onClick={buttonConfirm.onClick}
                  className="items-center justify-center rounded-md text-sm font-medium  disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary_foreground hover:bg-secondary/90 h-10 px-4 py-2"
                >
                  {buttonConfirm.title}
                </button>
              )}
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalDialog;
