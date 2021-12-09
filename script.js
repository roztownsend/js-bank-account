// BANK ACCOUNT

/* As required by the directions in the starter code for this file: parseFloat() is required for deposit/withdrawal functions because the user input will need to be converted to a floating point number. Likewise, parseInt in the atm function parses user input into integers. */

// Object, properties and functions/methods:

const account = {
  accountName: "Helena Johansson",
  balance: 100,
  getBalance: function () {
    alert(`Your current balance is ${this.balance}`);
  },
  deposit: function() {
    let depositAmount = parseFloat(prompt("Please specify a deposit amount."));
    if (isNaN(depositAmount) || depositAmount === " " || depositAmount <= 0) {
			alert('Error: positive numbers in digits only please.');
			this.deposit();
		} else {
    this.balance = depositAmount + this.balance;
    alert(`Deposit successful! You added ${depositAmount} and your new balance is ${this.balance}.`);
    }
  },
  withdrawal: function() {
    let withdrawalAmount = parseFloat(prompt("Please specify a withdrawal amount."));
    if (isNaN(withdrawalAmount) || withdrawalAmount === " " || withdrawalAmount <= 0) {
			alert('Error: positive numbers in digits only please.');
			this.withdrawal();
    } else {
    this.balance = this.balance - withdrawalAmount;
    alert(`Withdrawal successful! You withdrew ${withdrawalAmount} and your new balance is ${this.balance}.`);
    }
  },
  getAccountName: function() {
    alert(`Name of account: ${this.accountName}`);
  },
  accountError: function() {
    alert(`There's been an error. Please make sure you input only the numbers in the prompt.`);
  },
  exitAccount: function() {
    alert(`This will exit the account and close the window. Have a nice day!`);
    window.opener = self;
    window.close();
  }
}

// Starter Function:
function atm() {
  let choice = parseInt(prompt(`Welcome to ${account.accountName}'s account! Select a choice:
  1. See balance
  2. Make a deposit
  3. Make a withdrawal
  4. Get account holder name
  5. Exit`));

  /* Re: Point 2 of the readme file: I decided to use switch instead of an if-then because my understanding is that switch statements are used to test the value of a given variable - I took the parseInt function given to us as a hint that we would be testing number values here, as opposed to booleans. Note for the atm function reload I did the if statement. */

  //Switch case for prompts:

  switch (choice) {
    case 1:
      account.getBalance();
      break;
    case 2:
      account.deposit();
      break;
    case 3:
      account.withdrawal();
      break;
    case 4:
      account.getAccountName();
      break;
    case 5:
      account.exitAccount();
      break;
    default:
      account.accountError();
      break;
  }


  if (choice < 5) {
    atm();
  }
}

atm();
