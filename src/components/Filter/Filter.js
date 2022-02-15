
import { useSelector, useDispatch  } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { Container, LabelWrap } from './Filter.styled';
import { getFilter } from "../../redux/contacts/contacts-selectors";

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

    return (
      <Container>        
        <LabelWrap>
          Find contacts by name
          <input
            name="filter"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={value}
            onChange={(event) => dispatch(changeFilter(event.currentTarget.value)) }
          />
        </LabelWrap>
      </Container>
    )
}
