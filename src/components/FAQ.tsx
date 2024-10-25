"use client";
import { useState } from 'react';

interface Question {
  question: string;
  answer: string;
}

const questionsData: Question[] = [
  { question: 'Qual o objetivo de uma consultoria empresarial?', answer: 'Texto dúvida' },
  { question: 'Todo tipo de empresa pode contratar consultoria?', answer: 'Texto dúvida' },
  { question: 'Por que devo contratar consultoria?', answer: 'Texto dúvida' },
  { question: 'Quais são as vantagens de uma consultoria?', answer: 'Texto dúvida' },
  { question: 'Quanto tempo normalmente dura um projeto de consultoria?', answer: 'Texto dúvida' },
  { question: 'Qual o preço de um projeto?', answer: 'Texto dúvida' },
  { question: 'Qual é o tipo de projeto adequado para a minha empresa?', answer: 'Texto dúvida' },
  { question: 'Preciso ajudar em alguma etapa do projeto?', answer: 'Texto dúvida' },
  { question: 'Como funciona a comunicação com a equipe do projeto?', answer: 'Texto dúvida' },
  { question: 'Por que escolher a Júnior FEA-RP?', answer: 'Texto dúvida' },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Principais dúvidas:</h1>
      {questionsData.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <button
            onClick={() => toggleQuestion(index)}
            style={{
              width: '100%',
              padding: '10px',
              background: activeIndex === index ? '#ff4c4c' : '#f1f1f1',
              color: activeIndex === index ? 'white' : 'black',
              textAlign: 'left',
              border: '1px solid #ddd',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{item.question}</span>
            <span>{activeIndex === index ? '▲' : '▼'}</span>
          </button>
          {activeIndex === index && (
            <div
              style={{
                background: '#ff4c4c',
                color: 'white',
                padding: '15px',
                borderTop: 'none',
              }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
