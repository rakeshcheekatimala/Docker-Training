# Docker-Training
Basics of Docker and How to create Docker files, docker commands usage

ex-01: Launch DockerQuickStart Terminal and check installation is successful.
 * To check docker version use command <b>docker -v</b>
    o/p: My docker version is :  Docker version 17.09.0-ce, build afdb6d4
 * To run a simple image use command
    docker run hello-world
    This will first search in local registry and if the image is not found it goes to docker registry (like appstore)
    where it pulls hello-world image and run's this as container.
  * To see the last container that was run as image we use the command <docker ps -l> (last exited container)
