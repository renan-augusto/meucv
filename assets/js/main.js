function getProfileData(profileData) {
  const photo = document.getElementById("profile.photo");
  const name = document.getElementById("profile.name");
  const position = document.getElementById("profile.position");
  const location = document.getElementById("profile.location");
  const phone = document.getElementById("profile.phone");
  const email = document.getElementById("profile.email");

  photo.src = profileData.photo;
  photo.alt = profileData.name;
  name.innerText = profileData.name;
  position.innerText = profileData.position;
  location.innerText = profileData.location;
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function getSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((s) => `<li>${s}</li>`)
    .join("");
}

function getHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (h) => `<li>
    <img src="${h.logo}" alt="${h.name}" title="${h.name}">
</li>`
    )
    .join("");
}

function getLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((l) => {
      `<li>${l}</li>`;
    })
    .join("");
}

function getPortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((p) => {
      `<li>
        <h3 ${p.github ? 'class="github"' : ""}>${p.name}</h3>
        <a href="${p.url}" target="_blank">${p.url}</a>
    </li>`;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  getProfileData(profileData);
  getSoftSkills(profileData);
  getHardSkills(profileData);
  getLanguages(profileData);
  getPortfolio(profileData);
  console.log(profileData);
})();
