This is the build repository for sparrow-platform.com.
<br>
For detailed information on Sparrow Plaform, visit www.sparrow-platform.com
<br>
Check Sparrow Platform Github page (Contains all repos for Sparrow Platform) - https://github.com/sparrow-platform


# Sparrow Platform Summary
Medical and psychological well-being during and after disasters is a two-part problem –<br>
1.	Making expertise and information/updates universally accessible to those in need<br>
2.	Enabling experts, responders and information from around the world reach directly to those in need<br>

## The Problem
- Making medical help accessible to disaster victims is a ‘High demand, low supply’ problem - there aren’t many experts (doctors) on ground who can deliver correct medical advice. Telemedicine is a solution but often a bottleneck in disaster management – A few experts can’t address issues that hundreds of disaster victims are facing. On the other hand, there are many doctors around the world who want to help the disaster victims, but have no possbile way to reach them.
- Psychological well-being requires on-demand access to expertise and timely follow ups – Telemedicine or traditional medical infrastructure is not equipped to deliver it during/after disasters.
- Disaster victims need access to all information which is siloed in various applications or communication platforms. Creating another communications platform or another information database will simply add to the list of such siloed applications. 
- All systems for disaster recovery need to work in ‘Offline’ conditions 

## Sparrow Platform is the solution  
Sparrow is an open source AI enabled communication platform that serves as one-stop enabler of medical and psychological well-being during and after disasters.

For users, Sparrow is an extremely easy to use conversational AI accessible from any existing Chat app - Ask questions and Sparrow ensures you get what you need.
Sparrow achieves this by being the single point of connection for all other applications, communication platforms, doctors/experts, etc.
<br><br>
- Sparrow is ‘Uber for medical/psychological help’ – Medical experts and first responders from around the world can onboard Sparrow. When disaster victims reach out to Sparrow for help, Sparrow connects them to one of the available experts based on user needs. 
- Sparrow is ubiquitous - Access Sparrow from ANY existing communication/chat application. Ask for help, and you will be connected with an expert doctor. You or the doctor can be anywhere in the world or on any communication platform.
- Sparrow is accessible offline – We made Sparrow compatible with Project Owl's cluster duck, and also created many additional offline connectivity enablers (Like a smartphone based P2P mesh network).
- Sparrow is intelligent – When experts are unavailable, Sparrow AI (trained on decades worth rich medical data) can deliver medical diagnostics, basic medical information and also can deliver ‘Cognitive behavioral therapy’ for ensuring psychological well-being. 
- Sparrow is like Alexa on steroids - Developers can create ‘Sparrow Applets’ to integrate any existing application with Sparrow. 
As Sparrow is not tied to any hardware or app, all the sparrow applets are accessible on any device, from existing apps.
- Disaster recovery organization and logistics is made super easy thanks to Sparrow. Sparrow is essentially a communication platform that connects and combines all other communication platforms. Use existing apps like Whatsapp to start recovery efforts and reach out to every-one in this world, even if others don’t use Whatsapp. This removes the confusion and boundaries that hinder quick disaster response/recovery. This makes the scope and potential of Sparrow platform endless – track people, send updates, reach out to family etc without worrying about availability of ‘correct’ hardware, connectivity, software, etc. 


# Sparrow Platform components

## Sparrow Net


The sparrow Net involves the ‘middleware’ which connects users to 
```
1. Expert community
2. Sparrow AI
3. Sparrow App Ecosystem (Applets) 
```
Sparrow Net is a combination of Software and hardware stacks that ensures Sparrow is always accessible and is able to deliver all information/expert advice that disaster victims need.
Sparrow Net is powered by ‘Sparrow Middleware’ - The cloud engine for Sparrow. Sparrow Middleware handles routing messages coming from various sources to correct destination. Sparrow Net spans social media websites, chat applications, mesh networks, traditional networks. We have designed Sparrow platform to be accessible from applications/systems that users already have. 
<br>
Sparrow Net is like 'Uber for medical expertise'. Medical experts, first responders, etc can onboard Sparrow platform from anywhere in the world. Disaster victims are directly connected to these experts by Sparrow. Just like Uber connects riders with drivers. 


## Expert Community via SparowNet

