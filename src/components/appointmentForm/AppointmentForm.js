import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.js"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>name</label>
        <input 
          name='name'
          value={title} 
          type='text' 
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for='date'>date</label>
        <input 
          name='date'
          value={date}
          type='date'
          min={getTodayString()} 
          onChange={(e) => setDate(e.target.value)}
        />
        <label for='time'>time</label>
        <input 
          name='time'
          value={time} 
          type='time' 
          onChange={(e) => setTime(e.target.value)}
        />
        <ContactPicker name='contact' contacts={contactNames} onChange={(e) => setContact(e.target.value)}/>
        <button id='submit' type='submit'>Submit</button>
    </form>
  );
};
