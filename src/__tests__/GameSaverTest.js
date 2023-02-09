import awaitFunction from '../js/GameSaver';

test('should return JSON format', async () => {
  const answer = await awaitFunction();
  const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  expect(answer).toBe(result);
});
