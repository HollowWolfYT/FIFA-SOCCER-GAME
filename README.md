# ⚽ Soccer FC — 3D Football Game (Vite + Three.js)

## Quick Start

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## Controls

| Key | Action |
|-----|--------|
| `WASD` | Move player |
| `SHIFT` | Sprint (drains stamina) |
| `SPACE` | **Pass** (with ball) / **Switch player** (without ball) |
| `E` | **Shoot** (with ball) / **Tackle** (without ball) |
| `Q` | Through ball |
| `R` | Lob shot |
| `ESC` | Pause / Resume |

---

## Custom Models (Sketchfab / Blender)

### Adding a Stadium

1. Export your model as **`.glb`** (binary glTF)
2. Place it in `/public/stadium.glb`
3. In game, click **Adjust Field / Models** from the main menu
4. Check **Enable** under *Stadium Model*
5. Click **Apply**
6. Use the **Sta. Y**, **Sta. Scale**, **Sta. RotY** sliders to align
7. If your stadium has its own grass, check **Hide Pitch**

### Adding a Custom Player Model

1. Export your player model as **`/public/player.glb`**
2. In game → **Adjust Field / Models** → check **Enable** under *Player Model*
3. Click **Apply** — all players will use this model
4. Use **Scale**, **RotY**, and **Y Offset** sliders to align
5. Name meshes `jersey`/`shirt` and `shorts`/`pant` to get auto team colors

### Sketchfab Tips

- Download as **glTF** format (select *Embed textures*)
- Most Sketchfab models are very large — start with **Scale = 0.01**
- If the model is underground, increase **Sta. Y** (or **Y Offset** for players)
- If model faces wrong way, adjust **RotY**

### Console Debugging

Open browser console (F12) and adjust live:

```js
// Move stadium up
window.STADIUM_CONFIG.positionY = 5;

// Scale player model
window.PLAYER_CONFIG.scale = 0.015;
```

Then click **Apply** in the panel to rebuild.

---

## File Structure

```
fifa-soccer-game/
├── index.html          ← All UI, CSS, screens
├── vite.config.js
├── package.json
├── src/
│   └── main.js         ← All game logic
└── public/
    ├── stadium.glb     ← (Optional) your stadium
    └── player.glb      ← (Optional) your player
```

---

## Expanding the Game

### Add more players (less than 11 by default)

Edit `TEAMS.home.formation` and `TEAMS.away.formation` in `src/main.js`

### Change team colors

```js
const TEAMS = {
  home: {
    name: 'My Team',
    color: '#ff0000',    // jersey
    altColor: '#ffffff', // shorts
    gkColor: '#ffff00',  // goalkeeper
  }
}
```

### Adjust physics

```js
const GAME_CFG = {
  gravity: 22,     // higher = ball drops faster
  bounce: 0.55,    // 0 = no bounce, 1 = full bounce
  friction: 0.985, // ground friction
};
```

---

## Roadmap Ideas

- [ ] Formations selector (4-4-2, 5-3-2...)
- [ ] Corner kicks & free kicks
- [ ] Penalty shootout mode
- [ ] Local multiplayer (Player 2 arrows)
- [ ] Crowd SFX
- [ ] Weather effects
- [ ] Player ratings / skill system
