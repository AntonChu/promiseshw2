import json from './parser';
import read from './reader';

export default async function awaitFunction() {
  try {
    const responce = await read();
    return await json(responce);
  } catch (err) {
    throw new Error(err);
  }
}
