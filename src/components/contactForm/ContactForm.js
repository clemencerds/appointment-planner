import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for='name'>name</label>
        <input 
          name='name'
          value={name} 
          type='text' 
          onChange={(e) => setName(e.target.value)}
        />
        <label for='phone'>phone</label>
        <input 
          id='phone' 
          value={phone} 
          type='tel' 
          onChange={(e)=> setPhone(e.target.value)}
        />
        <label for='email'>email</label>
        <input 
          id='email' 
          value={email} 
          type='email' 
          onChange={(e)=> setEmail(e.target.value)}
        />
        <button id='submit' type='submit'>Submit</button>
      </form>
    </div>
  );
};

