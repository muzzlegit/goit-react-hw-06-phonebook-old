import { useSelector, useDispatch } from 'react-redux';
import { Container, Item, ItemText, ButtonWrap } from './ContactList.styled';
import { deleteContact } from "../../redux/contacts/contacts-actions";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";

export default function ContactList () {
    const contacts = useSelector(getFilteredContacts);

    const dispatch = useDispatch();
 
    const onDeleteContact = contactId => dispatch(deleteContact(contactId));
    
    return (
        <Container>
            {
                contacts.map(({id, name, number }) => {
                    return (
                        <Item key={id}>  
                            <ItemText>{name}: {number}</ItemText>
                            <ButtonWrap onClick={() => onDeleteContact(id)}>Delete</ButtonWrap>
                        </Item>
                    )
                })
            }
        </Container>
    )
}

