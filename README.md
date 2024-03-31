# CalendarEmail
Apps Script that sends email to people who have confirmed they are attending an event you have created in Google Calendar.
## Calendar ID
In order to make use of this script you'll need to have the id for the calendar that you are planning on using this on.
1. Locate the id by going to your calendar view and clicking on the three stacked dots next to your calendar and select "Settings and sharing"
2. Scroll down until you see "Integrate calendar" and right under that you will see the Calendar ID (copy the whole thing).
3. In your Apps Script editor create a "calendarID" variable and set it using the calendar id you just grabbed as such:
    ```
    const calendarID = CalendarApp.getCalendarByID('your_calendar_id);
    ```

