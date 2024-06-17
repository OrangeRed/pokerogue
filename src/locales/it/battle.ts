import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} è apparso.",
  "trainerAppeared": "{{trainerName}}\nvuole combattere!",
  "trainerAppearedDouble": "{{trainerName}}\nvogliono combattere!",
  "trainerSendOut": "{{trainerName}} manda in campo\n{{pokemonName}}!",
  "singleWildAppeared": "Appare {{pokemonName}} selvatico!",
  "multiWildAppeared": "Appaiono {{pokemonName1}}\ne {{pokemonName2}} salvatici!",
  "playerComeBack": "Rientra, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} ha ritirato {{pokemonName}}!",
  "playerGo": "Vai! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} manda in campo {{pokemonName}}!",
  "switchQuestion": "Vuoi cambiare\n{{pokemonName}}?",
  "trainerDefeated": "Hai sconfitto\n{{trainerName}}!",
  "moneyWon": "Hai vinto {{moneyAmount}}₽",
  "pokemonCaught": "Preso! {{pokemonName}} è stato catturato!",
  "partyFull": "La tua squadra è al completo.\nVuoi liberare un Pokémon per far spazio a {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Vai! {{pokemonName}}!",
  "hitResultCriticalHit": "Brutto colpo!",
  "hitResultSuperEffective": "È superefficace!",
  "hitResultNotVeryEffective": "Non è molto efficace…",
  "hitResultNoEffect": "Non ha effetto su {{pokemonName}}!",
  "hitResultOneHitKO": "KO con un colpo!",
  "attackFailed": "Ma ha fallito!",
  "attackHitsCount": "Colpito {{count}} volta/e!",
  "expGain": "{{pokemonName}} ha guadagnato\n{{exp}} Punti Esperienza!",
  "levelUp": "{{pokemonName}} è salito al\nlivello {{level}}!",
  "learnMove": "{{pokemonName}} impara\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} vorrebbe imparare\n{{moveName}}.",
  "learnMoveLimitReached": "Tuttavia, {{pokemonName}}\nconosce già quattro mosse.",
  "learnMoveReplaceQuestion": "Vuoi che ne dimentichi una e al suo\nposto apprenda {{moveName}}?",
  "learnMoveStopTeaching": "Vuoi smettere di fargli imparare\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} non ha imparato\n{{moveName}}.",
  "learnMoveForgetQuestion": "Quale mossa deve dimenticare?",
  "learnMoveForgetSuccess": "{{pokemonName}} ha dimenticato la mossa\n{{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}e@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}ta-daaaa!",
  "learnMoveAnd": "E…",
  "levelCapUp": "Il livello massimo\nè aumentato a {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} non è ancora implementata e non può essere selezionata.",
  "moveNoPP": "Non ci sono PP rimanenti\nper questa mossa!",
  "moveDisabled": "{{moveName}} è disabilitata!",
  "noPokeballForce": "Una forza misteriosa\nimpedisce l'uso dell Poké Ball.",
  "noPokeballTrainer": "Non puoi catturare\nPokémon di altri allenatori!",
  "noPokeballMulti": "Puoi lanciare una Poké Ball\nquando rimane un solo Pokémon!",
  "noPokeballStrong": "Il Pokémon avversario è troppo forte per essere catturato!\nDevi prima indebolirlo!",
  "noEscapeForce": "Una forza misteriosa\nimpedisce la fuga.",
  "noEscapeTrainer": "Non puoi sottrarti\nalla lotta con un'allenatore!",
  "noEscapePokemon": "{{moveName}} di {{pokemonName}}\npreviene la {{escapeVerb}}!",
  "runAwaySuccess": "Scampato pericolo!",
  "runAwayCannotEscape": "Non puoi fuggire!",
  "escapeVerbSwitch": "cambiando",
  "escapeVerbFlee": "fuggendo",
  "notDisabled": "{{pokemonName}}'s {{moveName}} non è più\ndisabilitata!",
  "skipItemQuestion": "Sei sicuro di non voler prendere nessun oggetto?",
  "eggHatching": "Oh!",
  "ivScannerUseQuestion": "Vuoi usare lo scanner di IV su {{pokemonName}}?",
  "wildPokemonWithAffix": "{{pokemonName}} selvatico",
  "foePokemonWithAffix": "{{pokemonName}} avversario",
  "useMove": "{{pokemonNameWithAffix}} usa {{moveName}}!",
  "drainMessage": "Viene prelevata energia\n da{{pokemonName}}!",
  "regainHealth": "{{pokemonName}} ha rigenerato\npunti salute!",
  "fainted": "{{pokemonNameWithAffix}} non è più in\ngrado di combattere!",
  "statRose": "rose",
  "statSharplyRose": "sharply rose",
  "statRoseDrastically": "rose drastically",
  "statWontGoAnyHigher": "won't go any higher",
  "statFell": "fell",
  "statHarshlyFell": "harshly fell",
  "statSeverelyFell": "severely fell",
  "statWontGoAnyLower": "won't go any lower",
  "ppReduced": "It reduced the PP of {{targetName}}'s\n{{moveName}} by {{reduction}}!",
} as const;
