export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;
export const getFilteredContacts = (state) => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();
    const requiredСontact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );
    return requiredСontact;
}
