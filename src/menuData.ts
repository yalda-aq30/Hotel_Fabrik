export type DietKey = 'L' | 'VL' | 'G' | 'V';

export interface LocalizedText {
  fi: string;
  en: string;
}

export interface Dish {
  id: string;
  name: LocalizedText;
  price: string;
  addOn?: string;
  descFi: string;
  descEn: string;
  diets: DietKey[];
  optionalDiets?: DietKey[];
  wine?: { name: string; price: string };
  drink?: { name: string; price: string };
  image?: string;
  limited?: boolean;
  k18?: boolean;
}

export interface Category {
  id: string;
  image: string;
  dishes: Dish[];
}

export const DIET_INFO: Record<DietKey, { fi: string; en: string }> = {
  L: { fi: 'Laktoositon', en: 'Lactose-free' },
  VL: { fi: 'Vähälaktoosinen', en: 'Low lactose' },
  G: { fi: 'Gluteeniton', en: 'Gluten-free' },
  V: { fi: 'Vegaanisena saatavilla', en: 'Available as vegan' },
};

export const CATEGORIES: Category[] = [
  {
    id: 'starters',
    image: 'https://images.unsplash.com/photo-1504674905929-9e67e3b3f4f3?auto=format&fit=crop&w=1400&q=80',
    dishes: [
      {
        id: 'patatas-bravas',
        name: { fi: 'Patatas bravas', en: 'Patatas Bravas' },
        price: '7',
        descFi: 'Mausteisia perunoita, Villan tomaattikastiketta ja aiolia.',
        descEn: "Crispy spiced potatoes, Villa's tomato sauce and aioli.",
        diets: ['L'],
        optionalDiets: ['G', 'V'],
        wine: { name: 'Puerto Alicante Red, Spain', price: '7,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1639024471283-035a8a8f9f5e?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'burrata-bruschetta',
        name: { fi: 'Burrata bruschetta', en: 'Burrata Bruschetta' },
        price: '10',
        descFi: 'Valkosipuliöljyssä paahdettua hapanjuurileipää, salaattia, granaattiomenavinegrettiä, burrataa ja tomaattichutneytä.',
        descEn: 'Roasted bread in garlic oil, salad, pomegranate vinaigrette, burrata and tomato chutney.',
        diets: [],
        optionalDiets: ['G'],
        wine: { name: 'Domaine du Cleray Sauvignon Blanc, France', price: '8,40 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1572695157396-e6059c4464a9?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'katkaraputoast',
        name: { fi: 'Villan katkaraputoast', en: "Villa's Shrimp Toast" },
        price: '12',
        descFi: 'Käsin kuorittuja katkarapuja tillimajoneesissa, paahdettua leipää, pikkelöityä kurkkua ja punasipulivinegrettiä.',
        descEn: 'Hand peeled shrimps in dill mayonnaise, toasted bread, pickled cucumber and red onion vinaigrette.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Agarena Chardonnay, Spain', price: '7,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'harka-tartar',
        name: { fi: 'Härkä tartar', en: 'Beef Tenderloin Tartare' },
        price: '14',
        addOn: 'Add fries: +5,00 €',
        descFi: 'Härän sisäfileetä, pikkelöityä punajuurta, punasipulivinegrettiä, friteerattua kaprista, jalapenomajoneesia ja parmesaania.',
        descEn: 'Beef tenderloin tartare, pickled beetroot, red onion vinaigrette, fried capers, jalapeno mayonnaise and parmesan.',
        diets: ['L', 'G'],
        wine: { name: 'Wagram Pinot Noir, Austria', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'maalaiskanasalaatti',
        name: { fi: 'Maalaiskanasalaatti', en: 'Country Chicken Salad' },
        price: '9 € / 16 €',
        descFi: 'Salaattia, marinoitua kananrintaa, kirsikkatomaattia, granaattiomenavinegrettiä, paahdettua perunaa, krutonkia, aiolia ja parmesaania.',
        descEn: 'Salad, marinated chicken breast, cherry tomatoes, pomegranate vinaigrette, roasted potatoes, croutons, aioli and parmesan.',
        diets: ['L', 'G'],
        wine: { name: 'Fine Riesling, Germany', price: '7,20 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7eaa4?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'simple',
    image: 'https://images.unsplash.com/photo-1568901346378-23449d4e6e00?auto=format&fit=crop&w=1400&q=80',
    dishes: [
      {
        id: 'tarte-flambee',
        name: { fi: 'Tarte flambée', en: 'Tarte Flambée' },
        price: '12',
        descFi: 'Etelä-Ranskan bistrojen helmi. Uunissa rapeaksi paistetun pohjan päällä ranskankermaa, juustoa ja rucolaa. Valintasi mukaan pekoni-sipuli-valkosipuliöljy tai tomaatti-mozzarella-valkosipuliöljy.',
        descEn: "Crispy oven-baked base with crème fraiche, cheese and rocket salad. Choose between bacon-onion-garlic oil or tomato-mozzarella filling.",
        diets: ['L'],
        optionalDiets: ['VL'],
        wine: { name: 'Pinot Gris Tradition, France', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'villa-burger',
        name: { fi: 'Villa Burger', en: 'Villa Burger' },
        price: '20',
        descFi: 'Briossisämpylä, naudan jauhelihapihvi, pekonia, cheddaria, rucolaa, tomaattia, pikkelöityä punasipulia, Villan BBQ-majoneesia, ranskalaisia ja ranch-dippiä. Saatavana myös vegaanisena.',
        descEn: "Brioche bun, beef patty, bacon, cheddar, rocket salad, tomato, pickled red onion, Villa's BBQ-mayonnaise, french fries and ranch dip. Also available as vegan.",
        diets: ['L'],
        optionalDiets: ['G', 'V'],
        wine: { name: 'Wagram Pinot Noir, Austria', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1568901346378-23449d4e6e00?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'hot-wings',
        name: { fi: 'Hot wings', en: 'Hot Wings' },
        price: '18',
        descFi: '15kpl broilerin siipiä, porkkana- ja kurkkutikkuja sekä Villan aurajuustodippiä. Ranskalaisia ja ranch-dippiä. Valitse medium- tai hotkastike. Saatavana myös vegaanisena.',
        descEn: "15 pieces of chicken wings, carrot and cucumber sticks with Villa's blue cheese dip. French fries and ranch dip. Choose medium or hot sauce. Also available as vegan.",
        diets: ['L'],
        optionalDiets: ['G', 'V'],
        drink: { name: 'Lahden Erikois IPA, Finland', price: '10 € / 0,5 l' },
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'antipasto',
        name: { fi: 'Antipasto', en: 'Antipasto' },
        price: '21',
        descFi: "Valikoima juustoja ja leikkeleitä, Villan marinoituja oliiveja, artisokkaa, tomaattichutney ja juustoflambeeta.",
        descEn: 'A selection of cheeses and cold cuts, marinated olives, artichoke, tomato chutney and cheese flambee.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Michel Fonnen Pinot gris, France', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'mains',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80',
    dishes: [
      {
        id: 'pasta-norma',
        name: { fi: 'Pasta alla Norma', en: 'Pasta alla Norma' },
        price: '20',
        descFi: 'Marinarakastiketta, kirsikkatomaattia, munakoisoa, rigattonia, pinaattia ja burrataa.',
        descEn: 'Marinara sauce, cherry tomatoes, eggplants, spinach, rigattoni and burrata.',
        diets: [],
        optionalDiets: ['G', 'V'],
        wine: { name: 'Chianti Classico, Italy', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1473093295043-cdd81227cb88?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'pasta-pollo',
        name: { fi: 'Pasta con pollo', en: 'Pasta con Pollo' },
        price: '22',
        descFi: 'Sitruunaista kermakastiketta, marinoitua kananrintaa, linguinea, pinaattia ja parmesaania.',
        descEn: 'Lemon flavored cream sauce, marinated chicken breast, spinach and parmesan.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Agarena Chardonnay, Spain', price: '7,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a7?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'pasta-manzo',
        name: { fi: 'Pasta di manzo', en: 'Pasta di Manzo' },
        price: '24',
        descFi: 'Marinarakastiketta, paistettua häränfileetä, rigattonia, chimichurria ja parmesaania.',
        descEn: 'Marinara sauce, fried beef tenderloin, chimichurri and parmesan.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Valpolicella Ripasso, Italy', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'bearnaisekanaa',
        name: { fi: 'Béarnaisekanaa', en: 'Béarnaise Chicken' },
        price: '22',
        descFi: 'Maissilastuilla paneroitua kananrintaa, béarnaise-kastiketta, kauden kasviksia ja ranskalaisia.',
        descEn: 'Cornflake-crusted chicken breast, béarnaise sauce, seasonal vegetables and french fries.',
        diets: [],
        optionalDiets: ['G'],
        wine: { name: 'Puerto Alicante white, Spain', price: '7,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1598103442097-8b7c94b20c9d?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'siikaa',
        name: { fi: 'Siikaa', en: 'Whitefish' },
        price: '26',
        descFi: 'Paistettua siikaa, rapeaa rapukakkua, rapukastiketta, neulapapu-sienipaistosta ja bataattipyreetä.',
        descEn: 'Fried whitefish, crispy crab cake, crab sauce, fried green bean-mushroom bake and sweet potato puree.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: "Toni's Grüner Veltliner, Austria", price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a79900219?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'lehtipihvi',
        name: { fi: 'Villan lehtipihvi', en: "Villa's Minute Steak" },
        price: '26',
        descFi: 'Naudan lehtipihvi, punaviinikastiketta, nduja-voita, kauden kasviksia ja ranskalaisia.',
        descEn: 'Beef minute steak, red wine sauce, nduja flavored butter, seasonal vegetables and french fries.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Valpolicella Ripasso, Italy', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1558030006-450675393702?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'possu',
        name: { fi: 'Villan Possu', en: "Villa's Pork Chop" },
        price: '22',
        descFi: 'Seesamglaseerattua porsaankylkeä, pico de galloa, aiolia ja ranskalaisia.',
        descEn: 'Sesame glazed pork chop, pico de gallo, aioli and french fries.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Paololeo Passitivo Primitivo, Italy', price: '8,40 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1529563021893-cc83c1a3f0d9?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'petite-tender',
        name: { fi: 'Petite tender', en: 'Petite Tender' },
        price: '29',
        descFi: 'Naudan petite tenderiä, jalapenovoita, punaviinikastiketta, kauden kasviksia ja bataattilohkoja.',
        descEn: 'Beef petite tender, jalapeno butter, red wine sauce, seasonal vegetables and sweet potato wedges.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Chateau Peyhaud, France', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'hevosta',
        name: { fi: 'Hevosta Black & white', en: 'Horse Black & White' },
        price: '32',
        limited: true,
        descFi: '180g hevosen sisäfileettä, punaviinikastiketta, rapeita parmesaaniperunoita, kauden kasviksia ja aiolia. Rajallinen saatavuus.',
        descEn: '180g horse tenderloin, red wine sauce, crispy parmesan potatoes, seasonal vegetables and aioli. Limited availability.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Valpolicella Ripasso, Italy', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'pippuripihvi',
        name: { fi: 'Pippuripihvi', en: 'Pepper Steak' },
        price: '36',
        descFi: '180g naudan sisäfileettä, pippurikastiketta, neulapapu-sienipaistosta ja rapeita perunoita.',
        descEn: '180g beef tenderloin, pepper sauce, fried green bean-mushroom bake and crispy potatoes.',
        diets: ['L'],
        optionalDiets: ['G'],
        wine: { name: 'Chateau Peyhaud, France', price: '10,80 € / 12 cl' },
        image: 'https://images.unsplash.com/photo-1600891964599-f1ba1c4e6e1e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=80',
    dishes: [
      {
        id: 'pannacotta',
        name: { fi: 'Pannacotta', en: 'Pannacotta' },
        price: '9',
        descFi: 'Tumma suklaapannacotta, sormisuolaa, maitocrumblea ja passiongeeliä.',
        descEn: 'Dark chocolate pannacotta, finger salt, milk crumble and passiongel.',
        diets: ['L', 'G'],
        wine: { name: 'Recioto Farina Valpolicella Classico, Italy', price: '10 € / 8 cl' },
        image: 'https://images.unsplash.com/photo-1532799235296-f975b4b4f704?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'valkosuklaa',
        name: { fi: 'Valkosuklaata & raparperia', en: 'White Chocolate & Rhubarb' },
        price: '10',
        descFi: 'Sitruuna-valkosuklaajäädykettä, raparperia ja mantelikakkua.',
        descEn: 'Lemon-white chocolate parfait, rhubarb and almond cake.',
        diets: ['G'],
        wine: { name: 'Sobrero Moscato d\'Asti, Italy', price: '9 € / 8 cl' },
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0ac1770?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'sgroppino',
        name: { fi: 'Sgroppino', en: 'Sgroppino' },
        price: '10',
        k18: true,
        descFi: 'Sitruunasorbettia ja proseccoa.',
        descEn: 'Lemon sorbet and prosecco.',
        diets: ['L', 'G'],
        image: 'https://images.unsplash.com/photo-1551538827-9cdfb94c8b9c?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'jaateloa',
        name: { fi: 'Jäätelöannos', en: 'Ice Cream Dessert' },
        price: '9',
        descFi: '2 palloa vaniljajäätelöä, valitsemasi kastike ja kermavaahtoa.',
        descEn: '2 scoops of vanilla ice cream, sauce of your choice and whipped cream.',
        diets: ['L', 'G'],
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'drinks',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2e1a5d3f3?auto=format&fit=crop&w=1400&q=80',
    dishes: [],
  },
];

export interface DrinkItem {
  name: string;
  price: string;
}

export const APERITIFS: DrinkItem[] = [
  { name: 'Negroni', price: '8,50 €' },
  { name: 'Campari Spritz', price: '13 €' },
  { name: 'Bianco', price: '8 €' },
  { name: 'Whisky Sour', price: '12 €' },
  { name: 'Lillet Blanc', price: '8,50 €' },
  { name: 'Vodka Sour', price: '12 €' },
];

export const AVEC: DrinkItem[] = [
  { name: 'Irish Coffee', price: '12 €' },
  { name: 'Baileys Coffee', price: '11 €' },
  { name: 'French Coffee', price: '11 €' },
  { name: 'Espresso Martini', price: '13 €' },
  { name: 'Meukow VSOP', price: '12,50 €' },
  { name: 'Disaronno', price: '8 €' },
  { name: 'Baileys', price: '8 €' },
  { name: 'Fabrik Gin', price: '12,50 €' },
];

export interface WineItem {
  name: string;
  origin: string;
  grapes?: string;
  descFi: string;
  glass?: string;
  bottle: string;
  nonAlcoholic?: boolean;
}

export const WINE_LIST: { section: string; sectionFi: string; wines: WineItem[] }[] = [
  {
    section: 'Champagne',
    sectionFi: 'Samppanja',
    wines: [
      { name: 'Puerto Alicante, Spain', origin: 'Spain', glass: '7,80 €', bottle: '46 €', grapes: 'Macabeo, Chardonnay, Moscatel', descFi: 'Raikas ja täyteläinen' },
    ],
  },
  {
    section: 'Sparkling',
    sectionFi: 'Kuohuviinit',
    wines: [
      { name: 'Prosecco di Valdobbiadene, Italy', origin: 'Italy', glass: '8,00 €', bottle: '42 €', descFi: 'Kevyt ja hedelmäinen' },
    ],
  },
  {
    section: 'White Wines',
    sectionFi: 'Valkoviinit',
    wines: [
      { name: 'Domaine du Cleray Sauvignon Blanc, France', origin: 'France', glass: '8,40 €', bottle: '48 €', descFi: 'Raikas, mineraalinen' },
      { name: 'Agarena Chardonnay, Spain', origin: 'Spain', glass: '7,80 €', bottle: '44 €', descFi: 'Pehmeä ja pyöreä' },
      { name: 'Fine Riesling, Germany', origin: 'Germany', glass: '7,20 €', bottle: '40 €', descFi: 'Kukkainen ja raikas' },
      { name: "Toni's Grüner Veltliner, Austria", origin: 'Austria', glass: '10,80 €', bottle: '58 €', descFi: 'Pippurinen ja mineraalinen' },
      { name: 'Pinot Gris Tradition, France', origin: 'France', glass: '10,80 €', bottle: '56 €', descFi: 'Täyteläinen ja mausteinen' },
    ],
  },
  {
    section: 'Red Wines',
    sectionFi: 'Punaviinit',
    wines: [
      { name: 'Puerto Alicante Red, Spain', origin: 'Spain', glass: '7,80 €', bottle: '46 €', descFi: 'Pehmeä, marjaisa' },
      { name: 'Wagram Pinot Noir, Austria', origin: 'Austria', glass: '10,80 €', bottle: '56 €', descFi: 'Kevyt, kirsikkainen' },
      { name: 'Chianti Classico, Italy', origin: 'Italy', glass: '10,80 €', bottle: '58 €', descFi: 'Kirsikkainen, tanniininen' },
      { name: 'Valpolicella Ripasso, Italy', origin: 'Italy', glass: '10,80 €', bottle: '62 €', descFi: 'Täyteläinen, mausteinen' },
      { name: 'Paololeo Passitivo Primitivo, Italy', origin: 'Italy', glass: '8,40 €', bottle: '48 €', descFi: 'Hillitön, pehmeä' },
      { name: 'Chateau Peyhaud, France', origin: 'France', glass: '10,80 €', bottle: '60 €', descFi: 'Täyteläinen, pyöreä' },
    ],
  },
  {
    section: 'Dessert Wines',
    sectionFi: 'Jälkiruokaviinit',
    wines: [
      { name: 'Recioto Farina Valpolicella Classico, Italy', origin: 'Italy', glass: '10 €', bottle: '—', descFi: 'Makea, samettinen / 8 cl' },
      { name: "Sobrero Moscato d'Asti, Italy", origin: 'Italy', glass: '9 €', bottle: '—', descFi: 'Hedelmäinen, kevyt / 8 cl' },
    ],
  },
  {
    section: 'Non-Alcoholic',
    sectionFi: 'Alkoholittomat',
    wines: [
      { name: 'Alkoholiton kuohuva 0%', origin: 'Finland', bottle: '6 €', descFi: 'Raikas, alkoholiton', nonAlcoholic: true },
      { name: 'Kaura Smoothie 0%', origin: 'Finland', bottle: '5 €', descFi: 'Kaura, marja', nonAlcoholic: true },
    ],
  },
];
