export default class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.buckets = Array(this.capacity).fill(null).map(() => []);
        this.size = 0;
    }
  
    _hash(key) {
        let hashCode = 0;
        const prime = 31;
        
        for (let i = 0; i < key.length; i++) {
            hashCode = (hashCode * prime + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }
  
    _resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = Array(this.capacity).fill(null).map(() => []);
        this.size = 0;
  
        for (const bucket of oldBuckets) {
            for (const [key, value] of bucket) {
            this.set(key, value);
            }
        }
    }
  
    set(key, value) {
        const index = this._hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
  
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
  
        bucket.push([key, value]);
        this.size++;
  
        if (this.size / this.capacity > this.loadFactor) {
            this._resize();
        }
    }
  
    get(key) {
        const index = this._hash(key);
      
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
  
        const bucket = this.buckets[index];

        for (let [k, v] of bucket) {
            if (k === key) return v;
        }
        return null;
    }
  
    has(key) {
        return this.get(key) !== null;
    }
  
    remove(key) {
        const index = this._hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
  
        const bucket = this.buckets[index];
        const pairIndex = bucket.findIndex(([k]) => k === key);
  
        if (pairIndex !== -1) {
            bucket.splice(pairIndex, 1);
            this.size--;
            return true;
        }
        return false;
    }
  
    length() {
        return this.size;
    }
  
    clear() {
        this.buckets = Array(this.capacity).fill(null).map(() => []);
        this.size = 0;
    }
  
    keys() {
        const keys = [];
      
        for (let bucket of this.buckets) {
            for (let [key] of bucket) {
                keys.push(key);
            }
        }
        return keys;
    }
  
    values() {
        const values = [];
      
        for (let bucket of this.buckets) {
            for (let [, value] of bucket) {
                values.push(value);
            }
        }
        return values;
    }
  
    entries() {
        const entries = [];
      
        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                entries.push(pair);
            }
        }
        return entries;
    }
}