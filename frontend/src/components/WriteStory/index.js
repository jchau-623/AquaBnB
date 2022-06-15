import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStory } from '../../store/stories';
import { useHistory } from 'react-router-dom';
import './WriteStory.css';

function WriteStory() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authorId = sessionUser.id;

    const newStory = {
      authorId,
      title,
      subtitle,
      imageUrl,
      body,
    };

    return dispatch(createStory(newStory))
      .then((createdStory) => history.push(`/listings/${createdStory.id}`))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  if (sessionUser) {
    return (
      <>
        <div className='story-form-container'>
          <form className='story-form' onSubmit={handleSubmit}>
            <h2 className='ws-title'>Create a Spot</h2>
            <ul className='ws-errors'>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='title'
                type='text'
                value={title}
                placeholder='Name'
                onChange={(e) => setTitle(e.target.value)}
                autoFocus={true}
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='story-subtitle'
                type='text'
                value={subtitle}
                placeholder='Heading'
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            <div className='ws-form-field'>
              <input
                className='sf-input'
                id='image'
                type='text'
                value={imageUrl}
                placeholder='Share a picture!'
                onChange={(e) => setImageUrl(e.target.value)}

              />
            </div>
            <div className='ws-form-field'>
              <textarea
                className='sf-content'
                id='content'
                rows='5'
                cols='60'
                value={body}
                placeholder='Tell us about your spot!'
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <button className='ws-button' type='submit'>
              Create
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return history.push('/');
  }
}

export default WriteStory;
