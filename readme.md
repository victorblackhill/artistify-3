# Artistify Workshop III

This group workshop will walk you through the steps to create a fullstack application.

**Work as a team, communicate, avoid git conflicts !**
<br/>

![alt text][intro]

[intro]: https://media.giphy.com/media/JxxkWxHOEDrq0/giphy.gif "rock on !"

---

## Day III - Authentication (end @ 18h00)

Today, we'll implement a full signup/signin/signout system.  
To do so, we'll learn about session mechanism in express and bcrypt hashing algorithm.  
We will also protect the dashboard routes with custom middlewares.  
Finally, we will use other custom middlewares and flash messages to display hints to our end users.

This is a huge step and will become handy during module II project week !
Use the auth appliction provided in class to complete the todo list.  

**Don't worry** if you can't finish all the steps : you will get a soluce proposal.

**Do your best : Happy hacking !**

---

### Todos

- PART I
  - Implement signup (aka register)
  - Implement success / warning flash messages for signup
- PART II
  - Implement signin (aka login)
  - Implement logout (or signout)
  - Implement success / warning flash messages for signin
- PART III
  - Protect all dashboard routes with the protectAdminRoute middleware
- Bonuses

---

### The User model

The User model should be located in /models/User.js

The User model must have the following properties :

- username - String  
- email - String, unique  
- password - String (must be encrypted)  
- role - String, enum: ["admin", "user"], default: "user"  
- avatar - String (default:https://res.cloudinary.com/gdaconcept/image/upload/v1614762472/workshop-artistify/default-profile_tbiwcc.jpg)  

### The auth router

The auth router should be located in /routes/auth.js .  
All those routes are **prefixed** with /auth  

<br/>
Here is a routes description:  

| Route         | HTTP | View                       | Description                                          |
| ------------- | ---- | -------------------------- | ---------------------------------------------------- |
| `/signin`     | GET  | auth/signin.hbs            | Display signin form                                  |
| `/signup `    | GET  | auth/signup.hbs            | Display signup form                                  |
| `/signout`    | GET  | none                       | Destroy the session and redirect to signin           |
| `/signin`     | POST | none                       | Executes the signin process                          |
| `/signup`     | POST | none                       | Executes the signup process                          |

---

### PART I

Use the auth appliction provided during class and the associated course card to implement a signup feature.  

---

### PART II

Use the auth appliction provided in class and the associated course card to implement a signin feature.  
Users should be also able to signout.  

---

### PART III

A non-logged in user should be able to access the dashboard pages !  
Protect all dashboard routes with the protectAdminRoute middleware. 

---

<br/>

Done already ? Congratz !

![alt text][congratz]

[congratz]: https://media.giphy.com/media/svw5mZJdFB41G/giphy.gif "all done"

<br/>

### Wanna do more ? Here are some bonuses !

- On the home page, display the last 3 inserted albums and artists, sorted by date in descending order.
- display all related album, if any, in each artist detail page
- Create a new router file in routes/my-api.js
  - Expose all artists, albums, labels, styles as JSON responses, in separate routes.
- carte blanche: use chart.js or d3.js to create a nice data visualisation in the dashboard index

