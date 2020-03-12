

# Milestone 1

1. Bash script to set up local environment (can be done last)
2. Run updates
3. Install dependencies (docker, node, nats, etc)
4. Start a container with the chat applicatio
5. Point chat to port 80.

6. When you go to `www.messengerone.wtf` it should take you to login page.
7. Admins or Users can login with:

   - Regular email/password (also require reset password link)

   AWS Cognito with services: - Google - Apple (https://aws.amazon.com/blogs/security/how-to-set-up-sign-in-with-apple-for-amazon-cognito/) - Passwordless via Email or SMS. { later }

8. Users can select their own theme by touching the messenger icon at the top. It can flip between 2 basic themes, any colors. We will design themes in a later milestone.

# Chat Features.

1. Responsive application written in React.JS for desktop and mobile.
2. Show the `user is typing` indicator.
3. Messages should be stored on the server, ideally in it's own container with just the database.
