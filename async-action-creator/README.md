# Async Action Creator

Extract an async action creator that centralizes the timeout logic.


## Pros

- Logic is centralized, no more duplication.
- Component doesn't need to know business logic.


## Cons

- We have to pass `dispatch` around which makes it trickier to separate container and presentational components.
- You can’t just bind action creators with `connect()` anymore because `showNotificationWithTimeout()` is not really an action creator. It does not return a Redux action.
- it can be awkward to remember which functions are synchronous action creators like showNotification() and which are asynchronous helpers like showNotificationWithTimeout(). You have to use them differently and be careful not to mistake them with each other.


## Notes

> For simple apps, the approach should suffice. Don’t worry about middleware if you’re happy with it.
>
> In larger apps, however, you might find certain inconveniences around it.

Ref: http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
