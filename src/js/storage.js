// Storage 의 캡슐화를 위해 Class 선언
class Storage {
    static #STORAGE_KEY = '__item_storage__';
    static #storageCache = JSON.parse(localStorage.getItem(this.#STORAGE_KEY));

    static getStorage() {
        return this.#storageCache;
    }

    static #saveStorage() {
        localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.#storageCache));
        return JSON.parse(localStorage.getItem(this.#STORAGE_KEY));
    }

    static addElement(item) {
        const cache = this.#storageCache;
        if(cache && cache.length > 8) return cache;
        if(!cache) this.#storageCache = [];
        this.#storageCache.push(item);
        return this.#saveStorage();
    }
    
    static resetStorage() {
        if(this.#storageCache) localStorage.removeItem(this.#STORAGE_KEY);
        this.#storageCache = null;
        return this.#saveStorage();
    }
    
    static removeElement(key, deleteValue) {
        if(this.#storageCache) 
            this.#storageCache = this.#storageCache.filter((value) => {return value[key] != deleteValue});

        if(this.#storageCache && this.#storageCache.length < 1) {
            return this.resetStorage();
        }
        else return this.#saveStorage();
    }
}

export default Storage;