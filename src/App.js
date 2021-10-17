import { useEffect } from 'react';
import ContactForm from './phonebook/Contacts/ContactForm';
import ContactList from './phonebook/Contacts/ContactList';
import Filter from './phonebook/Filter/Filter';
import s from './App.module.css';
import { useDispatch } from 'react-redux';
import * as phonebookOperations from './redux/phonebook/phonebook-operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
        dispatch(phonebookOperations.fetchContacts())
    }, [dispatch]);
  
  return (
      <>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        
        <h2 className={s.title}>Contacts</h2>
        <Filter/>
        
        <ContactList />
      </>
    )
};

export default App;
