FROM nginx:alpine

# remove default config file
RUN rm -rf /etc/nginx/conf.d/*

COPY ./public /usr/share/nginx/html


RUN sed -i 's/worker_connections.*/worker_connections 1024;/' /etc/nginx/nginx.conf

#response buffer limit 
RUN sed -i 's/output_buffers.*/output_buffers 1 32k;/' /etc/nginx/nginx.conf
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]