## Sprint 15

**Introduction of the WTWR APP** production environment

**Introduction of the WTWR APP** production environment

By far, in this Sprint 15, the entire code was completely done and turning to a production from a 15-month development. In this stage, most of the work focus on the backend for deployment. In the frontend, we also through the 'scp …' deploy the file 'build" to the VM, where we can manage the production on the remote server locally.

//*In this Sprint, the whole app almost reaches its tail. Since we have well done with the se_project_express in Sprint 13, and se_project_react in Sprint 11, which are the backend and frontend accordingly. Currently, I need to set up the sign-up modal and log in modal for the app to make it work on internet safely for massive users. In this case, the knowledge of the identification, authentication, and authorization will be use throughout the signup and login modal. Based on the code of the Sprint 11, I will need to add in more handle functions for the two modals, and set up the navigation for the two buttons right the header part. In particularly, the previous two buttons: "+Add Items & userName" buttons will be replaced by the two new buttons:" Sign up & Log in" respectively. Other than this, I will add another two new features in the Sidebar part, which will be the:" Change profile data, and Logout button" respectively.* //

//*Since the backend Api and frontend Api were connected through the MongoDB in this project, the previous local data. Json will be deleted from the work, and new data will be fetched from the new users who sign up in the app later on. The new Datas will be store in the MongoDB of each developer. Additionally, the clothing card now will be able to let the signed-up user put "Like & dislike" and delete those dislike cards for each of them. Indeed, these features are corresponding to the identification, authentication and authorization processes in reality.* //

//*The entire work had added many new handlers functions and currentUserContext.provider, userNavigate, etc to improve the security and Logic, in which will deeply affect the user experience later on.*//

## Link for se_project_react:

[github](https://github.com/IMLUOAI/se_project_react.git)

## Link for the frontend:

https://api.wtwr.ugo.si;
