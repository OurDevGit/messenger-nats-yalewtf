- [ ] Poocho Favicon
- [ ] Signup + Login must be working
- [ ] Use Ansible to set up a server environment
- [ ] Change Postgres DB name, user & password. (underdog)

- [ ] AWS Cognito walkthrough
- [ ] Password or username, needs better handling.

- [ ] Set DB password at random with a prompt
- [ ] Fix the signup page | https://dog.under.wtf/6quBYRoQ


### TO DO
1. Add a URL shortener container with an API
2. Add a mailing list container with an API
3. Create a script, so running the script you will input a few variables:
	1: client name (ex. Coca Cola):
	2: client primary color (#FFFFFF): 
	3: client secondary color (#000000): 
	4. client subdomain (ex: cocacola.justpoochme.com)
4. Entire script should run, then in the terminal it should output:
	https://cocacola.justpoochme.com is active
	admin username: cocacola@justpooch.me
	admin password: 8923ry92h9fh9thg
5. They should log in, and it it should force them to change their password.
6. From here they can change any of the colors, update the logo, create new admin or user accounts.

### CSV
1. There is a screen to upload a CSV.

| First Name | Last Name |        Email         | Phone (12 digits) |    City   | Province | Country |
|------------|-----------|----------------------|-------------------|-----------|----------|---------|
| Jennifer   | Jones     | jennyjones@gmail.com | 91 99208 36441    | New Delhi |          | India   |
|            |           |                      |                   |           |          |         |

2. Every email gets a custom message

FROM: 		hello@justpoocho.me
TO:			user
SUBJECT:	poocho survey

"Hi $User,

This is Coca Cola and you've been invited to take part in a survey. Please click this link to get started:
https://poocho.me/coca-cola/19849ry7fhw9fh


Thanks!

Team Poocho
"

3. That brings them to the react chat that exists. It's also their login + password.
4. The chatbot then engages with them, and all data is stored.
5. At some point, a human may want to intervene.




