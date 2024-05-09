function calendarEmail() {
  const myCalendar = CalendarApp.getCalendarById('your_calendar_id'); // This is placing your calendar into a constant variable
  const today = new Date(); // This is getting todays date
  const event = calendarID.getEventsForDay(today); // This is an array (list) of all events happening this day in your calendar
  const confirmedAttendees = []; // This will hold the emails of the people who have confirmed to attend your event
  const guestNames = []; // This is storing their names to be used in the email

  // This is looping through all the events happening on the given day.
  for (let i = 0; i < event.length; i++) {
    const attendees = event[i].getGuestList(); // This is placing all attendees from the current event on your event guest list into an array.

    for (let j = 0; j < attendees.length; j++) {
    // This is saying that if this attendee's status for the event is YES and that you are the event owner,
    // and that the event color matches the color you set to use this script with, then place this person into the confirmedAttendees list
      if (attendees[j].getGuestStatus() === CalendarApp.GuestStatus.YES && event[i].isOwnedByMe() === true && event[i].getColor() === 'color_number') {
        confirmedAttendees.push(attendees[j].getEmail());
        guestNames.push(attendees[j].getName());
      }
    }
  }

  // The subject and body is what is placed into the email that will be going out to the confirmed attendees. 
  let subject = 'Something about reminding said person!';

  // This loops through the whole list of confirmed attendees and sends the email out to them from your email.
  for (let k = 0; k < confirmedAttendees.length; k++) {
    let body = `Hey ${guestNames[k]}, we got stuff to do today!`;
    GmailApp.sendEmail(confirmedAttendees[k], subject, body);
    // The following shows the email address that is receiving this email in the execution log
    Logger.log(`Sent email out to ${confirmedAttendees[k]}!`);
  }
}
