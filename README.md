# aug-practise-task

Meant to guide the various members through mock project task flows corresponding to their roles.

## Team Structure

Every development team will consist of 9 members, occupying the roles of team lead (_1 member_), developers (_4 members_), and junior-developers (_4 members_). There may be multiple teams collaborating on a single project, in which case the team leads must coordinate with one another to assign tasks to devs to complete the assigned project.

- The **team lead** will be responsible for oversight of the team activities, git repo maintenance, and reporting to mangement.
- The **developers** are the main workforce, also responsible to guide one assigned junior developer.
- The **junior developers** help the developers with assigned tasks and learn under their guidance.

## Branch Management

Every repository must have the following three primary branches:

- ``` main ``` - the production branch of the repository. Only push code to this branch after testing, review, and demo to mentors/managers.
- ``` test ``` - the test branch of the repository. Codes must be pushed to this branch to be tested and reviewed before pushing to ``` main ```. Code must remain in this branch until it has been signed of by the mentors/managers.
- ``` dev ``` - the development branch of the repository. All development activity must take place through this branch. Pull request for issues must be made to this branch. Once the pull requests are merged to the branch, the branch must be tested and reviewed for new functionalities before pushing the code to the ``` test ``` branch through a pull request.
- *issue branches* - These are branches, created by the devs in order to work on assigned issues. Every issue being worked on must be on a seperate branch, appropriately named as, ``` firstname_issue ```. Once the issue has be resolved, a pull request must be created for that issue, which then would be reviewed by the team lead before merging the pull request for this issue in the .

The order in which code updates travel through the branches is as follows:

<center>

*issue branches* --> ``` dev ``` --> ``` test ``` --> ``` main ```

</center>

## File managment

For ease of use and review, please maintain the recommended file structure shown below for your repositories (Note: Not all repositories may require all the folders shown below and others may require additional folders. The below is just the most commonly used folders present in most projects.)

```
├── docs
│   ├── images
│   ├── help documents...
├── frontend 
│   ├── src
│   │   ├── assests
│   │   ├── components
│   │   │   ├── component_name
│   │   │   │   ├── **/*.css
│   │   │   │   ├── **/*.js
│   │   ├── pages
│   │   │   ├── page_name
│   │   │   │   ├── **/*.css
│   │   │   │   ├── **/*.js
├── backend
├── README.md
└── .gitignore
```
## Development Task

The current development task is to create a single page React Application that shows the data analytics for a preloaded dataset. The backend is implemented using python and flask with, the data being stored in a Mongo database and the read through the use of *PyMongo*.

Please refer to the Figma file in the docs folder for a reference of what the developed application UI must look like.
