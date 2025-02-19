## Sprint 15

**Introduction of the WTWR APP** Production environment

**Introduction of the WTWR APP** Production environment

By far, in Sprint 15, the entire code was completely done and turned into production from a 15-month development. In this stage, most of the work focuses on the backend for deployment. In the front, we also through the 'scp …' deploy the file 'build" to the VM, where we can manage the production on the remote server locally.

//*In this Sprint, the whole app almost reaches its tail. Since we have well done with the se_project_express in Sprint 13, and se_project_react in Sprint 11, which are the backend and frontend accordingly. Currently, I need to set up the sign-up modal and log-in modal for the app to make it work on the internet safely for massive users. In this case, the knowledge of the identification, authentication, and authorization will be used throughout the signup and login modal. Based on the code of Sprint 11, I will need to add in more handle functions for the two modals and set up the navigation for the two buttons right on the header part. In particular, the previous two buttons: the "+Add Items & userName" buttons will be replaced by the two new buttons:" Sign up & Login" respectively. Other than this, I will add two new features in the Sidebar part, which will be the:" Change profile data, and Logout button" respectively.* //

//*Since the backend Api and frontend Api were connected through MongoDB in this project, the previous local data. Jason will be deleted from the work, and new data will be fetched from the new users who sign up for the app later on. The new Data will be stored in the MongoDB of each developer. Additionally, the clothing card now will be able to let the signed-up user put "Like & dislike" and delete those dislike cards for each of them. Indeed, these features correspond to the identification, authentication, and authorization processes in reality.* //

//*The entire work had added many new handlers functions and currentUserContext.provider, userNavigate, etc to improve the security and Logic, in which will deeply affect the user experience later on.*//

## Link for se_project_react:

[github](https://github.com/IMLUOAI/se_project_react.git)

## Link for the frontend:

https://api.wtwr.ugo.si;
