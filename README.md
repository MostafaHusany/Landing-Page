# Landing-Page

<h4>The core of the project can be find in the app.js, and it consist of :</h4>

<b>create_sections_offsets();</b> A function that get all sections offsets at once, so we don't need to recal the document.query every time we need to reacheck the section offset for a condition.

<b>set_link_events();</b> A function that creates the event listiner for the links to scroll to it's targeted section; Taking a care that... There will be a dynamic elements creation, this mean every time we create a new section with a new link we use this function to inite an event for the link.

Than we can find the we have the usual needed code for tracking the scroll event for checking in which section we are in, and the add new section event that creates a new section with its link.

<h3>In the end we achived the main functionality for our project :</h3>
<hr/>
<ol>
  <li><h4>A scroll action when we click on the link.</h4></li>
  <li><h4>Tracking the scroll event on the window and activate the targted section.</h4></li>
  <li><h4>adding a dynamic element (A new section), with the same events and functionality.</h4></li>
</ol>
