import React, { useState } from "react";
import { Link } from "react-router-dom";

function GuessTheNumber() {
  const [secret, setSecret] = useState(generateSecretNumber());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);

  function generateSecretNumber() {
    let digits = new Set();
    while (digits.size < 4) {
      digits.add(Math.floor(Math.random() * 10));
    }
    return Array.from(digits).join('');
  }

  function getHints(secret, guess) {
    let correctPosition = 0;
    let correctDigit = 0;
    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        correctPosition++;
      } else if (secret.includes(guess[i])) {
        correctDigit++;
      }
    }
    return { correctPosition, correctDigit };
  }

  function handleGuess() {
    if (!/^[0-9]{4}$/.test(guess)) {
      alert("Enter a valid 4-digit number!");
      return;
    }

    const { correctPosition, correctDigit } = getHints(secret, guess);
    const newAttempt = `${guess} → ${correctPosition} in the right spot, ${correctDigit} in the wrong spot`;
    setAttempts([newAttempt, ...attempts]);

    if (correctPosition === 4) {
      setGameOver(true);
    }
    setGuess("");
  }

  function giveUp() {
    alert(`The secret number was: ${secret}`);
    setGameOver(true);
    setGaveUp(true);
  }

  function restartGame() {
    setSecret(generateSecretNumber());
    setAttempts([]);
    setGameOver(false);
    setGaveUp(false);
  }

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Guess the 4-Digit Number!</h2>
      {gameOver ? (
        <div>
          <h3 className="text-success">
            {gaveUp ? `You gave up! The number was ${secret}` : `🎉 You guessed it! The number was ${secret} 🎉`}
          </h3>
          <button className="btn btn-primary mt-3" onClick={restartGame}>Play Again</button>
        </div>
      ) : (
        <>
          <input
            type="text"
            className="form-control w-25 mx-auto mb-3 text-center"
            value={guess}
            maxLength="4"
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter 4 digits"
          />
          <button className="btn btn-success mb-3" onClick={handleGuess}>Submit Guess</button>
          <button className="btn btn-danger mb-3 ms-2" onClick={giveUp}>I Give Up</button>
          <h3 className="mt-4">Attempts:</h3>
          <ul className="list-group w-50 mx-auto">
            {attempts.map((attempt, index) => (
              <li key={index} className="list-group-item">{attempt}</li>
            ))}
          </ul>
        </>
      )}
      <div className="mt-4">
        <Link to="/" className="btn btn-secondary">Back to Homepage</Link>
      </div>
    </div>
  );
}

export default GuessTheNumber;
