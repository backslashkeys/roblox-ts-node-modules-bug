import { Janitor } from "@rbxts/janitor";

export class Grid {
	janitor = new Janitor();

	Destroy() {
		this.janitor.Destroy();
	}
}
