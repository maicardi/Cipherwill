# Cipherwill Client — Versione italiana

Il **client web open source di Cipherwill** è un'interfaccia per gestire beni digitali e predisporre disposizioni successorie digitali. Consente di organizzare informazioni digitali e materiali, cifrarle e designare beneficiari affinché possano recuperarle dopo la scomparsa del proprietario.

## Funzionalità principali

- **Codice aperto:** sviluppo trasparente e contributi della comunità.
- **Cifratura a due livelli:** secondo la documentazione del progetto, i dati vengono cifrati prima con una chiave della capsula del tempo e poi con la chiave pubblica del beneficiario. L'obiettivo è consentire la decifratura solo al destinatario autorizzato.
- **Assistenza proattiva ai beneficiari:** il team Cipherwill dichiara di poter contattare i beneficiari o persone di fiducia per aiutarli ad accedere ai dati.
- **Diversi tipi di beni:** wallet di criptovalute, NFT, account social, documenti legali, direttive personali e altre informazioni digitali o materiali.
- **Capsula del tempo:** funzione che mantiene cifrati i dati fino al momento o all'evento previsto, per programmare messaggi, istruzioni o altri contenuti.

## Fattori di sicurezza supportati

Per la cifratura end-to-end:

- **Password principale:** utilizzata insieme a un nonce per derivare una coppia di chiavi pubblica/privata.
- **MetaMask:** firma di un nonce usata come materiale iniziale per derivare la coppia di chiavi.
- **Passkey:** autenticazione senza password basata su chiavi crittografiche.

## Contribuire al progetto

Idee, suggerimenti e proposte di miglioramento possono essere inviati a [contribute@cipherwill.com](mailto:contribute@cipherwill.com). Il team valuterà le richieste e potrà integrarle nel client web.

## Sicurezza

La protezione dei dati è una priorità del progetto. Se individui una vulnerabilità o hai dubbi sulla sicurezza dell'applicazione, scrivi a [security@cipherwill.com](mailto:security@cipherwill.com).

## Comunità e contatti

- **Sito ufficiale:** [cipherwill.com](https://www.cipherwill.com)
- **X (Twitter):** [@CipherwillHQ](https://x.com/CipherwillHQ)
- **YouTube:** [Cipherwill](https://www.youtube.com/@CipherwillHQ)
- **Assistenza:** [support@cipherwill.com](mailto:support@cipherwill.com)

## Stato della traduzione italiana

Questo file è la traduzione del README originale. Il repository contiene il **client web**, non necessariamente tutti i servizi di backend necessari al funzionamento. La traduzione dell'interfaccia è **parziale e incrementale**: sono localizzate le aree principali, ma possono rimanere testi in inglese.

Per abilitare i testi italiani già disponibili, imposta `NEXT_PUBLIC_CIPHERWILL_LOCALE=it` **prima della build** di Next.js e ricompila. L'impostazione predefinita resta `en`, quindi il comportamento del progetto originale non cambia.

Consulta [LOCALIZZAZIONE_IT.md](docs/LOCALIZZAZIONE_IT.md) per dettagli e limiti.
