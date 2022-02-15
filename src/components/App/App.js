import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from "../Filter/Filter";

import { Container, ContainerTitle, ContainerForm, ContainerSecondaryTitle } from './App.styled';

export default function App() {
    return (
      <Container>
        <ContainerTitle>Phonebook</ContainerTitle>
        <ContainerForm>
          <ContactForm />
          <ContainerSecondaryTitle>Contacts</ContainerSecondaryTitle>
          <Filter />
    
          <ContactList />
        </ContainerForm>
      </Container>
    )
}

