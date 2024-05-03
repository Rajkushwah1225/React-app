import React, { useState, useEffect } from 'react';

function MyPromise() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data,"iii");
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation, like fetching data from an API
      setTimeout(() => {
        // Simulating successful data retrieval
        const fakeData = {message:"hello world!"};
        resolve(fakeData);
        
        // Simulating an error
        // reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  };

  console.log(fetchData(),"---")

  return (
    <div>
      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyPromise;