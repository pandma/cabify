# ENDPOINTS

|  Method  | URL | Description  | 
|  ----------  | ---------- | ------------  | 
|  POST  | /eaters/create  |  Create eaters form  | 
|  GET  | /eaters/getAll  |  Shows all the users  | 
|  POST  | /eaters/edit/eater_Id  |  Edit user form  | 
|  POST  | /eaters/eater_Id/  |  Eliminate one eaters  | 
|  POST  | /eaters/delete |  Delete all users and restaurants  | 
|  POST  | /restaurant/create |  Create restaurants form  | 
|  GET  | /restaurant/getAll |  Showa all the restaurants  | 
|  POST  | /groups/create_groups |  Create the groups form  | 
|  GET  | /groups/groups |  Shows all the groups  | 
|  GET  | /groups/leaders/:leader_Id |  Shows all the eaters that have been leaders  |
|  POST  | /order/create_order |  create an order form |
|  GET  | /order/getAll | Shows all the orders |

# DESCRIPTION 
While doing this exercise I had the harder time doing the create_groups endpoint, I am not sure if the groups con only be created ones or each time there is request it creates new groups, so i diceded to do it that way, evry time there is a requst it a creates even groups with random peaple from the eaters in data base, I used a while loop that looks for the maxximum amount of people that can be in each groups by looking for the minimun rest that its left from dividing the total amout of people by 7 and if the rest isn,t 0 it rest 1 to the amout of people in each group so now its te total divided by 6, it is doing this until it finds the maximun amout of people in each group. My logic works but it doesn,t fully work if the amout of eaters is a prime numbers, in the line 48 from group.routes there is the logic I thougth about for prime number but it wasn,t working correctly so I decide to don,t implement it.
I have decided to add new funcionalities to help, the eaters can edit ther profieles in case they forget their email acount and also eliminate eaters only.










