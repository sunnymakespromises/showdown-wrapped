# showdown-wrapped

 a website to view stats about your pokemon showdown usage within the past year.

## flows

### login

1. HomeLayout checks localStorage to see if there is already a user stored in memory.
    a. If so, sets currentUser in HomeLayout to the user in memory.
    b. If not, sets currentUser to null.
2. Login listens for changes in currentUser via useEffect.
    a. If currentUser is null (see 1b) opens a connection to smogon using the connect() function.
