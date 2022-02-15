import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-actions";
import { LabelWrap,FormWrap, ButtonWrap } from './ContactForm.styled';
import { getContacts } from "../../redux/contacts/contacts-selectors";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);

    const dispatch = useDispatch();

    const checkContactsDuplicate = (name) => {
        const normalizedName = name.toLowerCase();
        return contacts.find(contact =>
        contact.name.toLowerCase() === normalizedName);
      }

    const handleContactChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
          default:
            break;
        }
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        if(checkContactsDuplicate(name)) {
            alert('contact is already there!');
            return;
        }
        dispatch(addContact(name, number));
        reset();
    }
    const reset = () => {
        setName('');
        setNumber('');
    }
        return (
            <>        
                <FormWrap onSubmit={handleSubmit}>
                    <LabelWrap>
                        Name
                        <input
                            name="name"
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleContactChange}
                        />
                    </LabelWrap>
                    <LabelWrap>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleContactChange}
                        />
                    </LabelWrap>
                    <ButtonWrap type="submit">Add contact</ButtonWrap>
                </FormWrap>
            </>
        )
}