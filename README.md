<div align="center">
<a href="https://jstrieb.github.io/procrastinate" target="_blank">
<img alt="Procrastinate" src="https://raw.githubusercontent.com/jstrieb/procrastinate/main/doc/button_path.svg" />
</a>
</div>

Web comics are way more fun than whatever you're supposed to be doing right
now.

Clicking the button above opens a random comic from a random creator. Drag it
to your bookmarks bar for endless fun!

# Comics

If you like the comics you see, please support the creators!

Currently, the project has 35 hard-coded comic sources, but more will be added
over time. View the current list
[here](https://github.com/jstrieb/procrastinate/blob/main/main.js#L83-114).

To not see certain comics, fork a copy and comment some lines out from that
list. I encourage self-hosting!

To recommend comics to be added, open an issue that either contains the
Instagram username of the artist, or a link to a "random" page on their
website. It is preferable to use their website if it exists and has a random
button. If there is no "random" page to be found, you can still post an issue,
but don't expect the site to be supported in the near future.

If you're impatient and don't want to wait for me to add your favorite comic
artist or site (I can be pretty slow about managing these kinds of things),
then I encourage you to fork the repository and host your own version.

If you are a comic creator and want your comic to be featured, or if you would
prefer this project use a different page/platform for viewing your comic,
please reach out and let me know!

# Bookmarklet

To avoid reconnecting to my website every time you want a new comic, this
repository includes a GitHub Action to automatically generate a "bookmarklet"
version of the code. The bookmarklet will run identically to the main script,
except if the main script is updated, the bookmarklet will not be.

To use the bookmarklet, go
[here](https://jstrieb.github.io/procrastinate/bookmarklet) and drag the big
button to your bookmarks bar.

# To-do

Long-term, I hope to add GitHub actions to periodically crawl websites that
don't have a random button, so that they can be supported. For example, I would
like to eventually support these sites:

- ~[Dinosaur Comics](https://www.qwantz.com/)~
- [Sorrowbacon](http://sorrowbacon.com)
- [Wheat Comics](http://wheatcomics.com)
- [The Jenkins Comic](https://thejenkinscomic.wordpress.com)
- [Buddy Gator](https://www.buddygator.com/)
- [Spiked Math Comics](http://spikedmath.com)
- [PhD Comics](http://spikedmath.com)
- [Dilbert](https://dilbert.com/)
- ... and many others!
