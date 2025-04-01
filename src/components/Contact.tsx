'use client';
import React, { useState } from 'react';
import axios from 'axios';

interface ContactProps {
  dict: {
    contact: {
      title: string;
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
      submit: string;
      success: string;
    };
  };
}

const Contact: React.FC<ContactProps> = ({ dict }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitForm = (): void => {
    axios
      .post(
        'https://formcarry.com/s/azgirQ7lLtr',
        { name, email, message },
        { headers: { Accept: 'application/json' } },
      )
      .then((): void => {
        setSubmitted(true);
        setTimeout((): void => {
          setName('');
          setEmail('');
          setMessage('');
          setSubmitted(false);
        }, 5000);
      })
      .catch((err): void => {
        console.log(err);
      });
  };

  return (
    <>
      <section className={'py-12 px-6'} id={'contact'}>
        <div className={'inner'}>
          <h2 className={'text-3xl font-heading text-accent'}>{dict.contact.title}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
            className={'mt-6 grid gap-4'}
          >
            <input
              className={'p-3 rounded bg-highlight text-background'}
              type={'text'}
              placeholder={dict.contact.placeholders.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={'p-3 rounded bg-highlight text-background'}
              type={'email'}
              placeholder={dict.contact.placeholders.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={'p-3 rounded bg-highlight text-background'}
              placeholder={dict.contact.placeholders.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className={'bg-primary text-highlight py-2 px-4 rounded font-subheading'}>
              {dict.contact.submit}
            </button>
          </form>
        </div>
      </section>
      {submitted && (
        <div className={'bg-primary text-highlight text-center py-12'}>
          <p className={'text-xl font-subheading'}>{dict.contact.success}</p>
        </div>
      )}
    </>
  );
};

export default Contact;
