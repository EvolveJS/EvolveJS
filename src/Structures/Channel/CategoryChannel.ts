/* eslint-disable no-mixed-spaces-and-tabs */

import { Channel, Overwrite, Guild, ICategoryChannel, EvolveClient, CHANNELTYPES } from "../..";
import { Objex } from "@evolvejs/objex";


export class CategoryChannel extends Channel {
    public overwrites: Objex<string, Overwrite> = new Objex();

    public guild?: Guild;
    public position: number;
    public name: string;

    constructor(data: ICategoryChannel, client: EvolveClient) {
    	super(data.id, CHANNELTYPES.Category, client);
    	this.guild = this.client.guilds.get(data.guild_id);
    	this.position = data.position;
    	this.name = data.name;
    }
}