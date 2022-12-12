# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

# Your answer:
The foreign key is the mapping on the Student model which indicates to which Cohort the student belongs to.

# Researched answer:
Because the foreign key is in the references column of the Student database, a migration to remove the reference and replace it with a correct column or to fix the foreign_key attribute may do the trick.

2. Which RESTful routes must always be passed params? Why?

# Your answer:
I do not know.

# Researched answer:
RESTful routes which are expecting params, must be passed params or rails will throw the appropriate error.

3. Name three rails generator commands. What is created by each?

# Your answer:
Rails can generate a model, which creates various folders and files in the rails application, including a migration folder.
Rails can generate a Controller, which does the same.

# Researched answer:
Rails can also generate a scaffold, which populates the controller around a database with the default RESTFul methods. 
Rails can also generate a testing environment (?) using RSpec, this must be done before models are generated.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

# The action category looks like SQL keywords, covering the CRUD paradigm, displayed in the Rails console when dealing with a generated and migrated model.

# The location category looks like the URL one would type in a Rails app to navigate to wherever the "Students" controller deems appropriate, maybe a default "index" method with a "render html" command, or instance variables which are passed on to an ERB file for display.

# I do not know the name of the controller method called by each route or what action it would perform. 

action: "GET" location: /students

action: "POST" location: /students

action: "GET" location: /students/new

action: "GET" location: /students/2

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I see:
1. A list of my to-do's
2. An option to add a to-do.
3. An option to delete a to-do.
4. An option to get more information about a particular to-do.
5. An option to update a to-do.
6. An option to enter full screen with my to-do list.
7. An option to exit my to-do list.
8. An option to view a visual representation of how the application is written.
9. The author's name and contact information.
10. Important entries in red.