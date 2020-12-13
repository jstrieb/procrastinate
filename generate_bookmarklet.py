#!/usr/bin/python3


def main():
    with open("main.js", "r") as f:
        main_js = f.read()

    with open("bookmarklet.js", "w") as f:
        f.write("javascript:(() => {\n")
        f.write(main_js)
        f.write("\n})();")


if __name__ == "__main__":
    main()
