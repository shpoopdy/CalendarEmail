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

## Important
In the if statement on line 13 there is a method called "getColor()" and it's checking to see if that is equal to a certain number. This color is in reference to the event color and not the calendar's color. It is possible to have the same color for the calendar and the event, but this method is checking specifically for the event's color. There is a list of what numbers correspond to what colors and I will link that [here](https://google-calendar-simple-api.readthedocs.io/en/latest/colors.html). There are only 11 event colors and depending on how you have the color set for your calendar set up, Classic or Modern, the color of your calendar might not be in the event color list even thought there is an associated number with it, ex. Radicchio = '21' but there is no 21 in the event color list. It is best to use the color of the event itself to determine if this is one of the events you want to send the emails out for automatically.

## Colors
1. Lavender
2. Sage
3. Grape
4. Flamingo
5. Banana
6. Tangerine
7. Peacock
8. Graphite
9. Blueberry
10. Basil
11. Tomato

Also note that for this portion the number is inside of quotation marks, as so:
```
event[i].getColor() === "color_number"
```
Even though this color is associated with a number please be sure place it inside of the quotation marks, single quotes or double quotes are fine. This number is actually a string and should be placed in as such:
```
event[i].getColor() === "1"
```
