# Redux with React Hooks

Show the notification using Redux and React Hooks.

## Pros

- Simple and straightforward.
- No middleware required.

## Cons

- React component contains business logic, bad for reusing. It's not obvious in this demo, but imagine we need to fetch data from server asynchronously.
- It forces you to duplicate this logic anywhere you want to show a notification.
- Fails if component is unmounted.
- Less code and faster than class-based component
- No `connect` required

## Notes

> Don’t use anything (including thunks) if you don’t have the genuine need for them. Remember that, depending on the requirements, your solution might look as simple as this project.
>
> Don’t sweat it unless you know why you’re doing this.

Ref: http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
