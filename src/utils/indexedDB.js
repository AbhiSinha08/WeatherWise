function dbConnect(dbName, version, upgrade) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, version);
        
        request.onsuccess = e => {
            resolve(e.target.result);
        };
      
        request.onerror = e => {
            console.error(`indexedDB error: ${ e.target.errorCode }`);
        };
      
        request.onupgradeneeded = upgrade;
    });
}

const objectStoreName = 'cityImages';
let db;

if (window.indexedDB) {
    (async () => {
        db = await dbConnect('indexedDB', 1.0, e => {
            db = e.target.result;
            const store = db.createObjectStore(objectStoreName, { keyPath: 'city' });
        })
    
    })();
}

async function add(city, imageURL) {
    db.transaction([objectStoreName], 'readwrite')
    .objectStore(objectStoreName)
    .add({
        city: city,
        image: imageURL
    });
}

function getData(key) {
    return new Promise((resolve) => {
        const request = db.transaction([objectStoreName])
                    .objectStore(objectStoreName)
                    .get(key);

        request.onsuccess = (event) => {
            return resolve(event.target.result);
        };
    })
}

async function retrieve(key) {
    let result;

    await getData(key)
    .then((data) => {
        result = data;
    })

    return result;
}

if (!window.indexedDB) {
    add = (key, value) => {}
    retrieve = (key) => null
}

export {add, retrieve};