import React from 'react';

export default function TeamMemberForm(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        placeholder='please enter your name'
                        onChange={onChange}
                        value={values.name}
                    />
                </label>

                <label>Email
                    <input
                    type='text'
                    name='email'
                    placeholder='please enter email address'
                    onChange={onChange}
                    value={values.email}
                    />
                </label>

                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>Select a Role</option>
                        <option value='Front End Engineer'>Front End Engineer</option>
                        <option value='Back End Engineer'>Back End Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Product Manager'>Product Manager</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit Your Answers</button>
                </div>
            </div>
        </form>
    )
}