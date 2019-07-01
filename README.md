# Sparrow Platform

This is the build repository for sparrow-platform.com.
<br>
For detailed information on Sparrow Plaform, visit www.sparrow-platform.com

# Introduction
Sparrow Platform is a truly ubiquitous network to connect disaster victims with medical experts, information and communities; agnostic of device, location, connectivity, application/systems in use. 
During disasters, affected population needs accurate information, access to expertise and digital tools to ensure safety and quick recovery. Sparrow Platform is not another ‘dashboard’ - It rather focuses on unifying existing dashboards, applications, data, information and expertise and make it readily available to those in need.

The ubiquitous nature of Sparrow Platform is owing to Sparrow net.

# Sparrow Net
<p align="center">
<img height=500  src="https://raw.githubusercontent.com/sparrow-platform/sparrow/master/images/sparrow/MiddlewareSummary.png"/>
</p>

The sparrow Net involves the ‘middleware’ which connects users to 
```
1. Expert community
2. Sparrow AI
3. Sparrow App Ecosystem (Applets) 
```
We often equate the Expert connect feature to Sparrow Net. But sparrow Net is the overall network from user to end applications/experts. 
Sparrow Net is powered by ‘Sparrow Middleware’ - The cloud engine for Sparrow. Sparrow Middleware handles routing messages coming from various sources to correct destination.
<br>
It is responsible for the intelligent routing of user queries to correct apps/experts. 


# Expert Community via SparowNet
<p align="center">
<img height=500  src="https://sparrow-platform.com/images/sparrow/sparrowInterPlatformRouting.png"/>
</p>
As shown in the image, Sparrow is the link between disaster victims and medical experts around the world. 
The key idea is to allow users access Sparrow Platform features through anywhere and any application. 
Similarly, we also want medical experts (Doctors,  psychiatrists, etc) reach out directly to those in need. 
Sparrow aims to bridge the gap that exists between them due to different geographies, different apps in use, different languages, etc. 


# Sparrow AI
<p align="center">
<img height=500  src="https://sparrow-platform.com/images/sparrow/MedicalInfoEngine.png"/>
</p>
Sparrow Platform ensures that disaster victims always have access to help. 
Sparrow AI is a AI trained over 30 years of medical data. 
It can diagnose diseases, recommend medicines, give information about disease-symptom-medicines, and also is a trained psychiatrist that can deliver Cognitive behavioural therapy. 
SparrowAI also aids during conversations between experts and victims by helping structure conversations, summarize data and check facts.


# Sparrow Apps ecosystem
<p align="center">
<img height=500  src="https://sparrow-platform.com/images/sparrow/SparrowAppletMain.png"/>
</p>
Just as sparrow Net enables users to reach out to any experts around the world, the idea is to enable users to access information from any apps through ‘Sparrow Applets’. We have built Sparrow Middleware in a way that developers can create new Sparrow Applets and make information available to users. 
During disasters, information is scattered in 100s of dashboards, chat application ‘groups’. There is no way to access all of this information. The applet ecosystem bridges this gap. Developers can create applets to make sure data from all platforms ia available everywhere. 
<br>
“No disaster victim should suffer becuase he/she is not on a Whatsapp group”

# Architecture
Sparrow Platform spans multiple hardware and software stacks. 
<p align="center">
<img height=500  src="https://raw.githubusercontent.com/sparrow-platform/sparrow/master/images/sparrow/SparrowOverallArchitecrture.png"/>
</p>



## Capture messages from users:
Chat Apps:<br>
Users can use any chat app to send queries to Sparrow
<br><br>
Sparrow Mesh:<br>
Peer to Peer mesh based on smarthpones (Check more at - https://github.com/sparrow-platform/sparrow-mesh)
<br><br>
LoRa mesh: <br>
Project Owl inspired implementaiton of LoRa protocol mesh. LoRa mesh delivers a chat interface from Wifi endpoints created by ‘Ducks’. (Check more at - https://github.com/sparrow-platform/duck-sparrow-link)
<br><br>
Sparrow App:<br>
Sparrow App is a part of Sparrow Mesh, but it also is a direct connection to Sparrow MQTT server. (Check more at - https://github.com/sparrow-platform/sparrow-android)



## Routing message to middleware:
MQTT Server:<br>
Messages from custom internet connected interfaces can reach Sparrow via our MQTT broker. 
```
Publish topic - sparrow_receive/$userID
Subscribe topic - sparrow_response/$userID
```
SparrowMesh and ClusterDuck messages reach sparrow through MQTT protocol.
<br><br>
Twilio/Unification engine:<br>
We use Twilio chatbot engine for capturing messages from chat applications and forwarding it to Sparrow Middleware. More details on Sparrow middleware repo. 


## Middleware:
Sparrow Middleware handles routing messages received from users to correct apps / medical experts. 
More details on middleware repo - https://github.com/sparrow-platform/community-connect-middleware




## Sparrow AI:
Disease Diagnostic engine:<br>
Disease diagnostics engine is API that Sparrow core conversation service talks to in order to provide rich medical data and information. 
More details on disease diagnostic engine repo - 
https://github.com/sparrow-platform/disease-diagnostics-engine
<br><br>
SPARROW CBT:<br>
We implemented Cognitive Behavioural therapy in Sparrow AI through Watson Assistant.


