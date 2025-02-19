'use client';

import type React from 'react';

import { useState } from 'react';
import Header from '../header/header';

export interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

export default function FormPage() {
  const [formData, setFormData] = useState<Superhero>({
    name: '',
    superpower: '',
    humilityScore: 0,
  });
  const [message, setMessage] = useState('');

  const handleChange = (data: object) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ formData });
    try {
      const response = await fetch('http://localhost:4000/superheroes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Form submitted successfully!');
        setFormData({ name: '', superpower: '', humilityScore: 0 });
      } else {
        setMessage('Error submitting form. Please try again.');
      }
    } catch (error) {
      setMessage(`An error occurred. Please try again later. Message ${error}`);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Create Superhero</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange({ [e.target.id]: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="superpower" className="block mb-1">
              Superpower:
            </label>
            <input
              type="text"
              id="superpower"
              value={formData.superpower}
              onChange={(e) => handleChange({ [e.target.id]: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="humilityScore" className="block mb-1">
              Humility Score:
            </label>
            <input
              type="text"
              id="humilityScore"
              value={formData.humilityScore}
              onChange={(e) => handleChange({ [e.target.id]: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </main>
    </>
  );
}
