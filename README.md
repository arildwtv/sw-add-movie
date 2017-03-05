# Star Wars: Add Movie

## Oppstart

Kjør `npm install` og deretter `npm start`.

## State

Denne app-en har følgende state-tre:

```js
{
  preview: true/false // Hvorvidt filmen skal forhåndsvises
  movie: {
    title: '', // Tittel på filmen
    synopsis: '', // Sammendrag av filmen
    starringCharacters: [ // Karakterer som er med i filmen
      {
        url: '', // Karakterens URL i SWAPI
        name: '', // Karakterens navn
        imageUrl: '' // Karakterens bilde-URL
      }
    ]
  },
  characterPickList: [ // Hele karakter-registeret (ferdig populert)
  	{} // Se karakter-objekt over
  ]
}
```

## Actions

Denne app-en har følgende actions:

* `TITLE_CHANGED` - Når tittelen endrer seg. Payload er tittel.
* `SYNOPSIS_CHANGED` - Når sammendraget endrer seg. Payload er sammendraget.
* `CHARACTER_ADDED` - Når karakter er lagt til filmen. Payload er karakter-objektet.
* `CHARACTER_REMOVED` - Når karakter er fjernet fra filmen. Payload er karakter-objektet.
* `PREVIEW_ACTIVATED` - Når forhåndsvisning er aktivert.
* `PREVIEW_DEACTIVATED` - Når forhåndsvisning er deaktivert.

## Oppgave

I denne oppgaven skal vi bruke React bindings for å gi React-komponentene våre data fra Redux sin store.

React-komponentene og reducerne er allerede implementert. Din oppgave er å implementere de ulike containerne. Disse finner du i `containers`-mappen.

For å gi et lite referansegrunnlag har vi implementert `AppContainer` og `PreviewButtonContainer`. Se på disse som et eksempel på en måte å implementere de andre containerne på.

Som vi vet, er det to typer props vi lager: state-props og dispatch-props. For å vite hvor du skal hente state-data, se state-treet over. For å vite hvilke action-typer du skal trigge, se listen over og se gjerne på de ferdig implementerte reducerne.

Containerne du skal implementere er (i denne rekkefølgen):

1. `MoviePreviewContainer` - Den underliggende komponenten skal forhåndsvise Star Wars-filmen vår og trenger derfor props-ene `title`, `synopsis` og `starringCharacters`.
2. `CharacterPickListContainer` - Den underliggende komponenten skal vise hele det tilgjengelige karakterregisteret og trenger derfor prop-en `characterPickList`.
3. `CharacterPickListItemContainer` - Den underliggende komponenten er et punkt i plukklisten. Når du klikker på listepunktet, skal karakteren bli _lagt til_ filmen, og derfor trenger komponenten prop-en `onCharacterClicked` (action).
4. `MovieFormContainer` - Den underliggende komponenten skal la deg endre tittel, synopsis og hvilke karakterer som skal være med i filmen. Det trengs derfor props-ene `title`, `synopsis` og `starringCharacters`. Den trenger også props-ene `onTitleChanged` og `onSynopsisChanged` for å dispatche actions som oppdaterer hhv. `title` og `synopsis`.
5. `StarringCharacterListItemContainer` - Den underliggende komponenten er et punkt i listen over karakterer som er valgt. Når du klikker på listepunktet, skal karakteren bli _fjernet fra_ filmen, og derfor trenger komponenten prop-en `onCharacterClicked`.

Lykke til!
