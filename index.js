function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  function countDown(startingNumber) {
    if (startingNumber < 0 || !Number.isInteger(startingNumber)) {
      console.log("Please provide a positive integer as input.");
      return;
    }
  
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  const names = ["Adan", "Osman", "Ali"];
  const eventName = "birthday";
  
  const thankYouMessages = writeCards(names, eventName);
  console.log(thankYouMessages);
  
  countDown(10);
  