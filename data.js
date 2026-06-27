/* ============================================================
   Grounded — extracted data
   ------------------------------------------------------------
   Self-hosted. No fandom assets are loaded at runtime.
   Each entry: { n: name, w: wiki-slug (for the ↗ reference link),
                 meta: short stat/desc string shown under the name }
   Icons are generated locally from the first letter (CSS).
   Wiki text is CC-BY-SA (Grounded Wiki). Reference links point
   back to the source page for each item.
   ============================================================ */

const WIKI = "https://grounded.fandom.com/wiki/";

const GROUNDED_DATA = {
  meta: {
    version: "1.4 — Fully Yoked (April 16, 2024)",
    updated: "Biomes, Creatures, Tools & Weapons, Armor, Trinkets, Quests, and all 41 Mutations complete."
  },

  categories: [
    /* ---------------- BIOMES ---------------- */
    {
      id: "biomes",
      title: "Biomes",
      blurb: "Unique environments scattered throughout the Backyard. The yard is split into the lower yard (where you start) and the late-game Upper Yard, which holds far stronger creatures and resources.",
      wiki: "Biomes",
      groups: [
        {
          name: "Surface Biomes",
          items: [
            { n: "BBQ Spill", w: "BBQ_Spill", meta: "Notable: EverChar Coal Chunk · Landmark: Charcoal Hot Springs" },
            { n: "Flooded Zone", w: "Flooded_Zone", meta: "Notable: Clay · Landmarks: Garden Gnome, La Bise Can, Rash, Squirts Carton" },
            { n: "Flower Bed", w: "Flower_Bed", meta: "Notable: Flower Petal, Nectar · Landmarks: Armed Raspberry Punch-O, Field Station, Welp Flavordrink" },
            { n: "Grasslands", w: "Grasslands", meta: "Notable: Mint Shard, Rotten Larva Blade · Many landmarks (Baseball, Frankenline, MIX.R, Mysterious Machine, Upper Yard Ascent…)" },
            { n: "Haze", w: "Haze", meta: "Notable: Brittle Marble/Quartzite Shard, Fungal Growth, Mint Shard · Landmarks: Haze Lab, MIX.R, Peach Fuzz Punch-O" },
            { n: "Hedge", w: "Hedge", meta: "Notable: Berry Chunk · Landmarks: Hedge Lab, Hedge Ascent, Flingman Flying Disc, MIX.R" },
            { n: "Koi Pond", w: "Koi_Pond", meta: "Notable: Eelgrass Strand, Lilypad Wax, Raw Tadpole Meat, Water Boatman Fin · Landmarks: Depths Mouth, Sunken Pot, Wedding Ring" },
            { n: "Moldorc Highlands", w: "Moldorc_Highlands", meta: "Notable: Pond Moss, Tiger Mosquito Beak · Landmarks: Castle Moldorc Playset, Mysterious Lab, MIX.R" },
            { n: "Oak Hill", w: "Oak_Hill", meta: "Notable: Acorn Bits, Acorn Shell, Acorn Top · Landmarks: Oak Lab, Old Ant Hill" },
            { n: "Picnic Table", w: "Picnic_Table", meta: "Notable: Crusty Roly Poly Legplates, Gum Nugget · Landmarks: Cooler Box, Minotaur Maze's End" },
            { n: "Sandbox", w: "Sandbox", meta: "Notable: Antlion Part/Pincer, Spicy Shard · Landmarks: Sandbox Lab Outpost, Black Anthill Descent, MIX.R" },
            { n: "Shed Surroundings", w: "Shed_Surroundings", meta: "Notable: Candy Cornlet, Dust Mite Fuzz, Gunpowder Clump, Twinkling Shell · Landmarks: Buster Cap Gun, Full-Sized SCA.B" },
            { n: "Trash Heap", w: "Trash_Heap", meta: "Notable: Crusty Roly Poly Helmet, Rotten Food, Spicy Shard · Landmarks: Trashed AARTZ 3000, Crushed La Bise Can" },
            { n: "Upper Grasslands", w: "Upper_Grasslands", meta: "Notable: Black Ox Horn/Part, Fire Ant Head/Part, Moth Fuzz/Scale, Tick Fang · Landmarks: JavaMatic, Lawnmower, Stump" },
            { n: "Woodpile", w: "Woodpile", meta: "Notable: Wooden Splinter · Landmark: Field Station" }
          ]
        },
        {
          name: "Underground Biomes",
          items: [
            { n: "Anthills", w: "Anthills", meta: "Notable: Ant Eggs & Mandibles (Black/Red/Fire), Marble/Quartzite Shards · Landmark: Black Anthill Lab" },
            { n: "Antlion Burrows", w: "Antlion_Burrows", meta: "Notable: Crusty Roly Poly Breastplate, Salt Shard" },
            { n: "Brawny Boy Bin", w: "Brawny_Boy_Bin", meta: "Notable: Wasp Paper · Landmarks: Wasp Nest, Large Disassembled TAYZ.T" },
            { n: "Caverns", w: "Caverns", meta: "Notable: Rotten Red Ant Club · Landmark: Field Station" },
            { n: "Pond Caves", w: "Pond_Caves", meta: "Notable: Rotten Fin Flops" },
            { n: "Pond Depths", w: "Pond_Depths", meta: "Notable: Koi Fish Scale, Rotten Stinger Spear, Sunken Bone · Landmarks: Pond Lab, Sunken T-Rex" },
            { n: "Spider Caves", w: "Spider_Caves", meta: "Notable: Web Fiber" },
            { n: "Termite Den", w: "Termite_Den", meta: "Notable: Sturdy Marble/Quartzite Shard, Termite Chompers, Termite King Carapace, Termite Part" },
            { n: "Undershed", w: "Undershed", meta: "Notable: Lint · Landmarks: Undershed Lab, Undershed Sinkhole" },
            { n: "Upper Yard Caverns", w: "Upper_Yard_Caverns", meta: "Late-game cavern network beneath the Upper Yard" }
          ]
        }
      ]
    }

,

    /* ---------------- CREATURES ---------------- */
    {
      id: "creatures",
      title: "Creatures",
      blurb: "The friends and foes of the Backyard. Passive creatures flee, neutral ones defend themselves if provoked, and hostile ones attack on sight. Bosses offer the toughest challenges — 3 story bosses and 4 optional, repeatable ones. New Game+ adds Infected variants (listed under Angry) and Tier-4 boss rematches dropping Infused Ooze.",
      wiki: "Creatures",
      groups: [
        {
          name: "Harmless",
          items: [
            { n: "Aphid", w: "Aphid", meta: "Flower Bed, Flooded Zone, Grasslands, Hedge, Oak Hill, Upper Grasslands · Loot: Aphid Honeydew, Raw Aphid Meat, Speed Droplet (steal)" },
            { n: "Weevil", w: "Weevil", meta: "Flooded Zone, Grasslands, Hedge, Oak Hill, Upper Grasslands · Loot: Mushroom Chunk, Raw Weevil Meat, Weevil Nose" },
            { n: "Grub", w: "Grub", meta: "Caverns, Grasslands, Oak Hill, Shed Surroundings, Spider Caves · Loot: Grub Sludge, Grub Hide, Raw Grub Meat" },
            { n: "Gnat", w: "Gnat", meta: "Grasslands, Flooded Zone, Moldorc Highlands, Oak Hill, Undershed, Upper Grasslands · Loot: Gnat Fuzz, Raw Gnat Meat, food bits" },
            { n: "Meaty Gnat", w: "Meaty_Gnat", meta: "Trash Heap · Loot: Candy Cornlet, Donut Chunk, Gnat Fuzz, Raw Gnat Meat" },
            { n: "Tadpole", w: "Tadpole", meta: "Koi Pond · Loot: Algae, Lilypad Wax, Raw Tadpole Meat" },
            { n: "Water Boatman", w: "Water_Boatman", meta: "Koi Pond · Loot: Algae, Water Boatman Fin" },
            { n: "Scarab", w: "Scarab", meta: "Grasslands, Shed Surroundings, Termite Den, Undershed, Woodpile · Loot: Twinkling Shell" },
            { n: "Red Ant Queen", w: "Red_Ant_Queen", meta: "Red Anthill · Loot: Queen Chunk, Head, Pheromone" },
            { n: "Black Ant Queen", w: "Black_Ant_Queen", meta: "Black Anthill · Loot: Queen Chunk, Head, Pheromone" },
            { n: "Fire Ant Queen", w: "Fire_Ant_Queen", meta: "Fire Anthill · Loot: Queen Chunk, Head, Pheromone" },
            { n: "Baby Red Ant", w: "Baby_Red_Ant", meta: "Feed Red Ant Queen a Juicy Mushroom Sandwich" },
            { n: "Baby Black Ant", w: "Baby_Black_Ant", meta: "Feed Black Ant Queen a Yummy Gum Sandwich" },
            { n: "Baby Fire Ant", w: "Baby_Fire_Ant", meta: "Feed Fire Ant Queen a Tasty Toejam Sandwich" },
            { n: "Crow", w: "Crow", meta: "Varies · Loot: Crow Feather, Crow Feather Piece" }
          ]
        },
        {
          name: "Neutral",
          items: [
            { n: "Red Worker Ant", w: "Red_Worker_Ant", meta: "Red/Abandoned Anthill, Grasslands, Flower Bed, Oak Hill · Loot: Red Ant Egg, Head, Part" },
            { n: "Black Worker Ant", w: "Black_Worker_Ant", meta: "Black Anthill, Picnic Table, Sandbox, Shed, Trash Heap, Undershed, Grasslands · Loot: Black Ant Egg, Head, Part" },
            { n: "Ladybug", w: "Ladybug", meta: "Grasslands, Flower Bed, Oak Hill · Loot: Ladybug Head, Ladybug Part" },
            { n: "Bee", w: "Bee", meta: "Picnic Table; sparse elsewhere · Loot: Bee Fuzz, Bee Stinger" },
            { n: "Firefly", w: "Firefly", meta: "Flooded Zone & Flower Bed (night) · Loot: Giddy Goop, Glow Goo, Iridescent Scale" },
            { n: "Sickly Roly Poly", w: "Sickly_Roly_Poly", meta: "Western Grasslands · Loot: Roly Poly Part, Tough Gunk" },
            { n: "Roly Poly", w: "Roly_Poly", meta: "Grasslands, Shed, Undershed, MIX.R sites · Loot: Roly Poly Part, Shell, Tough Gunk" },
            { n: "Moth", w: "Moth", meta: "Moldorc Highlands, Upper Grasslands · Loot: Moth Fuzz, Moth Scale" }
          ]
        },
        {
          name: "Angry",
          items: [
            { n: "Red Soldier Ant", w: "Red_Soldier_Ant", meta: "Anthills, Grasslands, MIX.R · Loot: Acid Gland, Red Ant Head/Mandibles/Part · Neutral with full Red Ant Armor or Antbassador" },
            { n: "Black Soldier Ant", w: "Black_Soldier_Ant", meta: "Black Anthill, Shed, Trash Heap, MIX.R · Loot: Black Ant Head/Mandibles/Part" },
            { n: "Fire Worker Ant", w: "Fire_Worker_Ant", meta: "Fire Anthill, Upper Grasslands, labs, MIX.R · Loot: Fire Ant Egg/Head/Part" },
            { n: "Fire Soldier Ant", w: "Fire_Soldier_Ant", meta: "Fire Anthill, Upper Grasslands, Mant fight · Loot: Fire Ant Head/Mandibles/Part" },
            { n: "Lawn Mite", w: "Lawn_Mite", meta: "Grasslands, Flooded Zone, Caverns · Loot: Mite Fuzz" },
            { n: "Dust Mite", w: "Dust_Mite", meta: "Shed Surroundings, Undershed · Loot: Dust Mite Fuzz" },
            { n: "Larva", w: "Larva", meta: "Grasslands, Flooded Zone, Caverns, MIX.R · Loot: Acid Gland, Larva Spike" },
            { n: "Ladybird Larva", w: "Ladybird_Larva", meta: "BBQ Spill, Moldorc Highlands, Upper Grasslands · Loot: Acid Gland, Insulating Larva Spike, Tough Gunk" },
            { n: "Water Flea", w: "Water_Flea", meta: "Exposed Pipe, Flooded Zone, Koi Pond · Loot: Algae, Water Flea Meat" },
            { n: "Mosquito", w: "Mosquito", meta: "Flooded Zone, Flower Bed, Undershed, Woodpile · Loot: Mosquito Beak, Mosquito Blood Sack" },
            { n: "Stinkbug", w: "Stinkbug", meta: "Grasslands, Flower Bed · Loot: Stinkbug Gas Sack, Stinkbug Part" },
            { n: "Bombardier Beetle", w: "Bombardier_Beetle", meta: "Flooded Zone, Grasslands · Loot: Boiling Gland, Bombardier Part" },
            { n: "Spiderling", w: "Spiderling", meta: "Grasslands, Hedge, Spider Caves, Woodpile · Loot: Spider Chunk, Web Fiber" },
            { n: "Orb Weaver Jr", w: "Orb_Weaver_Jr", meta: "Grasslands, Hedge, Flooded Zone, labs · Loot: Spider Chunk, Web Fiber" },
            { n: "Orb Weaver", w: "Orb_Weaver", meta: "Flooded Zone, Flower Bed, Grasslands, Hedge, Spider Caves, Upper Grasslands · Loot: Spider Chunk, Web Fiber" },
            { n: "Wolf Spider", w: "Wolf_Spider", meta: "Grasslands, Oak Hill, Sandbox, Shed, Spider Caves, Undershed, Woodpile · Loot: Spider Chunk, Fang, Venom" },
            { n: "Diving Bell Spider", w: "Diving_Bell_Spider", meta: "Exposed Pipe, Koi Pond, Pond Caves/Depths/Lab · Loot: Diving Bell Spider Chunk, Web Fiber" },
            { n: "Antlion", w: "Antlion", meta: "Antlion Burrows, Sandbox, MIX.R · Loot: Antlion Part, Antlion Pincer" },
            { n: "RUZ.T", w: "RUZ.T", meta: "Hedge Lab & Outpost · Loot: Raw Science" },
            { n: "TAYZ.T", w: "TAYZ.T", meta: "Labs & outposts · Loot: Raw Science, Unstable Capacitor" },
            { n: "ARC.R", w: "ARC.R", meta: "Assistant Manager fight, Pond Lab · Loot: Raw Science" },
            { n: "Infected Weevil", w: "Infected_Weevil", meta: "Haze, Grasslands (post Weed Killer) · Loot: Fungal Growth, Mushroom Chunk, Weevil Nose" },
            { n: "Infected Mite", w: "Infected_Mite", meta: "Haze, Flower Bed (post Weed Killer) · Loot: Fungal Growth, Mite Fuzz" },
            { n: "Infected Ladybug", w: "Infected_Ladybug", meta: "Haze, Grasslands/Flower Bed/Upper Grasslands (post Weed Killer) · Loot: Fungal Growth, Ladybug Head/Part" },
            { n: "Infected Larva", w: "Infected_Larva", meta: "Haze & many biomes post Weed Killer · Loot: Acid Gland, Fungal Growth, Larva Spike" },
            { n: "Infected Gnat", w: "Infected_Gnat", meta: "Haze, Grasslands/Flower Bed (post Weed Killer) · Loot: Fungal Growth, Gnat Fuzz, Raw Gnat Meat" }
        ]
        },
        {
          name: "Bosses",
          items: [
            { n: "Assistant Manager", w: "Assistant_Manager", meta: "Story boss · End of Black Anthill Lab · Robotic boss; summons TAYZ.T & ARC.R · Loot: Raw Science" },
            { n: "Mant", w: "Mant", meta: "Story boss · Undershed Lab (needs all 4 Super BURG.L Chips) · Weak to Fresh — bring Mint weapons" },
            { n: "Wasp Queen", w: "Wasp_Queen", meta: "Story boss · Wasp Nest in Brawny Boy Bin (Upper Yard) · Summon via Bee Bee Q Medley · Loot: Wasp Queen Wing/Chunk" },
            { n: "Hedge Broodmother", w: "Hedge_Broodmother", meta: "Optional, repeatable · Burrow near Hedge Lab/Flingman Disc · Poison; summons Spiderlings · Loot: Broodmother Fang/Venom/Chunk" },
            { n: "Mantis", w: "Mant", meta: "Optional, repeatable · Orchid pot on Shed porch · Summon via Orchid Mantis Kebab · Loot: Mantis Claw/Chunk" },
            { n: "Director Schmector", w: "Director_Schmector", meta: "Optional secret boss · Mysterious Lab below Castle Moldorc · Final boss; required for the good ending" },
            { n: "Infected Broodmother", w: "Infected_Broodmother", meta: "Optional, repeatable · Spider cave in the Haze (seal Haze Canister, summon w/ Moldy Hoagie) · Poison + Venom damage" },
            { n: "Black Widow", w: "Black_Widow", meta: "Toughest non-boss creature · Upper Yard · Stacking venom · Loot: Black Widow Fang, Super Spider Venom" }
          ]
        }
      ]
    },

    /* ---------------- TOOLS & WEAPONS ---------------- */
    {
      id: "tools",
      title: "Tools & Weapons",
      blurb: "Craftable tools for combat and utility. Each belongs to a category that sets its damage type. Stats below are Damage / Stun / Speed where applicable. Most melee tools use a 3-hit combo (100/100/125%).",
      wiki: "Tools",
      groups: [
        {
          name: "Melee",
          items: [
            { n: "Mint Mace", w: "Mint_Mace", meta: "T3 · Fresh · 100/100/125 · Stun 20 · Slow · Buy from ASL Terminal" },
            { n: "Club of the Mother Demon", w: "Club_of_the_Mother_Demon", meta: "T3 · 105/105/131 · Slow · Analyze Broodmother Fang" },
            { n: "Antlion Greatsword", w: "Antlion_Greatsword", meta: "T3 · 83/83/104 · Average · Analyze Antlion Pincer / BP 11" },
            { n: "Salt Morning Star", w: "Salt_Morning_Star", meta: "T3 · Salty · 55/55/69 · Average · Water Logged Recipe" },
            { n: "Spicy Coaltana", w: "Spicy_Coaltana", meta: "T3 · Spicy · 85/85/106 · Average · Defend the Flaming Sword (EverChar Coal Bag)" },
            { n: "Fire Ant Club", w: "Fire_Ant_Club", meta: "T3 · Crit Daze · 80/80/100 · Slow · Analyze Fire Ant Mandibles" },
            { n: "Tick Macuahuitl", w: "Tick_Macuahuitl", meta: "T3 · Life Steal · 46/46/58 · Fast · Analyze Tick Fang / BP 14" },
            { n: "Scythe of Blossoms", w: "Scythe_of_Blossoms", meta: "T3 · Yoked Blows · 70/70/88 · Fast · Analyze Mantis Claw" },
            { n: "Toenail Scimitar", w: "Toenail_Scimitar", meta: "T3 · Infection · 55/55/69 · Fast · Analyze Toenail" },
            { n: "Widow Dagger", w: "Widow_Dagger", meta: "T3 · Venom · 38/38 · Fast · Analyze Super Spider Venom" },
            { n: "Rusty Spear", w: "Rusty_Spear", meta: "T3 · Infection · 46/46/58 · Fast · Analyze Rust / BP 14" },
            { n: "Acid Edge", w: "Acid_Edge", meta: "T3 · Sour · 95/95/118 · Average · Ominent Data Disk" },
            { n: "Tiger Mosquito Rapier", w: "Tiger_Mosquito_Rapier", meta: "T3 Life Steal · 40/40/50 · Fast · Analyze Tiger Mosquito Beak / BP 15" },
            { n: "Sizzle Striker", w: "Sizzle_Striker", meta: "T3 · Spicy · 100/100/125 · Slow · ASL Terminal (NG+3)" },
            { n: "Pucker Thumper", w: "Pucker_Thumper", meta: "T3 · Sour · 100/100/125 · Slow · ASL Terminal (NG+2)" },
            { n: "Fresh Coldtana", w: "Fresh_Coldtana", meta: "T3 · Fresh · 85/85/106 · Average · ASL Terminal (NG+3)" },
            { n: "Sour Katanga", w: "Sour_Katanga", meta: "T3 · Sour · 85/85/106 · Average · ASL Terminal (NG+1)" },
            { n: "Fresh Edge", w: "Fresh_Edge", meta: "T3 · Fresh · 95/95/118 · Average · ASL Terminal (NG+3)" },
            { n: "Blazing Edge", w: "Blazing_Edge", meta: "T3 · Spicy · 95/95/118 · Average · ASL Terminal (NG+2)" },
            { n: "Breathslayer", w: "Breathslayer", meta: "T3 · Fresh · 85/85/106 · Average · ASL Terminal (NG+1)" },
            { n: "Tingle Tongue", w: "Tingle_Tongue", meta: "T3 · Sour · 85/85/106 · Average · ASL Terminal (NG+2)" },
            { n: "Frosted Flake", w: "Frosted_Flake", meta: "T3 · Fresh · 95/95/118 · Average · ASL Terminal (NG+1)" },
            { n: "Pepper Flake", w: "Pepper_Flake", meta: "T3 · Spicy · 95/95/118 · Average · ASL Terminal (NG+2)" },
            { n: "Wallopeño", w: "Wallope%C3%B1o", meta: "T3 · Spicy · 100/100/125 · Slow · ASL Terminal (NG+1)" },
            { n: "Picklemaul", w: "Picklemaul", meta: "T3 · Sour · 100/100/125 · Slow · ASL Terminal (NG+3)" },
            { n: "Salt Chipper", w: "Salt_Chipper", meta: "T3 · Salty · 100/100/125 · Slow · ASL Terminal (NG+3)" },
            { n: "Fungnir", w: "Fungnir", meta: "T3 · 55/55/69 · Fast · Analyze Infected Ant Mandibles" },
            { n: "Stinger Spear", w: "Stinger_Spear", meta: "T2 · Crit Chance · 32/32/40 · Fast · Analyze Bee Fuzz/Stinger / BP 7" },
            { n: "Red Ant Club", w: "Red_Ant_Club", meta: "T2 · 58/58/73 · Slow · Analyze Red Ant Mandibles / BP 5" },
            { n: "Spider Fang Dagger", w: "Spider_Fang_Dagger", meta: "T2 · Poison · 23/23 · Fast · Analyze Spider Fang/Venom / BP 8" },
            { n: "Mosquito Needle", w: "Mosquito_Needle", meta: "T2 · Life Steal · 25/25/31 · Fast · Analyze Mosquito Beak / BP 7" },
            { n: "Black Ant Sword", w: "Black_Ant_Sword", meta: "T2 · 39/39/49 · Fast · Analyze Black Ant Mandibles / BP 10" },
            { n: "Ant Queen Scepter", w: "Ant_Queen_Scepter", meta: "T2 · 15/15/19 · Slow · Analyze Red Ant Queen Pheromone" },
            { n: "Pebblet Spear", w: "Pebblet_Spear", meta: "T1 · 20/20/25 · Fast · Analyze Pebblet (throwable)" },
            { n: "Spiky Sprig", w: "Spiky_Sprig", meta: "T1 · Bleed · 40/40/50 · Slow · Analyze Sprig/Thistle Needle / BP 2" },
            { n: "Larva Blade", w: "Larva_Blade", meta: "T1 · Poison · 20/20/25 · Fast · Analyze Larva Spike" }
          ]
        },
        {
          name: "Busting",
          items: [
            { n: "Black Ox Hammer", w: "Black_Ox_Hammer", meta: "T3 · 72/72/90 · Slow · Analyze Black Ox Horn / BP 13" },
            { n: "Insect Hammer", w: "Insect_Hammer", meta: "T2 · 42/42/53 · Slow · Analyze Berry Leather / BP 6" },
            { n: "Pebblet Hammer", w: "Pebblet_Hammer", meta: "T1 · 26/26/33 · Slow · Analyze Crude Rope / BP 1" }
          ]
        },
        {
          name: "Chopping",
          items: [
            { n: "Termite Axe", w: "Termite_Axe", meta: "T3 · 59/59/74 · Average · Analyze Termite Chompers / BP 12" },
            { n: "Insect Axe", w: "Insect_Axe", meta: "T2 · 35/35/44 · Average · Analyze Ladybug Head / BP 6" },
            { n: "Pebblet Axe", w: "Pebblet_Axe", meta: "T1 · 20/20/25 · Average · Analyze Crude Rope / BP 1" }
          ]
        },
        {
          name: "Digging",
          items: [
            { n: "Black Ant Shovel", w: "Black_Ant_Shovel", meta: "T2 · Dmg 20 · Slow · Analyze Black Ant Head / BP 10" },
            { n: "Acorn Shovel", w: "Acorn_Shovel", meta: "T1 · Dmg 10 · Slow · Analyze Acorn Shell / BP 3" }
          ]
        },
        {
          name: "Ranged",
          items: [
            { n: "Splinter Arrow", w: "Splinter_Arrow", meta: "T3 · Dmg 15 · Analyze Wooden Splinter" },
            { n: "Super Gas Arrow", w: "Super_Gas_Arrow", meta: "T3 · Gas Hazard · Dmg 15 · Analyze Super Stink Sack" },
            { n: "Mint Staff", w: "Mint_Staff", meta: "T3 · Fresh · Dmg 78 · Fast · Buy Candy Staves (ASL)" },
            { n: "Spicy Staff", w: "Spicy_Staff", meta: "T3 · Spicy · Dmg 75 · Fast · Buy Candy Staves (ASL)" },
            { n: "Sour Staff", w: "Sour_Staff", meta: "T3 · Sour · Dmg 80 · Fast · Buy Candy Staves (ASL)" },
            { n: "Super Venom Arrow", w: "Super_Venom_Arrow", meta: "T3 · Poison · Dmg 15 · Analyze Super Spider Venom" },
            { n: "Bomb Arrow", w: "Bomb_Arrow", meta: "T3 · Dmg 60 · Water Logged Recipe" },
            { n: "Black Ox Crossbow", w: "Black_Ox_Crossbow", meta: "T3 · Rough Reload · Varies · Slow · Analyze Black Ox Part" },
            { n: "Sour Arrow", w: "Sour_Arrow", meta: "T3 · Sour · Dmg 15 · Analyze Sour Lump" },
            { n: "Bard's Bow", w: "Bard%27s_Bow", meta: "T3 · Minor Threat · Varies · Average · Analyze Wasp Queen Wing" },
            { n: "Ant Queen Staff", w: "Ant_Queen_Staff", meta: "T3 · Dmg 50 · Fast · Analyze Fire Ant Queen Pheromone" },
            { n: "Burny Rounds", w: "Burny_Rounds", meta: "T3 · -Dmg Resist · Dmg 75 · Analyze EverChar Coal Chunk" },
            { n: "Splody Rounds", w: "Splody_Rounds", meta: "T3 · Dmg 80 · Analyze Gunpowder Clump" },
            { n: "'Merica Rounds", w: "%27Merica_Rounds", meta: "T3 · Dmg 75" },
            { n: "Blaster of the Moldy Matriarch", w: "Blaster_of_the_Moldy_Matriarch", meta: "T3 · Dmg 125 · Average · Analyze Infected Venom" },
            { n: "Insect Bow", w: "Insect_Bow", meta: "T2 · Varies · Average · Analyze Spider Fang / BP 8" },
            { n: "Crow Crossbow", w: "Crow_Crossbow", meta: "T2 · Rough Reload · Varies · Slow · Analyze Crow Feather Piece" },
            { n: "Feather Arrow", w: "Feather_Arrow", meta: "T2 · Dmg 10 · Analyze Crow Feather Piece" },
            { n: "Salt Arrow", w: "Salt_Arrow", meta: "T2 · Salty · Dmg 15 · Analyze Salt Shard" },
            { n: "Mint Arrow", w: "Mint_Arrow", meta: "T2 · Fresh · Dmg 15 · Analyze Mint Shard" },
            { n: "Spicy Arrow", w: "Spicy_Arrow", meta: "T2 · Spicy · Dmg 15 · Analyze Spicy Shard" },
            { n: "Roman Candle", w: "Roman_Candle", meta: "T2 · Dmg 75 · Fast" },
            { n: "Pointy Rounds", w: "Pointy_Rounds", meta: "T2 · Dmg 25 · Analyze Crow Feather Piece" },
            { n: "Sappy Rounds", w: "Sappy_Rounds", meta: "T2 · -Move Speed · Dmg 25 · Analyze Salt Shard" },
            { n: "Sprig Bow", w: "Sprig_Bow", meta: "T1 · Varies · Average · Analyze Gnat Fuzz / BP 2" },
            { n: "Arrow", w: "Arrow", meta: "T1 · Dmg 5 · Analyze Mite Fuzz/Thistle Needle / BP 2" },
            { n: "Venom Arrow", w: "Venom_Arrow", meta: "T1 · Poison · Dmg 5 · Analyze Spider Venom" },
            { n: "Lure Arrow", w: "Lure_Arrow", meta: "T1 · Dmg 5 · Buy Lures (ASL)" },
            { n: "Gas Arrow", w: "Gas_Arrow", meta: "T1 · Gas Hazard · Dmg 5 · Analyze Stinkbug Gas Sack" },
            { n: "Pollen Arrow", w: "Pollen_Arrow", meta: "T1 · -Move Speed/Flyer Stun · Dmg 5 · Analyze Pollen" },
            { n: "Rocky Rounds", w: "Rocky_Rounds", meta: "T1 · Dmg 50 · Buy Acorn Turret (ASL)" },
            { n: "Groundy Rounds", w: "Groundy_Rounds", meta: "T1 · Dmg 25 · Buy Acorn Turret (ASL)" }
          ]
        },
        {
          name: "Explosive",
          items: [
            { n: "Killbasa", w: "Killbasa", meta: "T3 · Dmg 450 · Offer Moldy Hoagie to an Infected Ant Queen" },
            { n: "Splatburst", w: "Splatburst", meta: "T2 · Dmg 300 · Buy Recipe (ASL) · sticks on hit" },
            { n: "Bratburst", w: "Bratburst", meta: "T1 · Dmg 300 · Analyze Fungal Growth/Red Ant Egg / BP 6" }
          ]
        },
        {
          name: "Light",
          items: [
            { n: "EverChar Torch", w: "EverChar_Torch", meta: "T2 · Reusable · Analyze EverChar Coal Chunk" },
            { n: "Torch", w: "Torch", meta: "T1 · Off-hand light · Analyze Dry Grass Chunk" },
            { n: "Torch+", w: "Torch%2B", meta: "T1 · Upgraded torch · Buy Torch Upgrade (ASL)" },
            { n: "Slime Mold Torch", w: "Slime_Mold_Torch", meta: "Short-lived light · Analyze Slime Mold Stalk" }
          ]
        },
        {
          name: "Repair",
          items: [
            { n: "Ant Queen Repair Tool", w: "Ant_Queen_Repair_Tool", meta: "Radius building repair · Analyze Black Ant Queen Pheromone" },
            { n: "Repair Tool", w: "Repair_Tool", meta: "Repairs structures · Analyze Clay" }
          ]
        },
        {
          name: "Shield",
          items: [
            { n: "Fire Ant Shield", w: "Fire_Ant_Shield", meta: "T3 · Block Corrosion · Analyze Fire Ant Head" },
            { n: "Ladybird Shield", w: "Ladybird_Shield", meta: "T3 · Block Free Attack · Analyze Ladybird Shell" },
            { n: "Infected Ant Shield", w: "Infected_Ant_Shield", meta: "T3 · Explosive Resist · Analyze Infected Ant Part" },
            { n: "Black Ant Shield", w: "Black_Ant_Shield", meta: "T2 · Defensive Stance · Analyze Black Ant Part / BP 10" },
            { n: "Weevil Shield", w: "Weevil_Shield", meta: "T1 · Defensive Stance · Analyze Raw Weevil Meat" }
          ]
        },
        {
          name: "Underwater",
          items: [
            { n: "Bone Dagger", w: "Bone_Dagger", meta: "T2 · 25/25 · Fast · Analyze Diving Bell Spider Chunk/Sunken Bone" },
            { n: "Bone Trident", w: "Bone_Trident", meta: "T2 · 32/32/40 · Fast · Analyze Diving Bell Spider Chunk/Sunken Bone" },
            { n: "Pebblet Dagger", w: "Pebblet_Dagger", meta: "T1 · 14/14 · Fast · Analyze Lilypad Wax / BP 4" },
            { n: "Slime Lantern", w: "Slime_Lantern", meta: "Underwater light · Analyze Eelgrass/Lilypad Wax / BP 5" },
            { n: "Slime Lantern+", w: "Slime_Lantern%2B", meta: "Upgraded diving lantern · Buy Diving Lantern Upgrade (ASL)" }
          ]
        },
        {
          name: "Misc & Uncategorized",
          items: [
            { n: "Decoy Bait", w: "Decoy_Bait", meta: "Predator distraction · Analyze Raw Tadpole Meat" },
            { n: "Basketball", w: "Basketball", meta: "Playground ball · Analyze Web Fiber" },
            { n: "Pupa Basketball", w: "Pupa_Basketball", meta: "Playground ball · Analyze Pupa Leather" },
            { n: "BURG.L's Old Flipper", w: "BURG.L%27s_Old_Flipper", meta: "T3 Victory Feast · 60/60/75 · Slow · BURG.L Bundle (NG+1)" },
            { n: "Pinch Whacker", w: "Pinch_Whacker", meta: "T3 · Short Circuit · 45/45/56 · Average · Berry Outpost crevice (Bratburst)" },
            { n: "Prod Smacker", w: "Prod_Smacker", meta: "T3 · Shockwave · 110/110/138 · Slow · Black Anthill Lab (all MIX.R done)" },
            { n: "Infused Axe", w: "Infused_Axe", meta: "T4 · 71/71/89 · Mantis (NG+4) · 10 Infused Ooze" },
            { n: "Infused Blaster", w: "Infused_Blaster", meta: "T4 · Dmg 150 · Infected Broodmother (NG+4)" },
            { n: "Infused Bow", w: "Infused_Bow", meta: "T4 · Varies · Wasp Queen (NG+4)" },
            { n: "Infused Club", w: "Infused_Club", meta: "T4 · 125/125/157 · Hedge Broodmother (NG+4)" },
            { n: "Infused Crossbow", w: "Infused_Crossbow", meta: "T4 · Varies · Wasp Queen (NG+4)" },
            { n: "Infused Dagger", w: "Infused_Dagger", meta: "T4 · 46/46 · Hedge Broodmother (NG+4)" },
            { n: "Infused Greatsword", w: "Infused_Greatsword", meta: "T4 · 102/102/128 · Mant (NG+4)" },
            { n: "Infused Hammer", w: "Infused_Hammer", meta: "T4 · 86/86/108 · Mant (NG+4)" },
            { n: "Infused Scythe", w: "Infused_Scythe", meta: "T4 · 84/84/105 · Mantis (NG+4)" },
            { n: "Infused Spear", w: "Infused_Spear", meta: "T4 · 66/66/83 · Director Schmector (NG+4)" },
            { n: "Infused Sword", w: "Infused_Sword", meta: "T4 · 66/66/83 · Infected Broodmother (NG+4)" }
          ]
        }
      ]
    }

,

    /* ---------------- ARMOR ---------------- */
    {
      id: "armor",
      title: "Armor",
      blurb: "Craftable armor defends against the backyard's hazards. Every 3-piece set has a full-set bonus, and all pieces can be upgraded at the Smithing Station (the Sleek path adds a unique effect). Each entry below is a complete set.",
      wiki: "Armor_(Grounded)",
      groups: [
        {
          name: "Armor Sets",
          items: [
            { n: "Acorn Armor", w: "Acorn_Armor", meta: "T1 · Heavy (30% DR) · Piece: Major Threat / +Max Health · Set bonus: Uncrackable (+15 block stun)" },
            { n: "Clover Armor", w: "Clover_Armor", meta: "T1 · Light (10% DR) · Piece: Tenderfoot Defense / Trickle Regen · Set: Trickle Regen (1 HP/10s)" },
            { n: "Grub Armor", w: "Grub_Armor", meta: "T1 · Medium (20% DR) · Piece: Tenderfoot Offense / Hyperstamina · Set: Optimized Offense (−10% stamina regen time)" },
            { n: "Red Ant Armor", w: "Red_Ant_Armor", meta: "T1 · Light (10% DR) · Piece: +Hauling Strength · Set: HumAnt (Red ants ignore the player)" },
            { n: "Red Strategist Armor", w: "Red_Strategist_Armor", meta: "T1 · Medium (20% DR) · Piece: +Summon Aggro/Thorns · Set: Red Ant Commander (10% to summon a Red Soldier Ant)" },
            { n: "Bee Armor", w: "Bee_Armor", meta: "T2 · Light · Stamina-focused set (full detail on wiki)" },
            { n: "Black Ant Armor", w: "Black_Ant_Armor", meta: "T2 · Medium · Digging/looting-focused set" },
            { n: "Black Strategist Armor", w: "Black_Strategist_Armor", meta: "T2 · Medium · Summon-focused (Black Ant Queen variant)" },
            { n: "Koi Scale Armor", w: "Koi_Scale_Armor", meta: "T2 · Heavy · Strong defensive set from Koi Fish Scales" },
            { n: "Ladybug Armor", w: "Ladybug_Armor", meta: "T2 · Medium · Healing/survivability set" },
            { n: "Spider Armor", w: "Spider_Armor", meta: "T2 · Medium · Set: +25% stamina regeneration" },
            { n: "Antlion Armor", w: "Antlion_Armor", meta: "T3 · Light · Trip/perfect-block focused set" },
            { n: "Assassin's Armor", w: "Assassin%27s_Armor", meta: "T3 · Light · Critical-hit / stealth-focused set" },
            { n: "Black Ox Armor", w: "Black_Ox_Armor", meta: "T3 · Heavy · Top-tier tank set (Black Ox parts)" },
            { n: "Fire Ant Armor", w: "Fire_Ant_Armor", meta: "T3 · Medium · Corrosion / spicy-focused set" },
            { n: "Fire Strategist Armor", w: "Fire_Strategist_Armor", meta: "T3 · Medium · Summon-focused (Fire Ant Queen variant)" },
            { n: "Moldy Matriarch Armor", w: "Moldy_Matriarch_Armor", meta: "T3 · Medium · Infected Broodmother set; fungal/explosive theme" },
            { n: "Moth Armor", w: "Moth_Armor", meta: "T3 · Light · Mobility / stamina set from Moth parts" },
            { n: "Mother Demon Armor", w: "Mother_Demon_Armor", meta: "T3 · Heavy · Hedge Broodmother set; melee/aggression theme" },
            { n: "Roly Poly Armor", w: "Roly_Poly_Armor", meta: "T3 · Heavy · Block/defense-focused set" },
            { n: "Wasp Armor", w: "Wasp_Armor", meta: "T3 · Light · Ranged-damage-focused set" },
            { n: "Widow Armor", w: "Widow_Armor", meta: "T3 · Medium · Black Widow set; venom/poison theme" }
          ]
        },
        {
          name: "Standalone Pieces & Pet Attire",
          items: [
            { n: "Individual Head pieces", w: "Armor_(Grounded)#Head", meta: "Single-slot hats/masks (Mask of the Mother Demon, Mant Mask, Gas Mask, etc.) — see wiki" },
            { n: "Individual Body pieces", w: "Armor_(Grounded)#Body", meta: "Single-slot chest items not part of a 3-piece set — see wiki" },
            { n: "Individual Leg pieces", w: "Armor_(Grounded)#Legs", meta: "Single-slot leg items not part of a 3-piece set — see wiki" },
            { n: "Pet Attire", w: "Armor_(Grounded)#Pet_Attire", meta: "Cosmetic/protective attire for pets — see wiki" }
          ]
        }
      ]
    }

,

    /* ---------------- TRINKETS ---------------- */
    {
      id: "trinkets",
      title: "Trinkets",
      blurb: "Accessories that grant a passive effect — only one can be equipped at a time. Most are rare drops or hidden in hard-to-reach places. Grouped by how they're obtained.",
      wiki: "Trinkets",
      groups: [
        {
          name: "Crafted (Workbench)",
          items: [
            { n: "Glowbasa Necklace", w: "Glowbasa_Necklace", meta: "T3 · 12 DeDuper Jelly · Randomized status effect · Unlock: Moldy Hoagie to 3 Infected Ant Queens" },
            { n: "Sarah's Charm", w: "Sarah%27s_Charm", meta: "T3 · Left + Right Elf Charm + Pond Moss + Tough Gunk · +Invincible Attack & +Invincible Shielding" },
            { n: "Glowbasa Wristband", w: "Glowbasa_Wristband", meta: "T2 · 8 DeDuper Jelly · Randomized status effect · Unlock: Moldy Hoagie to 2 Infected Ant Queens" },
            { n: "Astonishing Acid", w: "Astonishing_Acid", meta: "T1 · 5 Acid Gland + 2 Sap · +Finale Damage · Analyze Acid Gland" },
            { n: "Glowbasa Link", w: "Glowbasa_Link", meta: "T1 · 4 DeDuper Jelly · Randomized status effect · Unlock: Moldy Hoagie to 1 Infected Ant Queen" },
            { n: "Nifty Needle", w: "Nifty_Needle", meta: "T1 · Thistle Needle + Sap + Gnat Fuzz · +Charged Shot Damage" },
            { n: "Sturdy Shell", w: "Sturdy_Shell", meta: "T1 · Acorn Shell + Sap + Grub Hide · +Friendly Fire Defense, +Major Threat" }
          ]
        },
        {
          name: "Creature Drops",
          items: [
            { n: "Broodmother Trinket", w: "Broodmother_Trinket", meta: "T3 · Hedge Broodmother · Perk: Summon Poison" },
            { n: "Infected Broodmother Trinket", w: "Infected_Broodmother_Trinket", meta: "T3 · Infected Broodmother · Perk: Blastwave" },
            { n: "Mantis Trinket", w: "Mantis_Trinket", meta: "T3 · Mantis · Perk: Finale Crit Boost" },
            { n: "Science Cone", w: "Science_Cone", meta: "T3 · NG+ creatures · Randomized status effect" },
            { n: "Speed Droplet", w: "Speed_Droplet", meta: "T3 · Steal from Aphids · Perk: The Quickness" },
            { n: "Unstable Capacitor", w: "Unstable_Capacitator", meta: "T3 · Raid TAYZ.T · Perk: Short Circuit" },
            { n: "Volatile Fang", w: "Volatile_Fang", meta: "T3 · Steal from Infected Wolf Spiders · Perk: Explosive Perfect Block" },
            { n: "Wasp Queen Trinket", w: "Wasp_Queen_Trinket", meta: "T3 · Wasp Queen · Perk: Arrow Refund" },
            { n: "Giddy Goop", w: "Giddy_Goop", meta: "T2 · Firefly · Perk: Finale Goo" },
            { n: "Insulating Larva Spike", w: "Insulating_Larva_Spike", meta: "T2 · Ladybird Larva · Perk: Sizzle Protection" },
            { n: "Science Waffle", w: "Science_Waffle", meta: "T2 · NG+ creatures · Randomized status effect" },
            { n: "Science Crinkle", w: "Science_Crinkle", meta: "T1 · NG+ creatures · Randomized status effect" }
          ]
        },
        {
          name: "Resource Drops",
          items: [
            { n: "Everlasting Hogstopper", w: "Everlasting_Hogstopper", meta: "T3 · Billy Hog · Perk: +Food Generation" },
            { n: "Pucker Charm", w: "Pucker_Charm", meta: "T3 · Sour Candy · Perk: +Sour Attack" },
            { n: "Fancy Fletching", w: "Fancy_Fletching", meta: "T2 · Crow Feather · Perk: Effortless Arrows" },
            { n: "Fluffy Dandelion Tuft", w: "Fluffy_Dandelion_Tuft", meta: "T2 · Dandelion · Infinite dandelion glider" },
            { n: "Fungal Charm", w: "Fungal_Charm", meta: "T2 · Haze Fungus · Perk: +Explosive Resist" },
            { n: "Spectacular Spicy Shard", w: "Spectacular_Spicy_Shard", meta: "T2 · Spicy Candy · Perk: +Spicy Attack" },
            { n: "Shiny Salt Crystal", w: "Shiny_Salt_Crystal", meta: "T2 · Salt Cluster · Perk: +Salty Attack" },
            { n: "Suspicious Mint", w: "Suspicious_Mint", meta: "T2 · Fresh Mint · Perk: +Fresh Attack" },
            { n: "Valentine's Fortune", w: "Valentine%27s_Fortune", meta: "T2 · Chocolate · Perk: +Vampirism" }
          ]
        },
        {
          name: "Ominent Badges",
          items: [
            { n: "Biomedical Badge", w: "Biomedical_Badge", meta: "T2 · Sandbox (buried treasure near zipline) · +Trickle Regen, Food Conversion" },
            { n: "Compliance Badge", w: "Compliance_Badge", meta: "T2 · Under outlet at Hedge outskirts · +Parry Heal, −Damage Resist" },
            { n: "Defense Badge", w: "Defense_Badge", meta: "T2 · Haze Lab crevice · +Damage Resist, −Attack Damage" },
            { n: "Entomologist Badge", w: "Entomologist_Badge", meta: "T2 · BBQ Spill (under charcoal) · +Attack, Imperfect Block" },
            { n: "Health And Safety Badge", w: "Health_And_Safety_Badge", meta: "T2 · Wasp Nest · +Life Steal, −Damage Resist" },
            { n: "Intern Badge", w: "Intern_Badge", meta: "T2 · Upper Grasslands (T3 chopping tool needed) · +Hauling, −Movement Speed" },
            { n: "Toxicology Badge", w: "Toxicology_Badge", meta: "T2 · Near Pond Lab breaker · +Gas Resist, +Dust Guard, −Poison Resist" }
          ]
        },
        {
          name: "Unique (one-of-a-kind)",
          items: [
            { n: "BURG.L Charm: Black Anthill", w: "BURG.L_Charm", meta: "T3 · End of Black Anthill Lab (NG+) · Perk: Dust Guard" },
            { n: "BURG.L Charm: Haze", w: "BURG.L_Charm", meta: "T3 · End of Haze Lab (NG+) · Perk: Gas Guard" },
            { n: "BURG.L Charm: Hedge", w: "BURG.L_Charm", meta: "T3 · End of Hedge Lab (NG+) · Perk: Fall Immunity" },
            { n: "BURG.L Charm: Pond", w: "BURG.L_Charm", meta: "T3 · End of Pond Lab (NG+) · Perk: Veteran Diver" },
            { n: "Deuces Sign", w: "Deuces_Sign", meta: "T3 · Under porch near Rake Rock Point · Perk: Deuces" },
            { n: "Power Droplet", w: "Power_Droplet", meta: "T3 · Wall crevice behind Brawny Boy Bin · Perk: Fury (unarmed)" },
            { n: "Rotten Berry Charm", w: "Rotten_Berry_Charm", meta: "T3 · Berry Outpost · Perk: Rotten Deluge" },
            { n: "Shield Solidifier", w: "Shield_Solidifier", meta: "T3 · Sour Wormholes rocket (Brawny Boy Bin) · Perk: +Block Strength" },
            { n: "Thor's Pendant", w: "Thor%27s_Pendant", meta: "T3 · Crevice on the fallen Stump · Perk: Pendant" },
            { n: "Wittle Widowling", w: "Wittle_Widowling", meta: "T3 · Black Widow Web Sac (Brawny Boy Bin) · Perk: Widowling Wrangler" },
            { n: "Left Elf Charm", w: "Left_Elf_Charm", meta: "T2 · Outpost outside Pond Dome (Asst. Manager Keycard) · +Invincible Shielding" },
            { n: "Right Elf Charm", w: "Right_Elf_Charm", meta: "T2 · Chest in Stump Lab Outpost · +Invincible Attack" },
            { n: "Sticky Fingers", w: "Sticky_Fingers", meta: "T2 · Chewed Gum in Upper Grasslands toolbox (Bomb Arrow + T3 bow) · Steal Item" }
          ]
        },
        {
          name: "Other (Playgrounds only)",
          items: [
            { n: "Web Clippers", w: "Web_Clippers", meta: "T1 · Playgrounds-only · Perk: +Web Damage (2× vs web harvestables)" }
          ]
        }
      ]
    }

,

    /* ---------------- QUESTS ---------------- */
    {
      id: "quests",
      title: "Quests",
      blurb: "Story Quests form the main game chain (tied to Biomes and Labs), while Tutorial Quests teach core mechanics on the side. BURG.L also hands out a large pool of apprentice and daily side quests.",
      wiki: "Quests",
      groups: [
        {
          name: "Story Quests",
          items: [
            { n: "Investigate Surroundings", w: "Quests", meta: "Look around for what you can find; find more evidence · Prereq: start the game" },
            { n: "Strange Signal", w: "Quests", meta: "Prereq: complete Investigate Surroundings" },
            { n: "The Mysterious Machine", w: "Mysterious_Machine", meta: "Discover the Mysterious Machine" },
            { n: "Grounded for Repairs", w: "Quests", meta: "Unblock the obstructed laser; find what's weakening a laser · Prereq: The Mysterious Machine" },
            { n: "The Mysterious Machine Part 2", w: "Mysterious_Machine", meta: "Prereq: complete Grounded For Repairs" },
            { n: "Explosion", w: "Quests", meta: "Investigate the Oak Tree explosion; explore the lab; help & chat with BURG.L · Prereq: Mysterious Machine Part 2" },
            { n: "Random Access Memories", w: "Quests", meta: "Use the Biometric Scanner at the Oak Lab ASL Terminal; retrieve all four Super Chips · Prereq: Explosion" },
            { n: "The Black Ant Lab", w: "Black_Anthill_Lab", meta: "Talk to BURG.L about the Black Anthill Lab" },
            { n: "The Hedge Lab", w: "Hedge_Lab", meta: "Find & explore the Hedge Lab; get terminal password; retrieve the Hedge Super Chip" },
            { n: "The Haze Lab", w: "Haze_Lab", meta: "Find & enter the Haze Lab; find & return the Haze Super Chip" },
            { n: "The Pond", w: "Pond_Lab", meta: "Find the Pond Lab; switch all breakers; explore the submerged lab; return the Pond Super Chip" },
            { n: "The Missing Scientist", w: "Quests", meta: "Prereq: complete Random Access Memories" },
            { n: "Troubles Brewin'", w: "JavaMatic", meta: "Brew the Embiggening Cocktail at the JavaMatic; repair & defend the MIX.R modules · Prereq: The Missing Scientist" },
            { n: "Go Big Or Never Go Home", w: "Quests", meta: "Install the Embiggening Cell in the SPAC.R and turn it on · Prereq: Troubles Brewin'" },
            { n: "Milk Molars", w: "Milk_Molars", meta: "Collect a Milk Molar" },
            { n: "Mega Milk Molars", w: "Milk_Molars", meta: "Collect a Mega Milk Molar" }
          ]
        },
        {
          name: "Tutorial Quests",
          items: [
            { n: "A Little Slurp", w: "Quests", meta: "Find water (and clean water if Nasty Water drunk) · Trigger: reach 50% Water" },
            { n: "A Small Snack", w: "Quests", meta: "Find & eat food; pick and eat a mushroom · Trigger: reach 50% Hunger" },
            { n: "Rock Bottom", w: "Quests", meta: "Use the Resource Analyzer on Plant Fiber & Pebblet · Trigger: ~3.5 min without analyzing" },
            { n: "Armed and Mini", w: "Quests", meta: "Prereq: complete Rock Bottom" },
            { n: "Workbench Woes", w: "Quests", meta: "Trigger: one day passes without making a Workbench" },
            { n: "Lucky Find", w: "Quests", meta: "Prereq: complete Workbench Woes" },
            { n: "Advanced Bushcraft", w: "Quests", meta: "Craft a piece of armor · Prereq: complete Lucky Find" },
            { n: "Apprentice Smith", w: "Quests", meta: "Trigger: obtain a Brittle Marble or Quartzite Shard" },
            { n: "Build Shelter", w: "Quests", meta: "Trigger: after 17:00 on day one" },
            { n: "Settling In", w: "Quests", meta: "Set respawn at your Lean-To · Prereq: complete Build Shelter" },
            { n: "Catching Some Zs", w: "Quests", meta: "Sleep through the night at your lean-to · Trigger: after 22:00 day one" },
            { n: "Light It Up", w: "Quests", meta: "Craft a torch · Trigger: enter a cave or nightfall" },
            { n: "It's Just a Scratch", w: "Quests", meta: "Take any damage or perfect-block an attack" },
            { n: "Bug Knowledge", w: "Quests", meta: "Trigger: one day passes without unlocking a Creature Card" },
            { n: "Diving The Depths", w: "Quests", meta: "Trigger: drown in the Koi Pond with no diving gear" },
            { n: "Spending Science", w: "Quests", meta: "Buy a Science Shop upgrade at the ASL Terminal · Prereq: 1st objective of Random Access Memories" }
          ]
        },
        {
          name: "BURG.L Side Quests",
          items: [
            { n: "Apprentice Quests (99 total)", w: "BURG.L_Quests", meta: "99 non-repeatable tasks given by BURG.L. Completing 20 unlocks daily quests." },
            { n: "Daily Quests", w: "BURG.L_Quests", meta: "Repeatable daily tasks from BURG.L; rerollable once per day. Unlocked after 20 apprentice quests." }
          ]
        }
      ]
    }

,

    /* ---------------- MUTATIONS ---------------- */
    {
      id: "mutations",
      title: "Mutations",
      blurb: "Perks earned by completing challenges. You start with 2 equip slots (up to 5 via Milk Molars). Most unlockable mutations have 3 phases that upgrade as you repeat a task. There are 41 total.",
      wiki: "Mutations",
      groups: [
        {
          name: "Purchasable (from BURG.L)",
          items: [
            { n: "Meat Shield", w: "Mutations", meta: "Increases Max Health by 50 · Buy from BURG.L (Raw Science)" },
            { n: "Buff Lungs", w: "Mutations", meta: "Increases Max Stamina by 50 · Requires Red Anthill BURG.L Chip" },
            { n: "Daredevil", w: "Mutations", meta: "−50% fall damage; can't die to fall damage at full health · Requires Hedge BURG.L Chip" },
            { n: "Battle Buddies", w: "Mutations", meta: "−75% friendly-fire damage dealt & taken · Requires Pond BURG.L Chip" },
            { n: "Dissection Expert", w: "Mutations", meta: "+10% creature loot drop-chance · Requires Forgotten BURG.L Chip" }
          ]
        },
        {
          name: "Unlockable — Weapon Mastery",
          items: [
            { n: "Lil Fist", w: "Mutations", meta: "Stacking unarmed damage buff; P3: every punch guarantees a 2nd hit · Kill 40/100/200 with fists" },
            { n: "Chopper", w: "Mutations", meta: "Axe hits lower Bust/Chop/Stab resist; P3: negates stamina regen delay · Kill 40/100/200 with an Axe" },
            { n: "Smasher", w: "Mutations", meta: "Hammer hits slow target attack speed; P3: +6 stun · Kill 40/100/200 with a Hammer" },
            { n: "Javelineer", w: "Mutations", meta: "Spear hits reflect damage; +throw damage; P3: +30% charge damage · Kill 40/100/200 with a Spear" },
            { n: "Assassin", w: "Mutations", meta: "Dagger hits inflict bleed; P3: −25% enemy bleed resist · Kill 40/100/200 with a Dagger" },
            { n: "Sharpshooter", w: "Mutations", meta: "Bow/crossbow crit chance up; P3: candy arrows gain effects · Kill 40/100/200 with a Bow/Crossbow" },
            { n: "Barbarian", w: "Mutations", meta: "Clubs trigger Rage (+damage, −block window); P3: regen while raged · Kill 40/100/200 with a Club" },
            { n: "Blademaster", w: "Mutations", meta: "Sword hits lower enemy damage; P3: −90% exhaustion time · Kill 40/100/200 with a Sword" },
            { n: "Whittle Wizard", w: "Mutations", meta: "Candy staffs apply element effects; P3: −50% staff stamina cost · Kill 40/100/200 with a Candy Staff" }
          ]
        },
        {
          name: "Unlockable — Utility & Gathering",
          items: [
            { n: "Parry Master", w: "Mutations", meta: "Perfect blocks refund stamina (25/50/100) · Perfect Block 20/60/100 times" },
            { n: "Grass Master", w: "Mutations", meta: "+Chopping efficiency; grass harvest refunds stamina · Chop 50/200/500 blades of grass" },
            { n: "Rock Cracker", w: "Mutations", meta: "+Busting efficiency (50/75/100%) · Bust 25/60/105 rocks" },
            { n: "Hauling Hero", w: "Mutations", meta: "+Hauling Strength (+5/+10/+15) · Reach Coziness Level 2/3/4" },
            { n: "Coup de Grass", w: "Mutations", meta: "+Crit chance (2.5/5%) · Find 4-Leaf Clover landmark; roll a 20 at Minotaur Maze's End" },
            { n: "Trapper PEEP.R", w: "Mutations", meta: "+Crit damage (20/40/60%) · Obtain 20/40/60 Gold Creature Cards" },
            { n: "Rascal Rogue", w: "Mutations", meta: "Melee hits can steal loot (2/5/10%) · Find 1/4/7 Statue Figurines" },
            { n: "Juicy", w: "Mutations", meta: "Thirst decreases 50% slower · Discover 5 Juice Boxes" },
            { n: "Natural Explorer", w: "Mutations", meta: "+Movement Speed (20/35/50%, out of combat) · Discover 20/50/80 Landmarks" },
            { n: "Merteen", w: "Mutations", meta: "+10% underwater oxygen, +15% swim speed · Discover 5 Koi Pond landmarks" },
            { n: "Cardio Fan", w: "Mutations", meta: "+Stamina regen, −exhaustion time · Exhaust the player 100/250/500 times" },
            { n: "Reliable Friend", w: "Mutations", meta: "+Revive speed (25/50/75%) · Revive a friend 5/15/30 times" }
          ]
        },
        {
          name: "Unlockable — Defensive & Elemental",
          items: [
            { n: "Fresh Defense", w: "Mutations", meta: "+Gas/burn resistance, −sizzle rate · Eat 1/5/10 Mint Shards" },
            { n: "Spicy Safety", w: "Mutations", meta: "−Smash/stab damage taken (25/50%) · Eat 1/3 Spicy Shards" },
            { n: "Sour Sensation", w: "Mutations", meta: "Reflects damage to attacker (50/100/150%) · Eat 1/5/10 Sour Lumps" },
            { n: "Ant-nihilator", w: "Mutations", meta: "+Damage vs ants; P3: +10% ant damage resist · Kill 15/45/100 Black/Fire/Red Ants" },
            { n: "Mithridatism", w: "Mutations", meta: "+Poison resistance (25/50/75%) · Kill 1/5/10 Wolf Spiders" }
          ]
        },
        {
          name: "Unlockable — Boss & Event Rewards",
          items: [
            { n: "Mom Genes", w: "Mutations", meta: "Attacks/blocks may summon a friendly Spiderling; +50% poison damage · Kill the Hedge Broodmother" },
            { n: "Truffle Tussle", w: "Mutations", meta: "Unarmed hits may cause a fungal explosion (75 dmg) · Kill the Haze Lab Infected Ladybug" },
            { n: "Mantsterious Stranger", w: "Mutations", meta: "Attacks have 2% chance to summon a friendly Mant · Kill the Mant" },
            { n: "Apex Predator", w: "Mutations", meta: "Unlocks hidden powers in boss weapons · Kill the Mantis" },
            { n: "Corporate Kickback", w: "Mutations", meta: "Blocked attacks can grant melee lifesteal · Kill Director Schmector" },
            { n: "Shocking Dismissal", w: "Mutations", meta: "Blocked attacks can turn next hit into an AOE shock · Kill the Assistant Manager" },
            { n: "Bardic Inspiration", w: "Mutations", meta: "Bow attacks may play a buffing bardic melody · Kill the Wasp Queen" },
            { n: "Guard Dog", w: "Mutations", meta: "+Damage in defense events (10/25/50%) · Complete 1/4/9 Defense Events" },
            { n: "Spore Lord", w: "Mutations", meta: "Explosive damage grants stacking random buffs · Kill the Infected Broodmother" },
            { n: "Antbassador", w: "Mutations", meta: "Soldier ants turn neutral by phase · Befriend 1/2/3 Ant Queens" }
          ]
        }
      ]
    }

    /* More categories (Creatures, Tools, Armor, Trinkets, Consumables,
       Edibles, Resources, Mutations, Status Effects, Quests, Achievements,
       Creature Cards …) are appended here in subsequent passes. */
  ]
};
