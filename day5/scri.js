function fetchData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data));
  }
  
  function processData(data) {
    console.log(data);
  }
  
  fetchData("https://jsonplaceholder.typicode.com/posts/1", processData);
  