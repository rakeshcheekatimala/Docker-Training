# Use an existing image as base 
FROM alpine

# Download and install dependencies needed
RUN apk add --update redis 
RUN apk add --update gcc
# Tell the image what to do when it it starts as container
CMD ["redis-server"]