
This is the build repository for sparrow-platform.com, and the README summarizes Sparrow Platform
<br>
Find other Sparrow Platform repos, installation/build instructions in individual component repos at - https://github.com/sparrow-platform


<p align="center">
<img max-height=100 height=200  src="https://raw.githubusercontent.com/sparrow-platform/design/master/Video/thumbnailSparrow.png"/>
</p>



### Sparrow platform Website:
Visit the website to get a 'non-technical' detailed description of Sparrow components
<br>Product landing page - https://sparrow-platform.com/
<br>Video - https://sparrow-platform.com/Video.html
<br>Sparrow Net - https://sparrow-platform.com/Net.html
<br>Sparrow AI - https://sparrow-platform.com/AI.html
<br>Sparrow Applets - https://sparrow-platform.com/Apps.html

### Updates
```
August 2019 - Sparrow now has 500 users and 50 doctors!
July 2019 - We won Angelhack virtual hackathon IBM Challenge!
June 2019 - Sparrow Platform alpha test 1 successful with 200 users
```
<br>

# Sparrow Platform Summary
Medical and psychological well-being during and after disasters is a two-part communication and logistics problem –<br>
1. Ensure expertise and information/updates is always accessible to those in need<br>
2. Enable experts, responders, and information from around the world reach directly to those in need<br>



## The Problem:
-  Making medical help available to disaster victims is a 'High demand, low supply' problem. There aren't many experts (doctors) on the ground who can deliver correct medical advice. Telemedicine is a solution but often a bottleneck in disaster management. On the other hand, many doctors around the world want to help disaster victims but have no possible way to reach them.
- Psychological well-being requires on-demand access to expertise and timely follow-ups. Telemedicine or traditional medical infrastructure is not equipped to deliver it during/after disasters.
- Disaster victims need access to all information which is siloed in various applications or communication platforms. Creating another communications platform or another information database will add to the list of such siloed applications.
- All systems for disaster recovery need to work in 'Offline' conditions as the traditional network is often unavailable during disasters.


## Sparrow Platform is the solution:
Sparrow is an open-source AI-enabled platform that serves as a one-stop enabler of medical and psychological well-being during and after disasters.

For users, Sparrow is an extremely easy-to-use conversational AI, accessible from any existing Chat app. Ask questions, and Sparrow ensures you get what you need. Sparrow achieves this by being user’s single point of connection with all applications, communication platforms, doctors/experts, etc. 
<br>

- Sparrow is 'Uber for medical/psychological help' – Medical experts and first responders from around the world can onboard Sparrow. When disaster victims reach out to Sparrow for help, Sparrow connects them to one of the available experts based on user needs.

- Sparrow is ubiquitous - Access Sparrow from any existing communication/chat application. You or the doctor Sparrow connects you with can be anywhere in the world or on any communication platform. We achieve this by using the chatbot interfaces to send/receive messages across platforms.

- Sparrow is accessible offline - Sparrow works even without internet by leveraging IoT, Edge computing and Mesh networks. This is achieved by integration with Project Owl’s cluster-duck mesh network(http://project-owl.com), and a smartphone-based ‘offline mesh network' called Sparrow Mesh. Sparrow Mesh is a unique ubiquitous network that uses Wifi, Bluetooth and sound waves to send or receive data to and from anywhere in the world. Every smartphone is like a network tower for Sparrow Mesh.

- Sparrow is intelligent - When experts are unavailable, Sparrow AI (trained on decades worth rich medical data) can deliver medical diagnostics, necessary medical information. It also can provide 'Cognitive behavioral therapy' for ensuring psychological well-being.

- Sparrow is like Alexa on steroids - Developers can create 'Sparrow Applets' to integrate any existing application with Sparrow. As Sparrow is not tied to any hardware or app, all the sparrow applets are accessible on any device, from existing apps.

- Disaster recovery organization and logistics is made super easy thanks to Sparrow. Sparrow is primarily a communication platform that connects and combines all other communication platforms. Use existing apps like Whatsapp to start recovery efforts and reach out to every-one in this world, even if others don't use Whatsapp. This removes the confusion and boundaries that hinder quick disaster response/recovery.

<br>
Scope and potential use-cases of Sparrow platform are endless – get expert help of any form, track people, send updates, reach out to family, etc. without worrying about the availability of 'correct' hardware, connectivity, software, etc. Sparrow could also be a ‘ubiquitous interface’ for 911, 100, American Redcross or similar services. 


<br><br><br>

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

<br><br><br>
# Architecture and implementation
Sparrow Platform spans multiple hardware and software stacks. 
<p align="center">
<img max-height=500  src="https://raw.githubusercontent.com/sparrow-platform/sparrow/master/images/sparrow/SparrowOverallArchitecrture.png"/>
</p>



## Sparrow interfaces
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



## Routing message to middleware
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


## Middleware
Sparrow Middleware handles routing messages received from users to correct apps / medical experts. Its the 'Many to Many' routing engine for various chat apps, sparrow applets, social media platforms, networks, etc. (More details on middleware repo - https://github.com/sparrow-platform/community-connect-middleware)



## Sparrow AI
Disease Diagnostic engine:<br>
Disease diagnostics engine is API that Sparrow core conversation service talks to in order to provide rich medical data and information. 
More details on disease diagnostic engine repo - 
https://github.com/sparrow-platform/disease-diagnostics-engine
<br><br>
SPARROW CBT:<br>
We implemented Cognitive Behavioural therapy in Sparrow AI through Watson Assistant. (Check the watson assistant repository for more details - https://github.com/sparrow-platform/watson-cloud-functions)<br>
Sparrow is a psychology expert who can detect emotions/moods of people, counsel them through tough times by enforcing positive and rational thinking.

## Offline features for disaster situations
Sparrow is prepared for the times when no form of communication is available. Sparrow Application comes with numerous AI enabled tools that work without internet or mesh network connectivity.
```
Translate tools
Offline diseases diagnostics
Medical facts guide
Medicines guide
Offline EMR vault
```
Check the Application repo at - https://github.com/sparrow-platform/android

## One stop solutions for medical records 
Sparrow serves as a one-stop medical records storage solution. Sparrow can connect to most commonly used EMR systems to fetch and aggregate medical documents, allows users to upload paper based medical records and digitize them. Sparrow saves copy of all user's medical records on a phone based vault, and a secure cloud. In offline conditions, users can share medical records from their offline-vault using Sparrow app via Sparrow Mesh. When connected to internet, they can use any messaging applications to access or share their medical records.

<br><br><br>
# IBM Cloud at heart
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


<br><br><br>
# Opensource software
Sparrow Platform is "Built for community, by the community" (Apache 2.0 license). <br>
We invite Developers and medical experts to improve Sparrow Platform.<br>

## How can developers contribute?
- Bring existing applications to Sparrow by building Sparrow Applets
- Help us improve Sparrow Platform by helping us fix bugs and add features 

## How can medical experts contribute?
- Help us improve Sparrow AI content
- Improve Sparrow CBT 
- Onboard Sparrow to help disaster victims when they need help 


<br><br><br>

# Sparrow Platform Roadmap
<p align="center">
<img max-height=800 height=800  src="https://raw.githubusercontent.com/sparrow-platform/design/master/Timeline/TimeLineImage.png"/>
</p>

<br>
Business Plan (Initial draft) - https://github.com/sparrow-platform/sparrow/blob/master/Sparrow%20Plan.pptx
<br>

