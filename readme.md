## Hi! Welcome to Quickboard. 👋
<div align="left">
  <p>
    <a href="https://www.npmjs.com/package/quickboard"><img src="https://img.shields.io/npm/v/quickboard.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/quickboard"><img src="https://img.shields.io/npm/dt/quickboard.svg?maxAge=3600" alt="npm downloads" /></a>
  </p>
This package is a simple and easy to create leaderboard. If you're using Discord.js, you can use this package to create a leaderboard like Top 10 of the server.

# Installation

**Node.js 16.6.0 or newer is required.**

```sh-session
npm install quickboard@latest
```

# Simple Instance
```js
const QuickBoard = require('quickboard');
const board = new QuickBoard({
  max: 10,
  data: client.guilds.cache.get('123456789012345678').members.cache.map(member => ({ value: database.fetch(`message-count.${member.user.id}`), member })), // client = discord.js client, database = quick.db
  map: (item, index) => `${index + 1}. ${item.member.displayName} - ${item.value} messages`,
  sort: (according, current) => current.value - according.value,
}).create();

console.log(board);
```
# Example Output
```string
1. Discord#0000 23245 messages
2. Discord#0000 7754 messages
3. Discord#0000 3576 messages
4. Discord#0000 2256 messages
5. Discord#0000 1123 messages
6. Discord#0000 975 messages
7. Discord#0000 566 messages
8. Discord#0000 500 messages
9. Discord#0000 234 messages
10. Discord#0000 100 messages
```

# News
- Published.
- Added types (v1.4.0)
- Added some nice touaches (v1.4.5)

# Contact
[![Discord Badge](https://img.shields.io/badge/can-white?style=social&logo=Discord)](https://discord.com/users/613700645173592086)<br>[![Discord Badge](https://img.shields.io/badge/thiskyhan-white?style=social&logo=Instagram)](https://instagram.com/thiskyhan)
