const LinksSocialMedia = {
  github: 'MatheusRodriigues',
  instagram: 'z.mattheus',
  twitter: 'xtheusma_',
  linkedin: 'matheus-rodrigues-376b07223'
}

function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    if (social == 'linkedin') {
      li.children[0].href = `https://${social}.com/in/${LinksSocialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }
}

ChangeSocialMediaLinks()

function GetGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

GetGithubProfileInfos()
