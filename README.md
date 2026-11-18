# ARKA · Motorworks

A scroll site for a studio that builds one-off cars. The page opens on three cars; scrolling flies the camera over the middle car's bonnet, through the windscreen and into the cabin, where a statement arrives word by word. Below it a workshop picture grows from the middle of the screen, three ideas pass one at a time on square cards, a sentence lights up as it crosses the screen, and the services wipe past with their pictures. The last section is a form to start a build.

"Arka" is a demo brand. The company, the cars and the contact details are invented.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Run it
```bash
python -m http.server 5194
```
Then open http://localhost:5194.

## Edit it
Everything the site says is in `config.js`: the brand, the headline, the statement, the approach, the three ideas, the long sentence, the services and the closing section.

## Media
- `assets/car/`: the three cars (`lineup`), the cabin (`cabin`), the workshop picture (`craft`), three square pictures for the ideas (`value-1` to `value-3`) and four for the services (`body`, `wheels`, `lights`, `exhaust`). The Interior service reuses `cabin`.
- `assets/film/`: the fly-in as a frame sequence (`f-0001.jpg` onwards, with `manifest.json`). Without it, the first picture zooms in and the cabin fades up through it.

## Files
```
index.html      all sections
styles.css      all styles
config.js       all the content
app.js          the film, the scroll effects and the form
guide.html      how the pictures and the clip were made
```
