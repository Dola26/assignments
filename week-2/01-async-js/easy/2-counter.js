function startCounter(count) {
    console.log(count);
  
    // Base case: Stop when count reaches 0
    if (count > 0) {
      // Schedule the next iteration after 1000 milliseconds (1 second)
      setTimeout(function () {
        startCounter(count - 1);
      }, 1000);
    } else {
      console.log("Counter complete!");
    }
  }
  
  // Start the counter with an initial count of 5
  startCounter(5);
  