As shown in the image, Sparrow is the link between disaster victims and medical experts around the world. 
The key idea is to allow users access Sparrow Platform features through anywhere and any application. 
Similarly, we also want medical experts (Doctors,  psychiatrists, etc) reach out directly to those in need. 
Sparrow aims to bridge the gap that exists between them due to different geographies, different apps in use, different languages, etc. 


## Sparrow AI

Sparrow Platform ensures that disaster victims always have access to help. 
Sparrow AI is a AI trained over 30 years of medical data. 
It can diagnose diseases, recommend medicines, give information about disease-symptom-medicines, and also is a trained psychiatrist that can deliver Cognitive behavioural therapy. 
SparrowAI also aids during conversations between experts and victims by helping structure conversations, summarize data and check facts.


## Sparrow Apps ecosystem

Just as sparrow Net enables users to reach out to any experts around the world, the idea is to enable users to access information from any apps through ‘Sparrow Applets’. We have built Sparrow Middleware in a way that developers can create new Sparrow Applets and make information available to users. 
During disasters, information is scattered in 100s of dashboards, chat application ‘groups’. There is no way to access all of this information. The applet ecosystem bridges this gap. Developers can create applets to make sure data from all platforms ia available everywhere. 
<br>
“No disaster victim should suffer becuase he/she is not on a Whatsapp group”

# Architecture and implementation
Sparrow Platform spans multiple hardware and software stacks. 
<p align="center">
<img max-height=500  src="https://raw.githubusercontent.com/sparrow-platform/sparrow/master/images/sparrow/SparrowOverallArchitecrture.png"/>
</p>



## Capture messages from users:
Chat Apps:<br>
Users can use any chat app to send queries to Sparrow. Sparrow Middleware is the cloud engine to unify all such apps. (Check more info at - https://github.com/sparrow-platform/community-connect-middleware)
<br><br>
Sparrow Mesh:<br>
Peer to Peer mesh based on smarthpones, to ensure Sparrow is reachable even when internet is down(Check more at - https://github.com/sparrow-platform/sparrow-mesh)
<br><br>
LoRa mesh: <br>
Project Owl inspired implementaiton of LoRa protocol mesh. LoRa mesh delivers a chat interface from Wifi endpoints created by ‘Ducks’. This mesh ensures connectivity when traditinal internet is down. (Check more at - https://github.com/sparrow-platform/duck-sparrow-link)
<br><br>
Sparrow App:<br>
Sparrow App is a part of Sparrow Mesh, but it also is a direct connection to Sparrow MQTT server when internet is available. (Check more at - https://github.com/sparrow-platform/sparrow-android)



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
We use Twilio chatbot engine for capturing messages from chat applications and forwarding it to Sparrow Middleware. (Check more info at - https://github.com/sparrow-platform/community-connect-middleware)


## Middleware:
Sparrow Middleware handles routing messages received from users to correct apps / medical experts. Its the 'Many to Many' routing engine for various chat apps, sparrow applets, social media platforms, networks, etc. (More details on middleware repo - https://github.com/sparrow-platform/community-connect-middleware)



## Sparrow AI:
Disease Diagnostic engine:<br>
Disease diagnostics engine is API that Sparrow core conversation service talks to in order to provide rich medical data and information. 
More details on disease diagnostic engine repo - 
https://github.com/sparrow-platform/disease-diagnostics-engine
<br><br>
SPARROW CBT:<br>
We implemented Cognitive Behavioural therapy in Sparrow AI through Watson Assistant. (Check the watson assistant repository for more details - https://github.com/sparrow-platform/watson-cloud-functions)



## IBM Cloud at heart
Sparrow Platform uses IBM cloud. It uses IBM cloud/Watson for it's core functionalities. 
<br>
IBM features used by Sparrow platform - 
```
IBM Cloud foundry
IBM Cloud functions
IBM Watson Assistant
IBM Cloudant DB
IBM Watson NLP (Tone Analyzer)
```

We plan to migrate most of our other services to IBM Cloud 
```
MQTT server to IBM IoT MQTT
Sparrow AI API (Currently on GCP Kubernetes) to IBM Kubernetes service
Sparrow Android App medical records cloud backup (Currently on Google Firebase) to IBM Kubernetes/VPC Infrastructure
```
