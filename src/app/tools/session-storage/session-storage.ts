import { SessionStorageKeysEnum } from "@app/enums/session-storage-keys-enum";

/**
 * Установить значение в sessionStorage
 * @param key Ключ sessionStorage
 */
export const setSessionStorage = (key: SessionStorageKeysEnum, value: unknown ): void => {
  const stringifyVal = JSON.stringify(value);
  
  sessionStorage.setItem(key, stringifyVal);
}

/**
 * Получить значение из sessionStorage
 * @param key Ключ sessionStorage
 * @return Значение из sessionStorage
 */
export const getSessionStorage = <T = unknown>(key: SessionStorageKeysEnum): T | null => {
  const stringifyVal = sessionStorage.getItem(key)
  if (! stringifyVal) {
    return null;
  }

  return JSON.parse(stringifyVal);
}
