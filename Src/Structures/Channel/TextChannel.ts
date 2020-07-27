import Channel from './Channel';
import { ITextChannel } from '../../Interfaces/TextChannelOptions';
import { CHANNELTYPES, Snowflake } from '../../Constants/Constants';
import Overwrite from './Overwrite';
import { Client } from '../../Client/Client';
import Guild from '../Guild/Guild';
import CategoryChannel from './CategoryChannel';
import { Objex } from '@evolvejs/objex';

export default class extends Channel {
	public overwrites: Objex<Snowflake, Overwrite> = new Objex();

	public guild: Guild;
	public position: number;
	public name: string;
	public topic?: string;
	public nsfw: boolean;
	public lastMessage?: Snowflake;
	public rateLimit: number;
	public parent?: CategoryChannel;
	public lastPin?: number;

	constructor(data: ITextChannel, client: Client) {
		super(data.id, CHANNELTYPES.Text, client);

		this.setCache(data);

		this.guild = this.client.guilds.get(data.guild_id)!;
		this.position = data.position;
		this.name = data.name;
		this.topic = data.topic || undefined;
		this.nsfw = data.nsfw;
		this.rateLimit = data.rate_limit_per_user;
		this.parent = data.parent_id
			? this.client.channels.get(data.parent_id) as CategoryChannel
			: undefined;
		this.lastPin = data.last_pin_timestamp;
	}

	private setCache(data: ITextChannel) {
		for (let raw of data.permission_overwrites)
			this.overwrites.set(raw.id, new Overwrite(raw));
	}
}
