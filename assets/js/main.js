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
    education: document.getElementById('education'),
    photo: document.getElementById('photo')
    }

    return profileInformation
}

async function showBasicInformations(profileInformation, profileData) {
    profileInformation.name.innerText = `Olá, \n eu sou ${profileData.nome}`
    profileInformation.job.innerText = profileData.titulo
    profileInformation.location.innerText = `${profileData.localidade.cidade} - ${profileData.localidade.estado}`
    profileInformation.phone.innerText = `(${profileData.telefone.ddd}) ${profileData.telefone.numero}`
    profileInformation.phone.href = `https://wa.me/55${profileData.telefone.ddd}${profileData.telefone.numero}`
    profileInformation.email.innerText = profileData.email
    profileInformation.email.href = `mailto:${profileData.email}`
    profileInformation.photo.src = profileData.photo
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
        `<li><h3>${item.nome}</h3> 
        <img src="${item.img}" class="portfolio-img" alt="${item.img}">
        <p>${item.descricao}</p>
        <a href="${item.gitHub}">Repositório</a>
        <a href="${item.site}">Site no ar</a></li>
        `
    ).join('')
}

async function showSkills(profileInformation, profileData) {
    profileInformation.skills.innerHTML = profileData.skills.hardSkills.map((item) =>
        ` <li><img src="${item.logo}" alt="${item.nome}" title="${item.nome}"></li>
        `
    ).join('')
}

function showCertification(item) {
    const certificados = item.map((certificado) => `<a href="${certificado.link}">${certificado.nome}</a>`)
    return certificados.join('')
}

async function showEducation(profileInformation, profileData) {
    profileInformation.education.innerHTML = profileData.educacao.map((item) =>
        `<h3>${item.nome}</h3>
        <span>${item.instituicao}</span>
        <span>Período: ${item.periodo.inicio} - ${item.periodo.fim}</span>
        ${item.certificados ? `<h4>Certificados</h4> ${showCertification(item.certificados)}` : ``}     `
    ).join('')
}


(async () => {
    const profileData = await fetchProfileData()
    const profileInformation = await createProfile()

    await showBasicInformations(profileInformation, profileData)
    await showSoftSkills(profileInformation, profileData)
    await showLanguages(profileInformation, profileData)
    await showPortfolio(profileInformation, profileData)
    await showEducation(profileInformation, profileData)
    await showSkills(profileInformation, profileData)
    


})()




