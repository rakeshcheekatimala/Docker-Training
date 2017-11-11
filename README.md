
# Docker-Training
Basics of Docker and How to create Docker files, docker commands usage.

ex-02: Launch DockerQuickStart Terminal and run tomcat image of latest version.

<h3> Demo to describe how to run tomcat and expose its port to outside docker so that you can access tomcat. </h3>

```bash
docker run tomcat:latest
```
You will see the following messages on Terminal:
Unable to find image 'tomcat:latest' locally
latest: Pulling from library/tomcat

Now your container is running, so try to access it. The network should be bridged, so you should be able to access your docker service through your host address (locally 127.0.0.1). By default Tomcat is listening on port 8080, so try to access http://localhost:8080 and you should see the Tomcal home page. True ?


Unfortunately it should not work. Before we fix it let's see what happened. When you run on detached mode you don't see logs on startup, so if you want to see logs to debug do this : (Launch Another Docker Terminal and run below command)

```bash
$ docker ps
CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                     NAMES
1c8da5560dfd        tomcat:latest        "catalina.sh run"        8 minutes ago       Up 8 minutes        8080/tcp                  sad_payne
```

```bash
docker logs  1c8da5560dfd

the o/p:

11-Nov-2017 01:24:44.895 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server version:        Apache Tomcat/8.5.23
11-Nov-2017 01:24:44.897 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server built:          Sep 28 2017 10:30:11 UTC
11-Nov-2017 01:24:44.897 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server number:         8.5.23.0
11-Nov-2017 01:24:44.897 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log OS Name:               Linux
11-Nov-2017 01:24:44.897 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log OS Version:            4.4.93-boot2docker
11-Nov-2017 01:24:44.898 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Architecture:          amd64
11-Nov-2017 01:24:44.898 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Java Home:             /usr/lib/jvm/java-8-openjdk-amd64/jre
11-Nov-2017 01:24:44.900 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log JVM Version:           1.8.0_141-8u141-b15-1~deb9u1-b15
11-Nov-2017 01:24:44.900 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log JVM Vendor:            Oracle Corporation
11-Nov-2017 01:24:44.901 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log CATALINA_BASE:         /usr/local/tomcat
11-Nov-2017 01:24:44.901 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log CATALINA_HOME:         /usr/local/tomcat
11-Nov-2017 01:24:44.901 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djava.util.logging.config.file=/usr/local/tomcat/conf/logging.properties
11-Nov-2017 01:24:44.901 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager
11-Nov-2017 01:24:44.902 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djdk.tls.ephemeralDHKeySize=2048
11-Nov-2017 01:24:44.902 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djava.protocol.handler.pkgs=org.apache.catalina.webresources
11-Nov-2017 01:24:44.903 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Dcatalina.base=/usr/local/tomcat
11-Nov-2017 01:24:44.903 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Dcatalina.home=/usr/local/tomcat
11-Nov-2017 01:24:44.903 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djava.io.tmpdir=/usr/local/tomcat/temp
11-Nov-2017 01:24:44.904 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent Loaded APR based Apache Tomcat Native library [1.2.14] using APR version [1.5.2].
11-Nov-2017 01:24:44.904 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent APR capabilities: IPv6 [true], sendfile [true], accept filters [false], random [true].
11-Nov-2017 01:24:44.906 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent APR/OpenSSL configuration: useAprConnector [false], useOpenSSL [true]
11-Nov-2017 01:24:44.909 INFO [main] org.apache.catalina.core.AprLifecycleListener.initializeSSL OpenSSL successfully initialized [OpenSSL 1.1.0f  25 May 2017]
11-Nov-2017 01:24:45.048 INFO [main] org.apache.coyote.AbstractProtocol.init Initializing ProtocolHandler ["http-nio-8080"]
11-Nov-2017 01:24:45.073 INFO [main] org.apache.tomcat.util.net.NioSelectorPool.getSharedSelector Using a shared selector for servlet write/read
11-Nov-2017 01:24:45.076 INFO [main] org.apache.coyote.AbstractProtocol.init Initializing ProtocolHandler ["ajp-nio-8009"]
11-Nov-2017 01:24:45.077 INFO [main] org.apache.tomcat.util.net.NioSelectorPool.getSharedSelector Using a shared selector for servlet write/read
11-Nov-2017 01:24:45.079 INFO [main] org.apache.catalina.startup.Catalina.load Initialization processed in 793 ms
11-Nov-2017 01:24:45.104 INFO [main] org.apache.catalina.core.StandardService.startInternal Starting service [Catalina]
11-Nov-2017 01:24:45.112 INFO [main] org.apache.catalina.core.StandardEngine.startInternal Starting Servlet Engine: Apache Tomcat/8.5.23
11-Nov-2017 01:24:45.131 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/examples]
11-Nov-2017 01:24:45.983 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/examples] has finished in [852] ms
11-Nov-2017 01:24:45.985 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/host-manager]
11-Nov-2017 01:24:46.029 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/host-manager] has finished in [44] ms
11-Nov-2017 01:24:46.029 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/manager]
11-Nov-2017 01:24:46.082 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/manager] has finished in [52] ms
11-Nov-2017 01:24:46.082 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/docs]
11-Nov-2017 01:24:46.098 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/docs] has finished in [16] ms
11-Nov-2017 01:24:46.105 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/usr/local/tomcat/webapps/ROOT]
11-Nov-2017 01:24:46.136 INFO [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/usr/local/tomcat/webapps/ROOT] has finished in [32] ms
11-Nov-2017 01:24:46.138 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
11-Nov-2017 01:24:46.168 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["ajp-nio-8009"]
11-Nov-2017 01:24:46.169 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in 1090 ms

```

# Manage ports

Actually the Tomcat server was running but it was not accessible, because the Docker host did not expose the port. So you have to explicitely map a host port to a container port to make it accessible outside of the host.

```bash
$ docker stop 09bf04dcd28b
$ docker run -d -p80:8080 tomcat:latest
```
That means that you expose to the port 80 (host port) the server listening to the port 8080 (container port).
Now you can retry to access http://localhost:8080 and you should see the Tomcal home page. True ?
