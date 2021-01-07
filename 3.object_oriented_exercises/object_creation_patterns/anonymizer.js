let Account = {
  reanonymize(password) {
    if (password === this.password) {
      let randomName = '';
      let validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      function randomChar() {
        return validChars[Math.floor(Math.random() * Math.floor(validChars.length))];
      }
      for (let i = 1; i <= 16; i += 1) {
        randomName += randomChar();
      }
      this.displayName = randomName;
      return 'true';
    } else {
      return 'Invalid Password';
    }
  },

  resetPassword(currentPassword, newPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
      return 'true';
    } else {
      return 'Invalid Password';
    }
  },

  email(currentPassword) {
    if (currentPassword === this.password) {
      return this.userEmail;
    } else {
      return 'Invalid Password';
    }
  },

  firstName(currentPassword) {
    if (currentPassword === this.password) {
      return this.userFirstName;
    } else {
      return 'Invalid Password';
    }
  },

  lastName(currentPassword) {
    if (currentPassword === this.password) {
      return this.userLastName;
    } else {
      return 'Invalid Password';
    }
  },

  displayName() {
    return this.displayName;
  },

  counter: 0,

  init(email, password, firstName, lastName) {
    this.id = this.counter;
    this.userEmail = email;
    this.password = password;
    this.userFirstName = firstName;
    this.userLastName = lastName;
    this.displayName = anonymize();
    function anonymize() {
      let randomName = '';
      let validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      function randomChar() {
        return validChars[Math.floor(Math.random() * Math.floor(validChars.length))];
      }
      for (let i = 1; i <= 16; i += 1) {
        randomName += randomChar();
      }
      return randomName;
    }
    Account.counter += 1;
    return this;
  },
}

console.log(Account.counter);
// const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// const displayName = fooBar.displayName;
// console.log(fooBar.reanonymize('abc'));                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// const bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(fooBar.firstName('abc'));              // logs 'baz' but should log foo.
// console.log(fooBar.email('abc'));                  // 'baz@qux.com' but should log'foo@bar.com'
// console.log(fooBar.id);
// console.log(bazQux.id);