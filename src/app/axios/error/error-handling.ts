import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

interface IUseRequestErrorHandling {
  errorCodes: IErrorCodes
  baseErrorHandling: <T>(err: AxiosError<T>) => void
}

interface IErrorCodes {
  unknown: () => void
  [N: number]: () => void
}

export const useRequestErrorHandling = (): IUseRequestErrorHandling => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const errorCodes: IErrorCodes = {
    400: ():void => { enqueueSnackbar(t('errors.400')) },

    401: ():void => { enqueueSnackbar(t('errors.401')) },
    
    403: ():void => { enqueueSnackbar(t('errors.403')) },

    404: ():void => { enqueueSnackbar(t('errors.404')) },

    500: ():void => { enqueueSnackbar(t('errors.500')) },

    unknown: (): void => { enqueueSnackbar(t('errors.unknown')) }
  }

  const baseErrorHandling = <T>(err: AxiosError<T>): void => {
    const code = err.response?.status

    if (code && Object.prototype.hasOwnProperty.call(errorCodes, code)) {
      errorCodes[code]()
    } else {
      errorCodes.unknown()
    }
  }

  return {
    errorCodes,
    baseErrorHandling
  }
}
