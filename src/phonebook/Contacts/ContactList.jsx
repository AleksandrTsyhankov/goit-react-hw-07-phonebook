import React from 'react';
import s from './ContactStyles.module.css';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import { connect } from 'react-redux'
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import { deleteContactFromServer } from 'api/phonebook-api';

function ContactList({ contacts, deleteContact }) {

        return (
            <>
                <ul className={s.contactsList}>
                    {contacts.map(contact => (
                        <li
                            key={contact.id}
                            className={s.contactsListItem}
                        > {contact.name}: {contact.number}

                            <span
                                onClick={() => deleteContact(contact.id)}
                                className={s.delBtn}
                            >-</span>
                        </li>
                    ))}
                </ul>
            </>
        );
};


const mapStateToProps = (state) => ({
   contacts:  getFilteredContacts(state)
});

const mapDispatchToProps = dispatch => ({
    deleteContact: function (id) { deleteContactFromServer(id); return dispatch(deleteContact(id)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);