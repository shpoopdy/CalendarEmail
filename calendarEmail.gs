function calendarEmail() {
  const calendarID = CalendarApp.getCalendarById('your_calendar_id');
  let today = new Date();
  let event = calendarID.getEventsForDay(today);
  let confirmedAttendees = [];

  for (let i = 0; i < event.length; i++) {
    let attendees = event[i].getGuestList();

    for (let j = 0; j < attendees.length; j++) {
      if (attendees[j].getGuestStatus() === CalendarApp.GuestStatus.YES && event[i].isOwnedByMe() === true && event[i].getColor() === 'color_number') {
        confirmedAttendees.push(attendees[j].getEmail());
      }
    }
  }

  let subject = 'Something about reminding said person!';
  let body = 'Hey dude, we got stuff to do today!';

  for (let i = 0; i < confirmedAttendees.length; i++) {
    GmailApp.sendEmail(confirmedAttendees[i], subject, body);
  }
}
