# Localizzazione italiana — stato e istruzioni

La localizzazione viene aggiunta in modo incrementale e **non è ancora completa**. Non va confusa con la traduzione di tutto il codice sorgente: vengono tradotte le stringhe visibili, lasciando invariati identificativi, route, query GraphQL, dati persistenti e nomi di variabili.

## Abilitare l'italiano

Impostare `NEXT_PUBLIC_CIPHERWILL_LOCALE=it` nell'ambiente utilizzato per la **build Next.js**; poi ricompilare. Per tornare all'inglese, omettere la variabile o impostarla a `en` e ricompilare.

```bash
NEXT_PUBLIC_CIPHERWILL_LOCALE=it yarn build
```

In Docker, passare la variabile durante la build dell'immagine (non soltanto all'avvio del container), perché Next.js incorpora le variabili pubbliche nel bundle client.

## Cosa è stato localizzato nella prima fase

- Documentazione README in italiano.
- Navigazione pubblica e del pannello, menu del profilo.
- Pagina iniziale pubblica e testi introduttivi.
- Accesso, registrazione e recupero password.
- Dashboard: saluto, onboarding e alcuni indicatori.
- Beneficiari: pagina principale e stati semplici.
- Impostazioni: navigazione delle schede, aspetto, preferenze e azioni amministrative.

## Cosa resta da tradurre

Molte sezioni interne, form, pagine informative, pagine legali, email automatiche, messaggi generati dal backend e parte dell'onboarding non sono ancora localizzati. La dicitura «italiano disponibile» non implica che ogni schermata sia tradotta.

## Come aggiungere una traduzione

La funzione `t(english)` in `common/i18n.ts` utilizza una mappa inglese→italiano e restituisce la stringa originale come fallback. Importare `t` in un componente, per esempio:

```tsx
import { t } from "@/common/i18n";
<h1>{t("Settings")}</h1>
```

Conservare le route e i valori utilizzati dalle API in inglese. Non tradurre identificativi tecnici persistenti o stringhe adoperate come chiavi di business logic. Evitare di inviare a servizi esterni dati riservati per tradurli.

## Verifiche consigliate

Eseguire lint, build e test nella configurazione del progetto, sia con lingua inglese sia con lingua italiana. Controllare soprattutto la pagina di accesso, la dashboard, i beneficiari e le impostazioni. Su questa modifica non è stata ancora eseguita una build completa nell'ambiente di sviluppo dell'utente.
