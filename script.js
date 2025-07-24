// 🎵 Piano Piece Library
const library = [
// 🎻 Classical (14)
{ title: "Moonlight Sonata", artist: "Beethoven", genre: "Classical", difficulty: "Medium" },
{ title: "Für Elise", artist: "Beethoven", genre: "Classical", difficulty: "Easy" },
{ title: "Pathétique Sonata", artist: "Beethoven", genre: "Classical", difficulty: "Hard" },
{ title: "Turkish March", artist: "Mozart", genre: "Classical", difficulty: "Medium" },
{ title: "Eine kleine Nachtmusik", artist: "Mozart", genre: "Classical", difficulty: "Easy" },
{ title: "Canon in D", artist: "Pachelbel", genre: "Classical", difficulty: "Easy" },
{ title: "Air on the G String", artist: "Bach", genre: "Classical", difficulty: "Medium" },
{ title: "Prelude in C", artist: "Bach", genre: "Classical", difficulty: "Hard" },
{ title: "Ode to Joy", artist: "Beethoven", genre: "Classical", difficulty: "Easy" },
{ title: "The Well-Tempered Clavier", artist: "Bach", genre: "Classical", difficulty: "Hard" },
{ title: "Ave Maria", artist: "Schubert", genre: "Classical", difficulty: "Medium" },
{ title: "Lacrimosa", artist: "Mozart", genre: "Classical", difficulty: "Hard" },
{ title: "Solfeggietto", artist: "C.P.E. Bach", genre: "Classical", difficulty: "Medium" },
{ title: "Sonata in C Major", artist: "Mozart", genre: "Classical", difficulty: "Easy" },

// ❤️ Romantic (14)
{ title: "Nocturne Op. 9 No. 2", artist: "Chopin", genre: "Romantic", difficulty: "Medium" },
{ title: "Fantaisie-Impromptu", artist: "Chopin", genre: "Romantic", difficulty: "Hard" },
{ title: "Prelude in E Minor", artist: "Chopin", genre: "Romantic", difficulty: "Medium" },
{ title: "Hungarian Rhapsody No.2", artist: "Liszt", genre: "Romantic", difficulty: "Hard" },
{ title: "Liebestraum No. 3", artist: "Liszt", genre: "Romantic", difficulty: "Hard" },
{ title: "Träumerei", artist: "Schumann", genre: "Romantic", difficulty: "Easy" },
{ title: "Kinderszenen", artist: "Schumann", genre: "Romantic", difficulty: "Medium" },
{ title: "Ave Maria", artist: "Schubert", genre: "Romantic", difficulty: "Medium" },
{ title: "Wedding March", artist: "Mendelssohn", genre: "Romantic", difficulty: "Medium" },
{ title: "Salut d’Amour", artist: "Elgar", genre: "Romantic", difficulty: "Easy" },
{ title: "Romance", artist: "Schumann", genre: "Romantic", difficulty: "Medium" },
{ title: "Polonaise in A Major", artist: "Chopin", genre: "Romantic", difficulty: "Hard" },
{ title: "Swan Lake", artist: "Tchaikovsky", genre: "Romantic", difficulty: "Medium" },
{ title: "Romeo & Juliet Theme", artist: "Tchaikovsky", genre: "Romantic", difficulty: "Hard" },

// ☁️ Impressionist (12)
{ title: "Clair de Lune", artist: "Debussy", genre: "Impressionist", difficulty: "Medium" },
{ title: "Arabesque No. 1", artist: "Debussy", genre: "Impressionist", difficulty: "Medium" },
{ title: "La fille aux cheveux de lin", artist: "Debussy", genre: "Impressionist", difficulty: "Medium" },
{ title: "Reverie", artist: "Debussy", genre: "Impressionist", difficulty: "Medium" },
{ title: "Gnossienne No. 1", artist: "Satie", genre: "Impressionist", difficulty: "Easy" },
{ title: "Gnossienne No. 3", artist: "Satie", genre: "Impressionist", difficulty: "Medium" },
{ title: "Gymnopédie No.1", artist: "Satie", genre: "Impressionist", difficulty: "Easy" },
{ title: "Je te veux", artist: "Satie", genre: "Impressionist", difficulty: "Easy" },
{ title: "Images Book I", artist: "Debussy", genre: "Impressionist", difficulty: "Hard" },
{ title: "Estampes", artist: "Debussy", genre: "Impressionist", difficulty: "Hard" },
{ title: "Reflets dans l'eau", artist: "Debussy", genre: "Impressionist", difficulty: "Hard" },
{ title: "Children’s Corner", artist: "Debussy", genre: "Impressionist", difficulty: "Medium" },

// 🌊 New Age (14)
{ title: "River Flows in You", artist: "Yiruma", genre: "New Age", difficulty: "Easy" },
{ title: "Kiss the Rain", artist: "Yiruma", genre: "New Age", difficulty: "Easy" },
{ title: "May Be", artist: "Yiruma", genre: "New Age", difficulty: "Easy" },
{ title: "Spring Waltz", artist: "Yiruma", genre: "New Age", difficulty: "Medium" },
{ title: "Time", artist: "Hans Zimmer", genre: "New Age", difficulty: "Medium" },
{ title: "Now We Are Free", artist: "Hans Zimmer", genre: "New Age", difficulty: "Medium" },
{ title: "Light", artist: "Yiruma", genre: "New Age", difficulty: "Medium" },
{ title: "Photograph", artist: "Ryan Stewart", genre: "New Age", difficulty: "Easy" },
{ title: "A River Flows", artist: "Kevin Kern", genre: "New Age", difficulty: "Medium" },
{ title: "Through the Arbor", artist: "George Winston", genre: "New Age", difficulty: "Medium" },
{ title: "Leaves on the Seine", artist: "David Lanz", genre: "New Age", difficulty: "Medium" },
{ title: "Cristofori’s Dream", artist: "David Lanz", genre: "New Age", difficulty: "Hard" },
{ title: "Yellow", artist: "Kina Grannis", genre: "New Age", difficulty: "Easy" },
{ title: "Clear Blue Sky", artist: "Yiruma", genre: "New Age", difficulty: "Easy" },

// 🎩 Ragtime / Jazz (12)
{ title: "The Entertainer", artist: "Joplin", genre: "Ragtime", difficulty: "Hard" },
{ title: "Maple Leaf Rag", artist: "Joplin", genre: "Ragtime", difficulty: "Hard" },
{ title: "Solace", artist: "Joplin", genre: "Ragtime", difficulty: "Medium" },
{ title: "Elite Syncopations", artist: "Joplin", genre: "Ragtime", difficulty: "Medium" },
{ title: "Bethena", artist: "Joplin", genre: "Ragtime", difficulty: "Medium" },
{ title: "Peacherine Rag", artist: "Joplin", genre: "Ragtime", difficulty: "Medium" },
{ title: "The Easy Winners", artist: "Joplin", genre: "Ragtime", difficulty: "Medium" },
{ title: "Black and White Rag", artist: "Winstead", genre: "Ragtime", difficulty: "Hard" },
{ title: "King Cotton", artist: "Sousa", genre: "Ragtime", difficulty: "Medium" },
{ title: "Sweet Georgia Brown", artist: "Bernie", genre: "Ragtime", difficulty: "Medium" },
{ title: "Tiger Rag", artist: "Original Dixieland Jazz Band", genre: "Ragtime", difficulty: "Hard" },
{ title: "Charleston Rag", artist: "Johnson", genre: "Ragtime", difficulty: "Hard" },

// 🎬 Anime / Movie (12)
{ title: "Merry-Go-Round of Life", artist: "Joe Hisaishi", genre: "Anime", difficulty: "Medium" },
{ title: "One Summer’s Day", artist: "Joe Hisaishi", genre: "Anime", difficulty: "Medium" },
{ title: "Path of the Wind", artist: "Joe Hisaishi", genre: "Anime", difficulty: "Easy" },
{ title: "Spirited Away Theme", artist: "Joe Hisaishi", genre: "Anime", difficulty: "Medium" },
{ title: "Always With Me", artist: "Youmi Kimura", genre: "Anime", difficulty: "Medium" },
{ title: "Totoro Theme", artist: "Joe Hisaishi", genre: "Anime", difficulty: "Easy" },
{ title: "Your Name – Sparkle", artist: "RADWIMPS", genre: "Anime", difficulty: "Medium" },
{ title: "Attack on Titan", artist: "Hiroyuki Sawano", genre: "Anime", difficulty: "Hard" },
{ title: "Let It Go", artist: "Idina Menzel", genre: "Movie", difficulty: "Easy" },
{ title: "He's a Pirate", artist: "Klaus Badelt", genre: "Movie", difficulty: "Medium" },
{ title: "Interstellar Theme", artist: "Hans Zimmer", genre: "Movie", difficulty: "Medium" },
{ title: "Jurassic Park Theme", artist: "John Williams", genre: "Movie", difficulty: "Medium" },

// 🎧 Pop / Modern (12)
{ title: "Perfect", artist: "Ed Sheeran", genre: "Pop", difficulty: "Easy" },
{ title: "All of Me", artist: "John Legend", genre: "Pop", difficulty: "Easy" },
{ title: "Someone Like You", artist: "Adele", genre: "Pop", difficulty: "Medium" },
{ title: "Clocks", artist: "Coldplay", genre: "Pop", difficulty: "Medium" },
{ title: "Let Her Go", artist: "Passenger", genre: "Pop", difficulty: "Easy" },
{ title: "Love Me Like You Do", artist: "Ellie Goulding", genre: "Pop", difficulty: "Medium" },
{ title: "Shallow", artist: "Lady Gaga", genre: "Pop", difficulty: "Medium" },
{ title: "Say You Won’t Let Go", artist: "James Arthur", genre: "Pop", difficulty: "Easy" },
{ title: "Stay With Me", artist: "Sam Smith", genre: "Pop", difficulty: "Medium" },
{ title: "Bohemian Rhapsody", artist: "Queen", genre: "Pop", difficulty: "Hard" },
{ title: "Eyes Closed", artist: "Ed Sheeran", genre: "Pop", difficulty: "Medium" },
{ title: "Let’s Stay Together", artist: "Al Green", genre: "Pop", difficulty: "Medium" },
];


