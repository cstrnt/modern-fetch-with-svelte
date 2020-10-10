import { writable } from "svelte/store";

const cache = new Map();

export function getData(url) {
  const store = writable(new Promise(() => {}));
  if (cache.has(url)) {
    store.set(cache.get(url));
  }
  const load = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      cache.set(url, data);
      store.set(data);
    } else {
      store.set(Promise.reject());
    }
  };
  load();
  return store;
}
