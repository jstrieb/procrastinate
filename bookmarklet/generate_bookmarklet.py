#!/usr/bin/python3


def main():
    with open("../main.js", "r") as f:
        main_js = f.read().replace("\n", "")

    with open("bookmarklet.js", "w") as f:
        f.write("javascript:(() => {\n")
        f.write(main_js)
        f.write("\n})();")

    with open("index.html", "w") as f:
        f.write(f"""
<!DOCTYPE html>
<html>
<head>
<title>Procrastination Button Bookmarklet</title>
<style>
* {{
  box-sizing: border-box;
}}

html {{
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  padding: 25px;
}}

body {{
  max-width: 66ch;
  margin: auto;
  text-align: justify;
}}

img {{
  max-width: 100%;
  margin: 0;
}}
</style>
</head>
<body>
<div align="center">
<a href='javascript:(() => {{{main_js}}})();' target="_blank">
<img alt="Procrastinate" src='https://raw.githubusercontent.com/jstrieb/procrastinate/main/doc/button_path.svg' />
</a>
</div>

<p>Web comics are way more fun than whatever you're supposed to be doing right
now.</p>

<p>Clicking the button above opens a random comic from a random creator. Drag
it to your bookmarks bar for endless fun!</p>

<h1>Bookmarklet</h1>

<p>To avoid reconnecting to my website every time you want a new comic, the
link above is a "bookmarklet" version of the code. The <a
href="https://github.com/jstrieb/procrastinate/bookmarklet/bookmarklet.js">bookmarklet</a>
will run identically to the main script, except if the main script is updated,
the bookmarklet will not be.</p>

<p>To install the bookmarlet, drag the big button above to your bookmarks
bar.</p>
</body>
</html>
""")


if __name__ == "__main__":
    main()
