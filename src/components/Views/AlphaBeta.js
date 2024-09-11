import React from "react";
import alphabetaChart from "../images/alphabeta-chart.png";

const AlphaBeta = () => {
  return (
    <div className="main-page">
      <div className="alphabeta">
        <h1>Greek AlphaBeta</h1>
        <div className="paragraph-image">
          <p>
            The Greek alphabet is the script that has been used to write the
            Greek language since the 8th century BC. It was derived from the
            earlier Phoenician alphabet, and was the first alphabetic script in
            history to have distinct letters for vowels as well as consonants.
            It is the ancestor of the Latin and Cyrillic scripts. Apart from its
            use in writing the Greek language, both in its ancient and its
            modern forms, the Greek alphabet today also serves as a source of
            technical symbols and labels in many domains of mathematics, science
            and other fields.
          </p>
          <img src={alphabetaChart} alt="Greek AlphaBeta" />
        </div>
        <ul>
          <li>
            <strong>Α α (Aplha)</strong> - Pronounced like the "a" in "father"
          </li>
          <li>
            <strong>Β β (Beta)</strong> - Pronounced like the "b" in "ball"
          </li>
          <li>
            <strong>Γ γ (Gamma)</strong> - Pronounced like the "g" in "go"
          </li>
          <li>
            <strong>Δ δ (Delta)</strong> - Pronounced like the "d" in "dog"
          </li>
          <li>
            <strong>Ε ε (Epsilon)</strong> - Pronounced like the "e" in "bed"
          </li>
          <li>
            <strong>Ζ ζ (Zeta)</strong> - Pronounced like the "z" in "zoo"
          </li>
          <li>
            <strong>Η η (Eta)</strong> - Pronounced like the "a" in "ate"
          </li>
          <li>
            <strong>Θ θ (Theta)</strong> - Pronounced like the "th" in "thing"
          </li>
          <li>
            <strong>Ι ι (Iota)</strong> - Pronounced like the "i" in "it"
          </li>
          <li>
            <strong>Κ κ (Kappa)</strong> - Pronounced like the "k" in "kite"
          </li>
          <li>
            <strong>Λ λ (Lambda)</strong> - Pronounced like the "l" in "love"
          </li>
          <li>
            <strong>Μ μ (Mu)</strong> - Pronounced like the "m" in "mother"
          </li>
          <li>
            <strong>Ν ν (Nu)</strong> - Pronounced like the "n" in "nice"
          </li>
          <li>
            <strong>Ξ ξ (Xi)</strong> - Pronounced like the "x" in "box"
          </li>
          <li>
            <strong>Ο ο (Omicron)</strong> - Pronounced like the "o" in "hot"
          </li>
          <li>
            <strong>Π π (Pi)</strong> - Pronounced like the "p" in "pot"
          </li>
          <li>
            <strong>Ρ ρ (Rho)</strong> - Pronounced like the "r" in "rat"
          </li>
          <li>
            <strong>Σ σ (Sigma)</strong> - Pronounced like the "s" in "sun"
          </li>
          <li>
            <strong>Τ τ (Tau)</strong> - Pronounced like the "t" in "top"
          </li>
          <li>
            <strong>Υ υ (Upsilon)</strong> - Pronounced like the "u" in "put"
          </li>
          <li>
            <strong>Φ φ (Phi)</strong> - Pronounced like the "f" in "fun"
          </li>
          <li>
            <strong>Χ χ (Chi)</strong> - Pronounced like the "ch" in "loch"
          </li>
          <li>
            <strong>Ψ ψ (Psi)</strong> - Pronounced like the "ps" in "lapse"
          </li>
          <li>
            <strong>Ω ω (Omega)</strong> - Pronounced like the "o" in "go"
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlphaBeta;
