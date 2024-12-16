'use client';

import React from 'react';

// import RadiantHolo from '../result/[id]/ui/animation/RadiantHolo';
import RadiantHoloPattern from '../result/[id]/ui/animation/RadiantHoloPattern';
import PersonalityCard from '../result/[id]/ui/PersonalityCard';

import styles from '@/app/list/page.module.css';
import dataResult from '@/data/DB_RESULTS.json';

export default function ListPage() {
  const cards = dataResult;

  const generateResult = (card: IDinosaurCard) => {
    const fpti = card.fpti;

    return {
      '책임감과 주도성': {
        L: fpti[0] === 'L' ? 100 : 0,
        S: fpti[0] === 'S' ? 100 : 0,
      },
      '팀에서의 역할': {
        A: fpti[1] === 'A' ? 100 : 0,
        D: fpti[1] === 'D' ? 100 : 0,
      },
      '플레이 스타일': {
        T: fpti[2] === 'T' ? 100 : 0,
        P: fpti[2] === 'P' ? 100 : 0,
      },
      '목표와 우선순위': {
        C: fpti[3] === 'C' ? 100 : 0,
        E: fpti[3] === 'E' ? 100 : 0,
      },
    };
  };

  return (
    <main className={styles['page-main']}>
      <h1>Card List</h1>
      <div className={styles.container}>
        {cards.map((card, index) => {
          const result = generateResult(card);
          if (index < 3) {
            return (
              <RadiantHoloPattern key={card.id} radiant holo fpti={card.fpti}>
                <PersonalityCard fpti={card.fpti} type={card.type} result={result} />
              </RadiantHoloPattern>
            );
          } else {
            return <PersonalityCard key={card.id} fpti={card.fpti} type={card.type} result={result} />;
          }
        })}
      </div>
    </main>
  );
}
