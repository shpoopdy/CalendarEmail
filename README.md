# CalendarEmail
Apps Script that sends email to people who have confirmed they are attending an event you have created in Google Calendar.
## Calendar ID
To get started you can go to [Google Apps Script](https://www.google.com/script/start/) and click on the "Start Scripting" Button. That should open up the editor for you and on the top of the page on the left hand side you can click the "New project" button (if you've already started and wanted to return to your script already you can select "My Projects" instead". Once in you can copy and paste the contents of this file into your new function. You can also rename the function to match what it will be doing, ex. CalendarEmail.


In order to make use of this script you'll need to have the id for the calendar that you are planning on using this on.
1. Locate the id by going to your calendar view and clicking on the three stacked dots next to your calendar and select "Settings and sharing"
2. Scroll down until you see "Integrate calendar" and right under that you will see the Calendar ID (copy the whole thing).
3. If you copy and pasted the code from this repository then you will see a variable in your Apps Script editor named "calendarID", set it using the calendar id you just grabbed as such:
    ```
    const calendarID = CalendarApp.getCalendarByID('your_calendar_id);
    ```

