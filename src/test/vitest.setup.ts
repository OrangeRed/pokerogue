import "vitest-canvas-mock";
import "#app/test/fontFace.setup";
import { initStatsKeys } from "#app/ui/game-stats-ui-handler";
import { initPokemonPrevolutions } from "#app/data/pokemon-evolutions";
import { initBiomes } from "#app/data/biomes";
import { initEggMoves } from "#app/data/egg-moves";
import { initPokemonForms } from "#app/data/pokemon-forms";
import { initSpecies } from "#app/data/pokemon-species";
import { initMoves } from "#app/data/move";
import { initAbilities } from "#app/data/ability";
import { initAchievements } from "#app/system/achv";
import { initVouchers } from "#app/system/voucher";
import { initLoggedInUser } from "#app/account";

initVouchers();
initAchievements();
initStatsKeys();
initPokemonPrevolutions();
initBiomes();
initEggMoves();
initPokemonForms();
initSpecies();
initMoves();
initAbilities();
initLoggedInUser();

global.testFailed = false;
