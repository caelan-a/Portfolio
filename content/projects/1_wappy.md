---
title: ""
local_redirect: true
text_color: '#ffffff'
redirect_url: 'projects/1_wappy'
professional: true
project_type: "app"
tile_cover_uri : "/assets/images/projects/wappy/logo.png"
date: "2018 - 2020"

---

<div>
<Image src="/assets/images/projects/wappy/project_title.svg" width="600" height="450" class="p-10 pb-10 pt-20"
    layout='responsive' />
<Image src="/assets/images/projects/wappy/company.svg" width="200" height="450" class=" " layout='responsive' />



<section style="display: block">
    <h1>Client</h1>
    <p><a href="https://robaws.be/"><b>ROBAWS</b></a> is a company based in Belgium that offers “Administration software for construction and project
        companies.”</p>
</section>

<section class="pt-10 ">

<Image src="/assets/images/projects/wappy/header.svg" class="lg:float-left lg:pr-32 w-1/2"/>

<div>
    <h1>Project</h1>

    <p>
        Beginning in 2019, ROBAWS hired me to help construct a cross platform mobile app called Wappy to power
        their administrative software suite.<br /> <br />
        The goal of this app was to allow project based companies such as those in construction to consolidate
        both delivery of work orders to employees, tracking of work done and materials used.
        This would allow companies to maximise their efficiency and productivity while simultaneously letting workers complete
        their job and log required information reliably and conveniently.
        <br />
        <br />

        Workers were enabled to log what materials they usde, how much time they spent at sites etc.
        More importantly they were given a streamlined interface to receive workorders from their employers that
        enclosed all of the contact info, locations, documents and associated data to complete their work.
    </p>
</div>

</section>

<section class="pt-20  ">


    <div>
        <h1>Implementation</h1>
        <p>
            I started development working with direction from ROBAWS CEO Michaël Van Robaeys
            who is a seasoned software engineer himself.
            <br />
            <br />
            The first step was to build out the UI using tools such as Figma. After that it was implemented in
            Google’s Flutter framework.
            <br />
            <br />

            There were many design considerations from both a UI and backend perspective.
            <br />
            <br />

            With respect to the UI, first and foremost was the requirement of multiple languages given the wide
            geography of the app’s audience. This was supported by adding internationalisation (I18n) and
            localisation (l10n) using the Flutter framework. As of writing this there are a multitude of European
            languages that are now supported.
            Secondly, given the wide array of functions this app supports, a series of decisions to make the UI
            clean looking and easy to navigate were made. This included the TabView and flat design of tiles and
            buttons.
            <br />
            <br />

            The backend needed to be robust and easily extensible as it required on-device storage of user
            generated content as well as the ability to sync and update with a remote server to fetch new content from employers
            and update existing info. A service pattern approach was implemented along with a local SQL database
            (SQLFlite) and gateway for API calls.
            <br />
            <br />

            Many additional special features were implemented including start and stop timers, digital signatures, remote
            database tree navigation.
        </p>

    </div>
    <Image src="/assets/images/projects/wappy/ss_1.svg" class="lg:float-right lg:pl-32 w-1/2"/>

</section>

<section>

    <Image src="/assets/images/projects/wappy/w.svg" class="lg:float-left lg:pr-32 lg:w-2/5 invisible lg:visible w-0"/>
    <div>

        <h1>Result</h1>
        <p>
            The app has a presence on both the Apple Store and Google Play. Being a centerpiece of ROBAWS software
            package, it is used by numerous companies and thousands of employees.

            Development continues to this day in both maintenance and feature addition.
        </p>
    </div>
</section>

<div
    class="flex flex-col md:flex-row pb-16 pt-10  justify-center lg:space-x-32 md:space-x-10 space-x-0 space-y-10 md:space-y-0">

    <a href="https://apps.apple.com/us/app/wappy/id1473602977?l=nl&ls=1">
        <img src="/assets/images/apple.svg" />
    </a>

    <a href="https://play.google.com/store/apps/details?id=be.eforge.wappy">
        <img src="/assets/images/google.svg" />
    </a>

</div>
<div class="pb-24">

    <a href="http://www.wappy.io/" passHref>
        <button class='relative text-primary p-10 rounded text-2xl  overflow-visible  hover:bg-gray-100' style={{
            width: '300px' }}>
            Visit Website
        </button>
    </a>

</div>

</div>