function calendarEmail() {
  const myCalendar = CalendarApp.getCalendarById('your_calendar_id'); // This is placing your calendar into a constant variable
  let today = new Date(); // This is getting todays date
  let event = myCalendar.getEventsForDay(today); // This is an array, list, of all events happening this day in your calendar
  let confirmedAttendees = []; // This will hold the emails of the people who have confirmed to attend your event

  for (let i = 0; i < event.length; i++) {
    let attendees = event[i].getGuestList(); // This is placing an attendee on your event guest list into a variable

    for (let j = 0; j < attendees.length; j++) {
    // This is saying that if this attendee's status for the event is YES and that you are the event owner,
    // and that the event color matches the color you set to use this script with, then place this person into the confirmedAttendees list
      if (attendees[j].getGuestStatus() === CalendarApp.GuestStatus.YES && event[i].isOwnedByMe() === true && event[i].getColor() === 'color_number') {
        confirmedAttendees.push(attendees[j].getEmail());
      }
    }
  }

  // The subject and body is what is placed into the email that will be going out to the confirmed attendees. 
  let subject = 'Something about reminding said person!';
  let body = 'Hey dude, we got stuff to do today!';

  // This loops through the whole list of confirmed attendees and sends the email out to them from your email.
  for (let i = 0; i < confirmedAttendees.length; i++) {
    GmailApp.sendEmail(confirmedAttendees[i], subject, body);
  }
}
