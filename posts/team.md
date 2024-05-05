---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const discordIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/></svg>';

const steamIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-steam" viewBox="0 0 16 16"><path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"/><path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048"/></svg>';

const members = [
  {
    avatar: 'https://avatars.cloudflare.steamstatic.com/ebbc472c31bcad04634a877483518056eb8de23b_full.jpg',
    name: 'mAhla',
    title: 'Kapteeni',
    links: [
      // { icon: { svg: discordIcon }, link: '' },
      { icon: { svg: steamIcon, link: ''} },
    ]
  },
  {
    avatar: 'https://avatars.cloudflare.steamstatic.com/200d73b2a51b00daee8ce4eec6187cc13394dbf3_full.jpg',
    name: 'neivi',
    links: [
      // { icon: { svg: discordIcon }, link: 'https://github.com/yyx990803' },
      { icon: { svg: steamIcon, link: ''} },
    ]
  },
  {
    avatar: 'https://avatars.cloudflare.steamstatic.com/926a7b22a538f0d7cf53a0462fe6e140eab5a546_full.jpg',
    name: 'multimarko',
     links: [
      // { icon: { svg: discordIcon }, link: 'https://github.com/yyx990803' },
      { icon: { svg: steamIcon, link: ''} },
    ]
  },
  {
    avatar: 'https://avatars.cloudflare.steamstatic.com/2c1532cf6ee9984523440ac07585a99dd44adca5_full.jpg',
    name: 'Mehis',
    links: [
      // { icon: { svg: discordIcon }, link: 'https://github.com/yyx990803' },
      { icon: { svg: steamIcon, link: ''} },
    ]
  },
  {
    avatar: 'https://avatars.cloudflare.steamstatic.com/5b03c6ffcfb8af6cffa96c64778e976adc853f57_full.jpg',
    name: 'F4tGuyHat',
    links: [
      // { icon: { svg: discordIcon }, link: 'https://github.com/yyx990803' },
      { icon: { svg: steamIcon, link: ''} },
    ]
  },
  {
    avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1442870/5c6d12fe965d46def2989e9fb74fc0b100765258.gif',
    name: 'SANTTU8D',
    links: [
      // { icon: { svg: discordIcon }, link: 'https://github.com/yyx990803' },
      { icon: { svg: steamIcon, link: ''} },
    ]
  },
  {
    avatar: 'https://avatars.cloudflare.steamstatic.com/f16f128b3074698d67c528ff5f2d01ee704174e3_full.jpg',
    name: 'Jonukki',
    links: [
      // { icon: { svg: discordIcon }, link: 'https://github.com/yyx990803' },
      { icon: { svg: steamIcon, link: ''} },
    ]
  },
  {
    avatar: 'https://avatars.cloudflare.steamstatic.com/ccc0c5d5fd041afc51f2ffdf24ae49359683802b_full.jpg',
    name: 'FoxyGuyHere',
    links: [
      // { icon: { svg: discordIcon }, link: 'https://github.com/yyx990803' },
      { icon: { svg: steamIcon, link: ''} },
    ]
  },
]
</script>

<VPTeamPage style="margin-top: 0px">
  <VPTeamPageTitle style="padding-bottom: 5px">
    <template #title>
      Meet The Team
    </template>
    <template #lead>
      Vuonna 2021 perustettu joukkue on kisannut Kanaliigan järjestämässä CS-turnauksessa joka vuosi ja koostuu seuraavista jäsenistä
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection style="margin-top: 0px">
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
