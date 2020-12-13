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
  return (async () => x);
}

/*
 * Fetch a random instagram post for a given user via magic API incantations.
 * Return a thunk to fetch an image if this one is randomly selected.
 *
 * NOTE: Assumes that the user is public. If they go private, this whole thing
 * is gonna be a little bit fucked up
 */
function random_instagram(user_id) {
  return async function() {
    let INITIAL_FETCH_NUM = 12;

    /* Get the user's profile and find out how many photos we can pick from. */
    let variables = {
      "id": `${user_id}`,
      "first": INITIAL_FETCH_NUM,
    };
    let profile = await fetch(`https://instagram.com/graphql/query/`
      + `?query_hash=003056d32c2554def87228bc3fd9668a`
      + `&variables=${JSON.stringify(variables)}`)
      .then(r => r.json().then(j => j.data.user));
    let feed = profile.edge_owner_to_timeline_media;
    let post_count = feed.count;
    let cursor = feed.page_info.end_cursor;

    /* Pick a random photo */
    let photo_index = Math.floor(Math.random() * post_count);

    /* Fetch from the feed until we get the right number. */
    /* TODO: There has got to be a better way to do this than paging through
     * the whole feed... */
    let fetch_num = feed.edges.length;
    let fetched = fetch_num;
    while (fetched < photo_index + 1) {
      fetch_num = Math.min(50, photo_index - fetched + 1);
      variables = {
        "id": `${user_id}`,
        "first": fetch_num,
        "after": cursor,
      };
      profile = await fetch(`https://instagram.com/graphql/query/`
        + `?query_hash=003056d32c2554def87228bc3fd9668a`
        + `&variables=${JSON.stringify(variables)}`)
        .then(r => r.json().then(j => j.data.user));
      feed = profile.edge_owner_to_timeline_media;
      cursor = feed.page_info.end_cursor;
      fetched += fetch_num;
    }
    fetched -= fetch_num;

    let photo = feed.edges[photo_index - fetched].node;
    return `https://instagram.com/p/${photo.shortcode}`;
  }
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
  "Eirinnske Comics": random_instagram("232011854"),
};

async function main() {
  let keys = Object.keys(comic_list);
  /* TODO: weight randomness by estimated number of comics at each source to
   * reduce the likelihood of repeats */
  let rand_key = keys[Math.floor(Math.random() * keys.length)]
  let rand_url = await comic_list[rand_key]();
  window.location.replace(rand_url);
}

main();

