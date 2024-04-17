//ASYNCHRONOUS JS
//PROMISES

  const getData = async () => {
   const result = await fetch ("https://jsonplaceholder.typicode.com/users");
   const data = await result.json();
   console.log(data);
 };

 getData();
