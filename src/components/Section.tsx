import React, { useCallback, useEffect, useRef, useState } from "react";
import Menu from "./game/Menu";
import GameStart from "./game/GameStart";
import { Game } from "./interfaces/Game";
import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function getAnimationSettings(originXA: number, originXB: number) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 400,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

export default function Section() {
  const [gameObj, setGameObj] = useState<Game>({
    score: 0,
    bestScore: 0,
    cards: [],
    difficulty: 0,
    isMenu: true,
    isLoose: false,
    isWon: false,
  });

  //
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    if (gameObj.isWon) {
      const timeout = setTimeout(() => {
        startAnimation();
      }, 0);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        pauseAnimation();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [gameObj.isWon]);
  //

  return (
    <section>
      {gameObj.isMenu ? (
        <Menu gameObj={gameObj} setGameObj={setGameObj} />
      ) : (
        <GameStart gameObj={gameObj} setGameObj={setGameObj} />
      )}
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </section>
  );
}
