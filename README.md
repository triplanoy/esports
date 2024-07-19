# Triplan Esports Documentation

This repository contains the documentation for Triplan Esports, including match reports and season recaps. The documentation is built with VitePress and deployed to GitHub Pages.

## Writing Match Reports

Match reports are written in Markdown and stored in the `posts/match-reports` directory. Each match report should be in its own file.

The naming convention for match report files is `team_date.md`, where:

- `team` is the name of the team, with spaces replaced by hyphens (e.g., `team-name`).
- `date` is the date of the match, in the format `YYYYMMDD` (e.g., `20220101` for January 1, 2022).

For example, a match report against the team "Triplan" on January 1, 2022, would be named `triplan_20220101.md`.

Each match report file should start with a frontmatter section, which contains metadata about the match. The frontmatter section is enclosed in triple-dashed lines (`---`) and contains the following attributes:

- `title`: The title of the match report.
- `lang`: The language of the match report (e.g., `fi-FI` for Finnish).
- `league`: The league in which the match took place.
- `score1`: The score of the first team.
- `score2`: The score of the second team.
- `team1`: The name of the first team.
- `team2`: The name of the second team.
- `datetime`: The date and time of the match, in the format `DD.MM.YYYY HH:mm`.
- `maps`: A list of the maps that were played in the match.

Here's an example of a frontmatter section for a match report:

```yaml
---
title: 'Triplan eSports vs ALM Partners Luottotappio'
lang: fi-FI
league: 'Kanaliiga CS2 Season 1 Div 5'
score1: '1'
score2: '2'
team1: 'Triplan eSports'
team2: 'ALM Partners Luottotappio'
datetime: '23.4.2023 19:00'
maps: ['de_nuke', 'de_ancient', 'de_overpass']
---
```

## Writing Season Recaps

Season recaps are also written in Markdown and stored in the `posts/season-recaps` directory. Each season recap should be in its own file.

The naming convention for season recap files is `league-season.md`, where:

- `league` is the name of the league, with spaces replaced by hyphens (e.g., `league-name`).
- `season` is the season number.

For example, a season recap for the first season of the "Kanaliiga CS2" league would be named `kanaliiga-cs2-season-1.md`.

## Building and Deploying

To build and deploy the documentation, run the following commands:

```bash
npm ci
npm run docs:build
```
