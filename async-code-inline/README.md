# Write Async Code Inline

This is by far the simplest way. Use what the language offers and go for the simplest solution.


## Pros

- Simple and straightforward
- No middleware required


## Cons

- React component contains business logic, bad for reusing. It's not obvious in this demo, but imagine we need to fetch data from server asynchronously.
- It forces you to duplicate this logic anywhere you want to show a notification.


## Notes

> Don’t use anything (including thunks) if you don’t have the genuine need for them. Remember that, depending on the requirements, your solution might look as simple as this project.
> Don’t sweat it unless you know why you’re doing this.
