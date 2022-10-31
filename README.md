# Directions
Install:
- yarn
- lerna
- nx (optional)
- rbxtsc

```bash
git clone https://github.com/backslashkeys/roblox-ts-node-modules-bug.git
cd roblox-ts-node-modules-bug/
yarn
lerna run build
lerna run build
cat game/out/server/main.server.lua
```
Run lerna twice so that package "@rbxts/grid" can be used for the game. I know this method is nonoptimal but simple.
You should get:
```lua
-- Compiled with roblox-ts v2.0.4
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Grid = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "grid", "out").Grid
local Janitor = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "grid", "node_modules", "@rbxts", "janitor").Janitor
local grid = Grid.new()
local janitor = Janitor.new()
grid:Destroy()
janitor:Destroy()
```
The issue is on line 4 where roblox-ts expects for there to be a janitor package under a second `node_modules` folder and will error if you try this in game.

Expected behavior:
```lua
-- Compiled with roblox-ts v2.0.4
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Grid = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "grid", "out").Grid
local Janitor = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "janitor").Janitor
local grid = Grid.new()
local janitor = Janitor.new()
grid:Destroy()
janitor:Destroy()
```

