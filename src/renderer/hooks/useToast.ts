import { Slide, toast } from 'react-toastify';

const toastSettings = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  transition: Slide,
};

interface toastProps {
  message: string;
  settings?: object;
}

export function useToast() {
  function successMessage({ message, settings = {} }: toastProps) {
    toast.success(message, {
      ...toastSettings,
      ...settings,
    });
  }

  function errorMessage({ message, settings = {} }: toastProps) {
    toast.error(message, {
      ...toastSettings,
      ...settings,
    });
  }

  return { successMessage, errorMessage };
}
