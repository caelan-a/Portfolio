---
title: "BuddyUp"
local_redirect: true
redirect_url: 'projects/2_buddyup'
professional: true
text_color: '#39b1cd'
project_type: "app"
tile_cover_uri : "/assets/images/projects/buddyup/logo.png"
date: "2019"
---
<div>
<Image src="/assets/images/projects/buddyup/project_title.svg"  class="lg:w-1/2 w-full pt-5 px-5"
    layout='responsive' />

<section style="display: block">
    <h1>Client</h1>
    <p><a href="https://www.unimelb.edu.au/"><b>The University of Melbourne</b></a> group referred to as the BuddyUp team works to bring students together through a combination of technology and human interaction. Their vision is to maximise feelings of belonging and connection among university students.</p>
</section>

<section class="">

<Image src="/assets/images/projects/buddyup/s_1.svg" class="lg:float-left lg:pr-32 w-1/2"/>

<div>
    <h1>Project</h1>

    <p>
        Beginning in 2018, The University of Melbourne on behalf of the BuddyUp team commissioned me to construct a platform that would allow students to form study groups based on shared subjects with others they may not even know. 
<br/><br/>
The goal was to have a platform so streamlined and easy that students would jump on, have their subjects and timetable already available and be in a group within hours.

<br/><br/>The project scope included:<br/>
• Realtime Firebase database to host account, message, and content data <br/>
• Google App Engine instance to serve as an API that would run algorithm to match students together into appropriate groups<br/>
• Cross platform Flutter app for users to engage on the platform <br/>



    </p>
</div>

</section>

<section class="pt-20  ">


    <div>
        <h1>Implementation</h1>
        <p>
          An important first step was designing the data model for this project as there were many moving parts. 
<br/><br/>
One of the most crucial parts of the app was automatic retrieval of timetable and subject information. Due to limitations from the University, a scraper was constructed for the prototype, this was heavily involved as it needed to be robust enough to handle any errors that may arise (of which there are countless).
<br/><br/>
The next step was to build the software that would analyse the Firebase database to match students who both shared a subject and wanted to form a study group. This was done using python on a GAE that is connected to the Firebase database.
<br/><br/>
The app was then designed, prototyped and built in accordance with the features described below
        </p>

    </div>
    <Image src="/assets/images/projects/buddyup/s_2.svg" class="lg:float-right lg:pl-32  w-full lg:w-1/2"/>

</section>

<section>
    <Image src="/assets/images/projects/buddyup/s_3.svg" class="lg:float-left lg:pr-32 w-full lg:w-1/2"/>

<p>
The app itself supported a number of features that cover a wide range of functionality including: <br/>
• Automatic retrieval of timetable and subject information<br/><br/>
•  Friend and chat system both group and individual for students to connect and organise<br/><br/>
•  Interactive timetable to customise available times for study group<br/><br/>
•  Inbuilt notification and day tracking to alert users when their study group was meeting<br/><br/>
•  Rating system to let the platform know who they liked meeting with<br/><br/>
•  Connectivity with university library sensor API which returned library traffic  <br/><br/>

</p>

</section>

<section class="flex flex-col lg:flex-row">
    <Image src="/assets/images/projects/buddyup/s_4.svg" class=" p-10 w-full lg:w-1/2"/>
    <Image src="/assets/images/projects/buddyup/s_5.svg" class=" p-10 w-full lg:w-1/2"/>

</section>

<section>

    <div>

        <h1>Result</h1>
        <p>
            Releasing in the app was very exciting. In the first few days we had hundreds of users signing up and creating new groups! It was both challenging and rewarding to monitor and maintain performance using analytics tools like Sentry and Googles inbuilt Firestore Analytics.
<br/>
<br/>
The app was enjoyed for months before the COVID-19 pandemic arose and cause students not to be able to meet up in person. The app was subsequently disabled until further notice.
        </p>
    </div>
</section>

<div
    class="flex flex-col md:flex-row pb-16 pt-10  justify-center lg:space-x-32 md:space-x-10 space-x-0 space-y-10 md:space-y-0">

    <a href="https://apps.apple.com/us/app/buddyup/id1484158100">
        <img src="/assets/images/apple.svg" />
    </a>

    <a href="https://play.google.com/store/apps/details?id=com.apolloappdevelopment.buddyup&hl=en_AU&gl=US">
        <img src="/assets/images/google.svg" />
    </a>

</div>

</div>