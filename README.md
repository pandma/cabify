# ENDPOINTS

|  Method  | URL | Description  | 
|  ----------  | ---------- | ------------  | 
|  POST  | /eaters  |  Create eaters form  | 
|  GET  | /eaters  |  Shows all the users  | 
|  POST  | /edit/eater_Id  |  Edit user form  | 
|  POST  | /eater_Id  |  Eliminate one eaters  | 
|  POST  | /delete |  Delete all users and restaurants  | 
|  POST  | /restaurant/create |  Create restaurants form  | 
|  GET  | /restaurant/getAll |  Showa all the restaurants  | 
|  POST  | /groups/create_groups |  Create the groups form  | 
|  GET  | /groups/getAll |  Shows all the groups  | 
|  GET  | /groups/leaders/:leader_Id |  Shows all the eaters that have been leaders  |
|  POST  | /order/create_order |  create an order form |
|  GET  | /order/getAll | Shows all the orders |
|  GET  | /order/order_id/edit | edit the orders |
|  GET  | /order/order_id/delete | delete the orders |


DESCRIPTION 

While doing this exercise I had the harder time doing the create_groups endpoint, I am not sure if the groups can only be created ones or each time there is request it creates new groups, so I decided to do it that way, every time there is a request it a creates even groups with random people from the eaters in database, I used a while loop that looks for the maximum amount of people that can be in each groups by looking for the minimum rest that's left from dividing the total amount of people by 7 and if the rest isn,t 0 it rest 1 to the amount of people in each group so now it's the total divided by 6, it is doing this until it finds the maximum amount of people in each group. I also had many troubles with prime numbers since they can only be divided by themselves and one, so every time there was a prime number in the amount of eaters it would create a lot of groups of one person, but after many tries I think I got it right.
I decided to add new functionalities to help resolve the issue, the eaters can edit their profiles in case they forget their email account and also eliminate eaters only. And because there are always people complaining because there are leaders every time you can check the leaders in the "/groups/leaders/:leader_Id" endpoint.
To make the job even easier I have created an order model and an order CRUD so the leader can make the reservacion faster by checking it.
Right now I am really busy with the final project at IronHack and I would have added more ideas. I have enjoyed this Challenge very much,
I hope you take me into consideration, thank you.
Best Regards,
Pablo :)











