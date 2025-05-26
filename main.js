// Mock Data (normally you'd fetch from your backend or Steam API)
const mockData = [
    {
      title: "Ready or Not",
      genres: ["FPS", "Tactical"],
      platforms: ["Steam"],
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/header.jpg"
    },
    {
      title: "Escape From Tarkov",
      genres: ["FPS", "Survival"],
      platforms: ["Battlestate Games"],
      image: "https://cdn.escapefromtarkov.com/uploads/content/banners/slide-03.jpg"
    },
    {
      title: "Insurgency: Sandstorm",
      genres: ["FPS", "Realistic"],
      platforms: ["Steam", "Epic"],
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/581320/header.jpg"
    },
    {
      title: "Squad",
      genres: ["Military", "FPS"],
      platforms: ["Steam"],
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/393380/header.jpg"
    }
  ];
  
  function loginWithSteam() {
    alert("[MOCK] Redirecting to Steam login...");
    document.getElementById("recommendationPanel").style.display = 'block';
    window.scrollTo({ top: document.getElementById("recommendationPanel").offsetTop, behavior: 'smooth' });
  }
  
  function continueAsGuest() {
    alert("[MOCK] Continuing as guest. Limited features.");
    document.getElementById("recommendationPanel").style.display = 'block';
    window.scrollTo({ top: document.getElementById("recommendationPanel").offsetTop, behavior: 'smooth' });
  }
  
  function matchGames() {
    const inputs = [
      document.getElementById("game1").value.toLowerCase(),
      document.getElementById("game2").value.toLowerCase(),
      document.getElementById("game3").value.toLowerCase()
    ];
  
    const matched = mockData.filter(game => {
      return inputs.some(input => game.genres.some(g => input.includes(g.toLowerCase())));
    });
  
    displayResults(matched);
  }
  
  function quickRecommend(type) {
    const keywords = {
      'tactical': ["Tactical", "FPS"],
      'co-op': ["Co-op", "Survival"],
      'story': ["Story Rich", "Narrative"]
    }[type];
  
    const matched = mockData.filter(game => {
      return game.genres.some(g => keywords.includes(g));
    });
  
    displayResults(matched);
  }
  
  function displayResults(games) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" />
        <h3>${game.title}</h3>
      `;
      card.onclick = () => window.open(`https://www.google.com/search?q=${game.title}+game`, '_blank');
      resultsDiv.appendChild(card);
    });
  }
  
