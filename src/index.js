const buttonsDiv = document.querySelector("#buttons")
const displayDiv = document.querySelector("#display");

function createPetCard(pet) {
  return `
  <section class="flex flex-col gap-y-4 border rounded-sm pb-2 max-w-xs">
    <h2 class="text-3xl font-bold text-center py-4 text-white bg-blue-700">${pet.name}</h2>
    <figure>
      <img alt="" src="https://source.unsplash.com/random/900×700/?dog}" />
      <figcaption class="py-4 flex flex-col gap-y-2 items-center italic">${pet.description}<small class="not-italic">Age: ${pet.age}</small></figcaption>
    </figure>
  </section>
  `
}

function createTermCard(term) {
  return `
    <section class="flex flex-col gap-y-4 border rounded-sm pb-2">
      <h2 class="text-3xl font-bold text-center py-4 text-white bg-blue-700">${term.term}</h2>
      <p class="px-4">${term.definition}</p>
      <footer class="flex flex-col gap-y-2 items-center"><a href="${term.url}" class="text-sky-500 underline">Source</a> <span>Category: ${term.category}</span> <span>Relevance: ${term.relevance}</span> </footer>
    </section>
  `;
}

// TODO: Whenever I click 'Fetch Terms'...fetch terms
buttonsDiv.addEventListener("click", async (e) => {
  if(e.target.dataset.fetch === "terms") {
    const resp = await fetch("http://localhost:3001/api/terms")
    const terms = await resp.json();

    displayDiv.innerHTML = terms.map(createTermCard).join("")
  }
})