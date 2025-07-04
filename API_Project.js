//Lego//

const onFetchLegoClick = async () => {
    const colors = await fetchLegoColors();
    renderLegoColors(colors);
}

async function fetchLegoColors() {
    const response = await fetch("https://rebrickable.com/api/v3/lego/colors/?page_size=10&key=" + API_Key);
    const data = await response.json();
    return data.results;
}


//renders the lego colors with the same color as the backround color 
const legoContainer = document.getElementById('lego-container')
function renderLegoColors(data ) {
    console.log(data);
  legoContainer.innerHTML = data.map(color => `
    <span
          class="text-white p-1 m-1 d-inline-block"
          style="background-color: #${color.rgb}"
          >
          ${color.name}
        </span>
    `).join("");
}
