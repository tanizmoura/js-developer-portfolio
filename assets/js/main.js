async function createProfile() {
    const profileInformation = {
    name: document.getElementById('name'),
    job: document.getElementById('job'),
    location: document.getElementById('location'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    skills: document.getElementById('skills'),
    softSkills: document.getElementById('soft-skills'),
    languages: document.getElementById('languages'),
    portfolio: document.getElementById('portfolio'),
    education: document.getElementById('education')
    }

    return profileInformation
}

async function showBasicInformations(profileInformation, profileData) {
    profileInformation.name.innerText = `Olá, \n eu sou ${profileData.nome}`
    profileInformation.job.innerText = `${profileData.titulo}`
    profileInformation.location.innerText = `${profileData.localidade.cidade} - ${profileData.localidade.estado}`
    profileInformation.phone.innerText = `(${profileData.telefone.ddd}) ${profileData.telefone.numero}`
    profileInformation.phone.href = `https://wa.me/55${profileData.telefone.ddd}${profileData.telefone.numero}`
    profileInformation.email.innerText = `${profileData.email}`
    profileInformation.email.href = `mailto:${profileData.email}`
}

async function showSoftSkills(profileInformation, profileData) {
    const softSkills = profileData.skills.softSkills
    softSkills.forEach(skill => {
        let li = document.createElement('li')
        li.innerText = skill
        profileInformation.softSkills.appendChild(li)
    });
}

async function showLanguages(profileInformation, profileData) {
    const languages = profileData.idiomas
    languages.forEach(language => {
        let li = document.createElement('li')
        li.innerText = `${language.nome} (${language.nivel})`
        profileInformation.languages.appendChild(li)
    });
}

async function showPortfolio(profileInformation, profileData) {
    profileInformation.portfolio.innerHTML = profileData.portfolio.map((item) =>
        `<h3>${item.nome}</h3> 
        <p>${item.descricao}</p>
        <a href="${item.gitHub}">Repositório</a>
        <a href="${item.site}">Site no ar</a>
        `
    ).join('')
    console.log(profileData.portfolio)
}

async function showEducation(profileInformation, profileData) {
    profileInformation.education.innerHTML = profileData.portfolio.map((item) =>
        `<h3>${item.nome}</h3> 
        <p>${item.descricao}</p>
        <a href="${item.gitHub}">Repositório</a>
        <a href="${item.site}">Site no ar</a>
        `
    ).join('')
    console.log(profileData.portfolio)
}

(async () => {
    const profileData = await fetchProfileData()
    const profileInformation = await createProfile()

    await showBasicInformations(profileInformation, profileData)
    await showSoftSkills(profileInformation, profileData)
    await showLanguages(profileInformation, profileData)
    await showPortfolio(profileInformation, profileData)
    await showEducation(profileInformation, profileData)
    


})()




