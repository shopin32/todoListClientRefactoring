The TODO APP

To run application you need to install bower.
Then run "bower install",  and "bower install underscore" comands.


NGINX configs 

server {
	  listen 80;
	  server_name todolist.net;

	  root /home/pshopin/programming/upwork/client/app;

	  index index.html;

	        
	  location / {
	    try_files $uri $uri/ /index.html;
	  }
	  location /tasks{
		     proxy_pass http://localhost:8080/tasks;
		}
		location /tasks/remove{
		    proxy_pass      http://localhost:8080/tasks/remove;
		    proxy_pass_request_body on;
		}
		location /tasks/add{
		     proxy_pass http://localhost:8080/tasks/add;
		     proxy_pass_request_body on;
		}
	}
