'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [activeFraggle, setActiveFraggle] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fraggles = [
    { name: 'Gobo', color: '#FF6B35', personality: 'The brave explorer who loves adventure!' },
    { name: 'Red', color: '#E63946', personality: 'The athletic daredevil with endless energy!' },
    { name: 'Mokey', color: '#9D4EDD', personality: 'The artistic soul who paints and meditates!' },
    { name: 'Wembley', color: '#FFD60A', personality: 'The indecisive friend with a heart of gold!' },
    { name: 'Boober', color: '#06FFA5', personality: 'The cautious worrier who loves to do laundry!' }
  ];

  const posters = [
    {
      id: 1,
      title: 'DANCE YOUR CARES AWAY',
      subtitle: "Worries for another day",
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      textShadow: '4px 4px 8px rgba(0,0,0,0.5)'
    },
    {
      id: 2,
      title: 'DOWN AT FRAGGLE ROCK',
      subtitle: "Let the music play!",
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      textShadow: '3px 3px 6px rgba(0,0,0,0.4)'
    },
    {
      id: 3,
      title: 'EXPLORE THE ROCK',
      subtitle: "Adventure awaits in every tunnel",
      bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      textShadow: '4px 4px 10px rgba(0,0,0,0.6)'
    },
    {
      id: 4,
      title: 'MEET THE FRAGGLES',
      subtitle: "Five friends, endless fun",
      bgGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      textShadow: '3px 3px 7px rgba(0,0,0,0.5)'
    }
  ];

  const openPoster = (poster) => {
    setSelectedPoster(poster);
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      {/* Animated background */}
      <div className={styles.bgAnimation}></div>

      {/* Floating radishes */}
      <div className={styles.radish} style={{ left: '10%', animationDelay: '0s' }}>🥕</div>
      <div className={styles.radish} style={{ left: '30%', animationDelay: '2s' }}>🥕</div>
      <div className={styles.radish} style={{ left: '50%', animationDelay: '4s' }}>🥕</div>
      <div className={styles.radish} style={{ left: '70%', animationDelay: '1s' }}>🥕</div>
      <div className={styles.radish} style={{ left: '90%', animationDelay: '3s' }}>🥕</div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div
          className={styles.heroParallax}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className={styles.mainTitle}>
            <span className={styles.titleWord} style={{ animationDelay: '0s' }}>FRAGGLE</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.2s' }}>ROCK</span>
          </h1>
          <p className={styles.heroSubtitle}>Dance your cares away, worries for another day!</p>
          <div className={styles.musicalNotes}>♪ ♫ ♪ ♫ ♪</div>
        </div>
      </section>

      {/* Interactive Fraggles Section */}
      <section className={styles.fragglesSection}>
        <h2 className={styles.sectionTitle}>Meet the Fraggles</h2>
        <div className={styles.fragglesGrid}>
          {fraggles.map((fraggle, index) => (
            <div
              key={fraggle.name}
              className={`${styles.fraggleCard} ${activeFraggle === fraggle.name ? styles.active : ''}`}
              style={{
                backgroundColor: fraggle.color,
                transform: activeFraggle === fraggle.name ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setActiveFraggle(fraggle.name)}
              onMouseLeave={() => setActiveFraggle(null)}
              onClick={() => setActiveFraggle(activeFraggle === fraggle.name ? null : fraggle.name)}
            >
              <div className={styles.fraggleName}>{fraggle.name}</div>
              {activeFraggle === fraggle.name && (
                <div className={styles.fraggleInfo}>{fraggle.personality}</div>
              )}
              <div className={styles.fraggleOrb}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Poster Gallery */}
      <section className={styles.posterSection}>
        <h2 className={styles.sectionTitle}>Poster Gallery</h2>
        <div className={styles.posterGrid}>
          {posters.map((poster, index) => (
            <div
              key={poster.id}
              className={styles.posterCard}
              style={{
                background: poster.bgGradient,
                animationDelay: `${index * 0.15}s`
              }}
              onClick={() => openPoster(poster)}
            >
              <div className={styles.posterContent}>
                <h3
                  className={styles.posterTitle}
                  style={{ textShadow: poster.textShadow }}
                >
                  {poster.title}
                </h3>
                <p className={styles.posterSubtitle}>{poster.subtitle}</p>
                <div className={styles.posterDecor}>✨ 🎵 ✨</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Cave Section */}
      <section className={styles.caveSection}>
        <h2 className={styles.sectionTitle}>Explore the Rock</h2>
        <div className={styles.caveContainer}>
          <div
            className={styles.cave}
            style={{
              transform: typeof window !== 'undefined'
                ? `perspective(1000px) rotateY(${(mousePos.x - window.innerWidth / 2) / 50}deg) rotateX(${-(mousePos.y - window.innerHeight / 2) / 50}deg)`
                : 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
            }}
          >
            <div className={styles.caveTunnel}>
              <div className={styles.tunnelRing}></div>
              <div className={styles.tunnelRing}></div>
              <div className={styles.tunnelRing}></div>
              <div className={styles.tunnelRing}></div>
              <div className={styles.caveText}>Follow the tunnels...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className={styles.factsSection}>
        <h2 className={styles.sectionTitle}>Fraggle Facts</h2>
        <div className={styles.factsGrid}>
          <div className={styles.factCard}>
            <div className={styles.factIcon}>🎸</div>
            <h3>Music is Life</h3>
            <p>Fraggles love to sing, dance, and play music all day long!</p>
          </div>
          <div className={styles.factCard}>
            <div className={styles.factIcon}>🥕</div>
            <h3>Radish Obsession</h3>
            <p>Their favorite food? Crunchy, delicious Doozer constructions!</p>
          </div>
          <div className={styles.factCard}>
            <div className={styles.factIcon}>🏗️</div>
            <h3>Doozer Builders</h3>
            <p>Tiny Doozers work hard building elaborate crystal structures!</p>
          </div>
          <div className={styles.factCard}>
            <div className={styles.factIcon}>🌍</div>
            <h3>Connected Worlds</h3>
            <p>The Rock connects to Outer Space through Doc's workshop!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>🎵 Down at Fraggle Rock! 🎵</p>
          <p className={styles.footerSmall}>A Jim Henson Company Production</p>
        </div>
      </footer>

      {/* Modal for Poster Detail */}
      {showModal && selectedPoster && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <div
            className={styles.modalContent}
            style={{ background: selectedPoster.bgGradient }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
            <h2
              className={styles.modalTitle}
              style={{ textShadow: selectedPoster.textShadow }}
            >
              {selectedPoster.title}
            </h2>
            <p className={styles.modalSubtitle}>{selectedPoster.subtitle}</p>
            <div className={styles.modalDecor}>
              ✨ 🎵 🎸 🎵 ✨
            </div>
            <div className={styles.modalDescription}>
              Experience the magic of Fraggle Rock! Join Gobo, Red, Mokey, Wembley,
              and Boober on their incredible adventures through the tunnels and caves
              of the Rock. Every day brings new songs, new friends, and new discoveries!
            </div>
          </div>
        </div>
      )}

      {/* Mouse follower */}
      <div
        className={styles.mouseFollower}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      ></div>
    </div>
  );
}
