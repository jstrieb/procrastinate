/*
 * Created by Jacob Strieb
 * December 2020
 */


/*******************************************************************************
 * Helper functions
 ******************************************************************************/

/*
 * Generate a constant function that returns the input to this function. Named
 * for the K combinator (and because the letter K is short):
 * https://en.wikipedia.org/wiki/SKI_combinator_calculus
 */
function K(x) {
  return (() => x);
}



/*******************************************************************************
 * Main function
 ******************************************************************************/

/*
 * List of comics from which to pick randomly. Comment out any you don't want!
 */
const comic_list = {
  "Junior Scientist Power Hour": K("https://www.jspowerhour.com/random-comic"),
  "Existential Comics": K("https://existentialcomics.com/comic/random"),
  "Formal Sweatpants": K("https://formalsweatpants.com/?random"),
  "Left-Handed Toons": K("http://www.lefthandedtoons.com/random/"),
  "Buttersafe": K("https://www.buttersafe.com/random"),
  "Savage Chickens": K("https://www.savagechickens.com/?random="),
  "Moonbeard": K("https://moonbeard.com/?randomcomic"),
  "Happle Tea!": K("http://www.happletea.com/?random&nocache=1"),
  "XKCD": K("https://c.xkcd.com/random/comic/"),
  "The Perry Bible Fellowship": K("https://pbfcomics.com/random"),
  "Abstruse Goose": K("https://abstrusegoose.com/pseudorandom.php"),
  "Poorly Drawn Lines": K("http://www.poorlydrawnlines.com/?random"),
  "The Oatmeal": K("https://theoatmeal.com/feed/random"),
  "Cyanide and Happiness": K("http://explosm.net/comics/random"),
  "Gunshow": K("http://www.gunshowcomic.com/random"),
  "Nedroid": K("http://nedroid.com/?randomcomic=1"),
  "Wondermark": K("http://wondermark.com/random.php"),
  "Maximumble": K("https://maximumble.thebookofbiff.com/?random&nocache=1"),
};

function main() {
  let keys = Object.keys(comic_list);
  let rand_key = keys[Math.floor(Math.random() * keys.length)]
  let rand_url = comic_list[rand_key]();
  window.location.replace(rand_url);
}

main();

