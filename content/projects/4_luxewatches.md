---
title: ""
local_redirect: true
redirect_url: 'projects/4_luxewatches'
text_color: '#666666'
professional: true
project_type: "app"
tile_cover_uri : "/assets/images/projects/luxewatches/logo.png"
date: "2019-2021"
---
<div>
<Image src="/assets/images/projects/luxewatches/logo.png"  class="lg:w-1/2 w-full pt-5 px-5"
    layout='responsive' />

<section style="display: block">
    <h1>Client</h1>
<p><b>Luxe Watches</b> is the leading independent luxury watch retailer in the UK. Based out of London, they both buy and sell luxury watches from from the instantly recognisable Rolex to the Richard Mille limited edition timepiece.</p>
</section>

<section class="">

<!-- <Image src="/assets/images/projects/buddyup/s_1.svg" class="lg:float-left lg:pr-32 w-1/2"/> -->

<div>
    <h1>Project</h1>

    <p>
Beginning in 2019, Luxe Watches hired Apollo App Development to design and build and instore app that would allow staff to conduct transactions digitally that were previously done through pen and paper. This was to allow transactions to be submitted along with details and images to their backend which would allow business to be much more efficient and reliable. 
<br/>
<br/>
This app handled a range of different transaction types requiring differing forms while at the same time providing a clean and quick interface that allowed transactions to be completed and submitted to their database quickly. It was designed to function with the existing wordpress backend. 
<br/>
<br/>

Later on, the app was updated to allow remote signature signing which required development on wordpress and a standalone react web app that facilitated both desktop and mobile access. It also was extended to allow comprehensive viewing and retrieval of submissions in the wordpress database.



    </p>
</div>

</section>

<section class="pt-20  ">


    <div>
        <h1>Implementation</h1>
        <p>
        The UI was designed in figma before being approved by the team at Luxe Watches. Tailored graphics were created in Illustrator for use in the project. Subsequently, the app was built using Flutter to support a number of iPads used in store. 

A custom Wordpress plugin in PHP was developed to expose secure endpoints to the app which would allow it to not only make submissions to the relevant database but also request the execution of complex SQL queries such as searches that involved a number of parameters from the app user. It also supported text field autocompletion within the app’s input forms.

To facilitate the remote digital signature functionality, the wordpress plugin was extended to support automatic emailing to customers with a generated link to a React webapp that handled that user’s specific signature submission with respect to a transaction.   


    </div>
    <!-- <Image src="/assets/images/projects/buddyup/s_2.svg" class="lg:float-right lg:pl-32  w-full lg:w-1/2"/> -->

</section>

<section>

    <div>

        <h1>Result</h1>
        <p>
           The app has been deployed and used with thousands of transactions, aiding Luxe Watches in every day business to be more efficient and productive.
        </p>
    </div>
</section>
<div class="pb-24">

    <a href="http://www.luxewatches.co.uk/" passHref>
        <button class='relative text-primary p-10 rounded text-2xl  overflow-visible  hover:bg-gray-100' style={{
            width: '300px', color: "#242424", borderColor: "#242424" }}>
            Visit Website
        </button>
    </a>

</div>


</div>