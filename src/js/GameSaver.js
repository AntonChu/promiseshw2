import json from './parser';
import read from './reader';

function read() {
    return new Promise((resolve) => {
      // эмуляция чтения файла
      setTimeout(() => {
        const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
        return (input => { // eslint-disable-line
          const buffer = new ArrayBuffer(input.length * 2);
          const bufferView = new Uint16Array(buffer);
          for (let i = 0; i < input.length; i + 1) {
            bufferView[i] = input.charCodeAt(i);
          }
          resolve(buffer);
        })(data);
      }, 1000);
    });
}

function json(data) {
    return new Promise((resolve) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      }, 500);
    });
}

(async () => {
  try {
    const responce = await read();
    console.log('read() done');
    const result = await json(responce);
    console.log('json() done');
    console.log(result);
  }
  catch(err) {
    console.log(err)
  }
  finally {
    return result
  }
})();
