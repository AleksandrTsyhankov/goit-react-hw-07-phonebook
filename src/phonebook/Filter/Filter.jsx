import React from 'react';
import s from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux'
import { filterContacts } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

function Filter ({ onChange, value }) {
    const idF = uuidv4();

        return (
            <>
                <label
                    htmlFor={idF}
                    className={s.filter}
                >Find contacts by name
                </label>
                <input
                    id={idF}
                    className={s.filterInput}
                    type='text'
                    name='filter'
                    value={value}
                    onChange={onChange}
                />
             </>
        );
};
    
const mapStateToProps = state => ({
  contacts: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(filterContacts(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);