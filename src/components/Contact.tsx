'use client';
import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [loading, setLoading] = useState(false);
  async function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const values = {
      from_name: formData.get('name'),
      user_email: formData.get('email'),
      message: formData.get('message'),
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        values,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        function (response) {
          if (response.status === 200) {
            alert('Mensagem Enviada com sucesso!');
          } else {
            alert(response.text);
          }
          setLoading(false);
        },
        function (error) {
          alert('Não foi possivel executar esta ação no momento!');
          setLoading(false);
        }
      );
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="max-w-[400px]">
        <Input label="Nome" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <div className="mb-6 flex items-start flex-col gap-2">
          <label htmlFor="message" className="text-sm text-gray-400">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-zinc-800 border border-zinc-800 rounded-md placeholder:text-sm text-sm 
            w-full min-h-[100px]
            focus:border-emerald-500 focus:shadow-emerald-500 focus:ring-emerald-500"
            placeholder="Digite Sua Mensagem"
          />
        </div>
        {loading ? (
          <Button.root disabled={loading}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              fill="#fff"
              className="animate-spin"
              viewBox="0 0 512 512"
            >
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
            Enviando
          </Button.root>
        ) : (
          <Button.root disabled={loading}>
            <Button.icon icon={PaperAirplaneIcon} />
            Enviar
          </Button.root>
        )}
      </div>
    </form>
  );
}