// 🎹 Generate a random piano piece based on filters
function generate() {
  const difficulty = document.getElementById("difficulty").value;
  const genre = document.getElementById("genre").value;
  const artist = document.getElementById("artist").value;

  const matches = library.filter(piece =>
    (!difficulty || piece.difficulty === difficulty) &&
    (!genre || piece.genre === genre) &&
    (!artist || piece.artist === artist)
  );

  const result = document.getElementById("result");

  if (matches.length === 0) {
    result.innerHTML = '<strong style="color:red;">No matching piece found.</strong>';
    return;
  }

  const pick = matches[Math.floor(Math.random() * matches.length)];
  result.innerHTML = `
    <strong>🎵 Title:</strong> ${pick.title}<br>
    <strong>🎼 Artist:</strong> ${pick.artist}<br>
    <strong>🎹 Genre:</strong> ${pick.genre}<br>
    <strong>🎯 Difficulty:</strong> ${pick.difficulty}
  `;

  // Save generate piece to history in localStorage
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  history.push(pick);
  localStorage.setItem("history", JSON.stringify(history));
}

// 📜 Show generated pieces history (most recent first)
function showHistory() {
  const result = document.getElementById("result");
  const history = JSON.parse(localStorage.getItem("history") || "[]");

  if (history.length === 0) {
    result.innerHTML = "<em>No history yet. Click Generate to get started!</em>";
    return;
  }

  let html = `<h3>📜 Recently Generated Pieces</h3>`;
  const reversed = [...history].reverse();

  reversed.forEach((piece, i) => {
    html += `<p>#${history.length - i}: <strong>${piece.title}</strong> by ${piece.artist} (${piece.genre}, ${piece.difficulty})</p>`;
  });

  result.innerHTML = html;
}

// 🧹 Clear the saved history
function clearHistory() {
  localStorage.removeItem("history");
  document.getElementById("result").innerHTML = "🧹 History cleared.";
}
