export interface Storage {
  /**
   * Sets the given value with the given key into the storage.
   * Objects are serialized with <code>JSON.stringify</code>.
   * @param {string} key the key where to save the value
   * @param value the value to store.
   */
  set(key: string, value: any): any;

  /**
   * Sets the given key value pairs into the storage.
   * This is considered as single transaction, in stores with transactions.
   * @param {object} keyValueMap a object with multiple key value pairs to write into the storage.
   */
  set(keyValueMap: { [index: string]: any }): any;

  /**
   * Returns the value for the given key as string.
   * This method will always return a value if the key exists, because all values are saved as string!
   * @param {string} key the key of the value to access.
   * @returns {string | undefined} the value if existing or undefined otherwise.
   */
  getAsString(key: string): string | undefined;

  /**
   * Returns the value for the given key as number. Tries to parse the value at the given key as number.
   * @param {string} key the key of the value to access.
   * @returns {number | undefined} the value as number if existing or readable as number. Otherwise undefined!
   */
  getAsNumber(key: string): number | undefined;

  /**
   * Returns the value for the given key as boolean. Tries to parse the value at the given key as boolean.
   * @param {string} key the key of the value to access.
   * @returns {boolean | undefined} the value as boolean if existing or readable as boolean. Otherwise undefined!
   */
  getAsBoolean(key: string): boolean | undefined;

  /**
   * Returns the value for the given key as object. Uses JSON.parse for parsing.
   * @param {string} key the key of the value to access.
   * @returns {object | undefined} the object if JSON.parse is able to read it, otherwise undefined.
   */
  getAsObject(key: string): object | undefined;

  /**
   * Uses same logic as {@link getAsObject}. Use {@link getAsObject} for other arrays.
   * @param {string} key the key of the value to access.
   * @returns {string[] | undefined} the string[] if the stored value is readable as string[], otherwise undefined.
   */
  getAsArray(key: string): string[] | undefined;

  /**
   * Similar to {@link getAsString}
   * @param {string} key the key of the value to access.
   * @returns {string | undefined} the value if existing or undefined otherwise.
   */
  get(key: string): string | undefined;

  /**
   * Deletes the given key(s) from the storage.
   * @param {string} key the key of the value to delete.
   */
  del(key: string | string[]): any;

  /**
   * @returns the size of this storage. Only keys matching the prefix are considered.
   */
  size(): number;

  /**
   * @returns true if this storage is empty, otherwise false. Only keys matching the prefix are considered.
   */
  isEmpty(): boolean;
}

export abstract class AbstractStorage implements Storage {
  protected readonly prefix: string | undefined;

  protected constructor(prefix?: string) {
    this.prefix = prefix;
  }

  public getAsString(key: string): string | undefined {
    return this.get(key);
  }

  public getAsNumber(key: string): number | undefined {
    return Number(this.get(key)) || undefined;
  }

  public getAsBoolean(key: string): boolean | undefined {
    const value = this.get(key);
    switch (value) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return undefined;
    }
  }

  public getAsObject(key: string): object | undefined {
    const s = this.get(key);
    if (s) {
      try {
        const o = JSON.parse(s);
        if (o && typeof o === 'object') {
          return o;
        }
      } catch (e) {
        return undefined;
      }
    }
    return undefined;
  }

  public getAsArray(key: string): string[] | undefined {
    const o = this.getAsObject(key);
    if (o && Array.isArray(o)) {
      return o;
    } else {
      return undefined;
    }
  }

  public abstract del(key: string | string[]): any;

  public abstract get(key: string): string | undefined;

  public abstract set(key: string, value: any): any;
  public abstract set(keyValueMap: { [index: string]: any }): any;

  public abstract size(): number;

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  protected concat(key: string): string {
    if (this.prefix) {
      return `${this.prefix}_${key}`;
    } else {
      return key;
    }
  }

  protected prepareValue(value: any): string {
    switch (typeof value) {
      case 'boolean':
      case 'number':
      case 'string':
        return value.toString();
      case 'object':
        return JSON.stringify(value);
      default:
        throw new Error('Invalid type of value');
    }
  }
}

class LocalStorage extends AbstractStorage {
  public constructor(prefix?: string) {
    super(prefix);
  }

  public del(key: string | string[]) {
    if (Array.isArray(key)) {
      key.forEach(k => localStorage.removeItem(this.concat(k)));
    } else {
      localStorage.removeItem(this.concat(key));
    }
  }

  public get(key: string): string | undefined {
    let value: string | undefined | null = localStorage.getItem(
      this.concat(key),
    );
    if (value === null) {
      value = undefined;
    }
    return value;
  }

  public set(key: string | { [index: string]: any }, value?: any) {
    if (typeof key === 'string' && value !== undefined) {
      localStorage.setItem(this.concat(key), this.prepareValue(value));
    } else if (typeof key === 'object') {
      for (const k of Object.keys(key)) {
        localStorage.setItem(this.concat(k), this.prepareValue(key[k]));
      }
    } else {
      throw new Error(
        'Either specify key, value or an object containing multiple key/value pairs',
      );
    }
  }

  public size(): number {
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)!;
      if (this.prefix) {
        if (key.indexOf(this.prefix) === 0) {
          count++;
        }
      } else {
        count++;
      }
    }
    return count;
  }
}

class StorageProvider {
  /**
   * Returns a {@link Storage} which will use the localstorage as storage backend.
   * @param {string} prefix A prefix for all keys managed over this storage instance.
   * @returns {Storage} The storage.
   */
  public static localStorage(prefix?: string): Storage {
    return new LocalStorage(prefix);
  }
}

export default StorageProvider;
