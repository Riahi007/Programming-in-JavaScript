const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Task 01
const iterateWithAsyncAwait = async (values) => {
  for (const value of values) {
    console.log(value);
    await delay(1000);
  }
};

// Task 02
const fetchDataFromAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fetched data from API');
    }, 2000);
  });
};

const awaitCall = async () => {
  try {
    const data = await fetchDataFromAPI();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Task 04
const fetchFirstAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from first API');
    }, 1500);
  });
};

const fetchSecondAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from second API');
    }, 2000);
  });
};

const concurrentRequests = async () => {
  try {
    const results = await Promise.all([fetchFirstAPI(), fetchSecondAPI()]);
    console.log('Combined Results:', results);
  } catch (error) {
    console.error('Error with concurrent requests:', error);
  }
};

// Call the functions
(async () => {
  await iterateWithAsyncAwait(['Value 1', 'Value 2', 'Value 3']);
  await awaitCall();
  await concurrentRequests();
})();
